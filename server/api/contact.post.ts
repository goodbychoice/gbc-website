import { createClient } from "@supabase/supabase-js";
import { contactCategories } from "#shared/contact";

// POST /api/contact：入力確認 → Supabase保存 → Slack通知の順で処理する。
export default defineEventHandler(async (event) => {
  // サーバー側の環境変数から各サービスの接続情報を取得する。
  const { supabaseUrl, supabaseSecretKey, slackWebhookUrl } = useRuntimeConfig(event);

  // DBへの接続情報が未設定なら、問い合わせの受付を停止する。
  if (!supabaseUrl || !supabaseSecretKey) {
    throw createError({
      statusCode: 503,
      statusMessage: "お問い合わせ機能は準備中です。",
    });
  }

  // Nuxtの機能で送信データを読み込み、DBへ渡してよい内容か検証する。
  const body = await readValidatedBody(event, (value) => {
    // JSONの形式とサイズを確認し、想定外のデータを受け付けない。
    if (!value || typeof value !== "object" || Array.isArray(value)) return false;
    if (JSON.stringify(value).length > 12000) return false;

    // 必須項目の型と、プライバシーポリシーへの同意を確認する。
    const input = value as Record<string, unknown>;
    if (
      typeof input.name !== "string" ||
      typeof input.email !== "string" ||
      typeof input.message !== "string" ||
      typeof input.category !== "string" ||
      input.consent !== true
    ) return false;

    // 前後の空白を除去してから、文字数などを確認する。
    const name = input.name.trim();
    const email = input.email.trim();
    const message = input.message.trim();

    // メール形式・項目の長さ・SupabaseのEnumと一致する種別を確認する。
    if (
      !name ||
      name.length > 100 ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !contactCategories.some((category) => category === input.category) ||
      message.length < 10 ||
      message.length > 5000
    ) return false;

    // DBに保存する4項目だけを返す（同意チェックは保存しない）。
    return { name, email, category: input.category, message };
  });

  // Supabase公式SDKをサーバー専用のSecret Keyで初期化する。
  const supabase = createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });

  // Supabaseに保存する。ID・対応状況・日時はDBの初期値を利用する。
  const { error } = await supabase.from("contact_messages").insert(body);

  // 保存に失敗した場合は成功として扱わない。
  if (error) {
    console.error("お問い合わせの保存に失敗しました。", error.message);
    throw createError({
      statusCode: 503,
      statusMessage: "送信できませんでした。時間をおいて再度お試しください。",
    });
  }

  // DB保存後、設定されている場合だけSlackへ新着通知を送る。
  // Slackの通知失敗によって、保存済みのお問い合わせを再送させない。
  if (slackWebhookUrl) {
    await $fetch(slackWebhookUrl, {
      method: "POST",
      body: {
        text: `新しいお問い合わせが届きました。\n種別：${body.category}\nSupabaseで内容を確認してください。`,
      },
    }).catch(() => console.error("Slack通知に失敗しました。"));
  }

  // 保存できたことをフォームへ返す（Slack通知の成否には依存しない）。
  return { ok: true };
});
