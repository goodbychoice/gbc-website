import { contactCategories } from "#shared/contact";

export default defineEventHandler(async (event) => {
  const { supabaseUrl, supabaseSecretKey, slackWebhookUrl } = useRuntimeConfig(event);

  if (!supabaseUrl || !supabaseSecretKey) {
    throw createError({ statusCode: 503, statusMessage: "お問い合わせ機能は準備中です。" });
  }

  const body = await readValidatedBody(event, (value) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) return false;
    if (JSON.stringify(value).length > 12000) return false;

    const input = value as Record<string, unknown>;
    if (
      typeof input.name !== "string" ||
      typeof input.email !== "string" ||
      typeof input.message !== "string" ||
      typeof input.category !== "string" ||
      input.consent !== true
    ) return false;

    const name = input.name.trim();
    const email = input.email.trim();
    const message = input.message.trim();

    if (
      !name || name.length > 100 ||
      email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !contactCategories.some((category) => category === input.category) ||
      message.length < 10 || message.length > 5000
    ) return false;

    return { name, email, category: input.category, message };
  });

  // 保存できなかった場合は成功として扱わない。
  try {
    await $fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/contact_messages`, {
      method: "POST",
      headers: { apikey: supabaseSecretKey, Prefer: "return=minimal" },
      body,
    });
  } catch {
    console.error("お問い合わせの保存に失敗しました。");
    throw createError({
      statusCode: 503,
      statusMessage: "送信できませんでした。時間をおいて再度お試しください。",
    });
  }

  // Slackの通知失敗によって、保存済みのお問い合わせを再送させない。
  if (slackWebhookUrl) {
    await $fetch(slackWebhookUrl, {
      method: "POST",
      body: { text: `新しいお問い合わせが届きました。\n種別：${body.category}\nSupabaseで内容を確認してください。` },
    }).catch(() => console.error("Slack通知に失敗しました。"));
  }

  return { ok: true };
});
