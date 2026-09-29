const categories = [
  "Simple Study",
  "フェンリル",
  "華の騎士団",
  "Pandora",
  "取材・協業",
  "その他",
] as const;

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  // サーバー専用の接続情報が設定されていない場合は、データを保存しない。
  if (!config.supabaseUrl || !config.supabaseSecretKey) {
    throw createError({ statusCode: 503, statusMessage: "お問い合わせ機能は準備中です。" });
  }

  if (!getRequestHeader(event, "content-type")?.startsWith("application/json")) {
    throw createError({ statusCode: 415, statusMessage: "送信形式を確認してください。" });
  }

  const raw = await readRawBody(event);
  if (!raw || raw.length > 12000) {
    throw createError({ statusCode: 400, statusMessage: "入力内容を確認してください。" });
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    body = parsed as Record<string, unknown>;
  } catch {
    throw createError({ statusCode: 400, statusMessage: "入力内容を確認してください。" });
  }

  // 自動送信対策用の非表示項目。通常の利用者は入力しない。
  if (body.website) {
    return { ok: true };
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const category = body.category;
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    body.consent !== true ||
    name.length < 1 || name.length > 100 ||
    email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !categories.some((value) => value === category) ||
    message.length < 10 || message.length > 5000
  ) {
    throw createError({ statusCode: 400, statusMessage: "入力内容を確認してください。" });
  }

  const supabaseUrl = config.supabaseUrl.replace(/\/$/, "");

  try {
    // 秘密鍵はサーバー側からのみ、apikeyヘッダーで送信する。
    // 対応状況・ID・日時はデータベース側の初期値を利用する。
    await $fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
      method: "POST",
      headers: {
        apikey: config.supabaseSecretKey,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: { name, email, category, message },
      timeout: 8000,
    });
  } catch {
    // 個人情報や外部サービスのエラー詳細をログ・レスポンスに出さない。
    console.error("Contact message could not be saved.");
    throw createError({
      statusCode: 503,
      statusMessage: "送信できませんでした。時間をおいて再度お試しください。",
    });
  }

  // 保存後にSlack通知が失敗しても、利用者に再送信させない。
  if (config.slackWebhookUrl) {
    try {
      await $fetch(config.slackWebhookUrl, {
        method: "POST",
        body: {
          text: `GBC公式サイトに新しいお問い合わせが届きました。\n種別：${category}\nSupabaseのcontact_messagesをご確認ください。`,
        },
        timeout: 3000,
      });
    } catch {
      console.error("Contact was saved but Slack notification failed.");
    }
  }

  return { ok: true };
});
