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

  // This route must never attempt a write before server-side secrets are configured.
  if (!config.supabaseUrl || !config.supabaseSecretKey) {
    throw createError({ statusCode: 503, statusMessage: "お問い合わせ機能は準備中です。" });
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

  // A basic honeypot; the real users never see this field.
  if (body.website) {
    return { ok: true };
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const category = body.category;
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    !body.consent ||
    name.length < 1 || name.length > 100 ||
    email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !categories.some((value) => value === category) ||
    message.length < 10 || message.length > 5000
  ) {
    throw createError({ statusCode: 400, statusMessage: "入力内容を確認してください。" });
  }

  const supabaseUrl = config.supabaseUrl.replace(/\/$/, "");

  try {
    // Secret key is sent only from the server, in the apikey header.
    // status, id and timestamps use the database's defaults.
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
    // Do not log personal information or return provider error details.
    console.error("Contact message could not be saved.");
    throw createError({
      statusCode: 503,
      statusMessage: "送信できませんでした。時間をおいて再度お試しください。",
    });
  }

  // Once saved, a Slack outage must not result in the user submitting twice.
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
