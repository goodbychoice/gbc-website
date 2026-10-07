<script setup lang="ts">
// お問い合わせページの検索結果・SNS共有向け情報を設定する。
useSeoMeta({
  title: "お問い合わせ | GBC",
  description:
    "GBCへのご相談・ご依頼はこちらから。Simple Study、フェンリル、華の騎士団、Pandora、取材・協業などのお問い合わせを受け付けます。",
  ogTitle: "お問い合わせ | GBC",
  ogDescription:
    "GBCへのご相談・ご依頼はこちらから。Simple Study、フェンリル、華の騎士団、Pandora、取材・協業などのお問い合わせを受け付けます。",
  twitterTitle: "お問い合わせ | GBC",
  twitterDescription:
    "GBCへのご相談・ご依頼はこちらから。Simple Study、フェンリル、華の騎士団、Pandora、取材・協業などのお問い合わせを受け付けます。",
});

// APIと共通の種別一覧を使用し、選択肢の食い違いを防ぐ。
import { contactCategories } from "#shared/contact";

// Vercelへの移行・接続確認までは、公開フォームを無効にしておく。
const formEnabled = useRuntimeConfig().public.contactFormEnabled;
// 画面に入力された内容を1つのオブジェクトにまとめる。
const form = reactive({
  name: "",
  email: "",
  category: "",
  message: "",
  consent: false,
});
// 送信中・送信完了・エラー表示の状態を管理する。
const sending = ref(false);
const sent = ref(false);
const sendError = ref("");
// 送信完了後、完了表示を確実に視界へ入れるために参照する。
const successMessage = ref<HTMLElement | null>(null);

// 送信ボタンが押されたときに、Nuxt Server APIへ問い合わせを送る。
async function submitContact() {
  // 準備中や二重送信の場合は処理しない。
  if (!formEnabled || sending.value) return;

  // 送信開始時にボタンを無効にし、前回のエラー表示を消す。
  sending.value = true;
  sendError.value = "";

  try {
    // API側で入力検証・DB保存・Slack通知を行う。
    await $fetch("/api/contact", { method: "POST", body: form });
    // 保存成功後は入力欄の代わりに受付完了メッセージを表示する。
    sent.value = true;
    await nextTick();
    // 長いフォームの下部から送信しても、完了表示が埋もれないよう中央へ移動する。
    successMessage.value?.scrollIntoView({ behavior: "smooth", block: "center" });
  } catch {
    // エラーの内部情報は出さず、メールでの連絡手段も案内する。
    sendError.value = "送信できませんでした。時間をおいて再度お試しいただくか、メールにてご連絡ください。";
  } finally {
    // 成功・失敗に関係なく送信中の状態を解除する。
    sending.value = false;
  }
}
</script>

<template>
  <main class="bg-[#f4f1ea] text-[#111317]">
    <section
      class="border-b-2 border-black/20 px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
    >
      <div class="mx-auto w-full max-w-[1600px]">
        <p
          class="text-[15px] font-semibold tracking-[0.04em] text-black/52 sm:text-[16px]"
        >
          GBCへのご相談・ご依頼
        </p>

        <h1
          class="mt-8 text-[clamp(3.2rem,8vw,8rem)] font-semibold leading-[1.02] tracking-[-0.06em]"
        >
          お問い合わせ
        </h1>

        <p
          class="mt-10 max-w-[1050px] text-[clamp(2rem,4vw,4.2rem)] font-semibold leading-[1.22] tracking-[-0.045em]"
        >
          自分の力で始めたい。<br class="hidden sm:block" />
          そのためにGBCが必要なら。
        </p>

        <p
          class="mt-10 max-w-[820px] text-[18px] leading-[2] text-black/68 sm:text-[19px] md:text-[21px]"
        >
          サービスについてのご相談、ご依頼、取材・協業などについて、こちらからお問い合わせいただけます。
        </p>
      </div>
    </section>

    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            お問い合わせフォーム
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <!-- フォームが未公開の場合のみ準備中の案内を表示する。 -->
          <div v-if="!formEnabled" class="border-y border-black/20 py-6">
            <p class="text-[15px] font-semibold text-black/72 sm:text-[16px]">
              フォーム送信機能は現在準備中です。
            </p>
            <p class="mt-2 text-[14px] leading-[1.8] text-black/60 sm:text-[15px]">
              現在のお問い合わせは、下記メールアドレスをご利用ください。
            </p>
          </div>

          <!-- 送信成功時は、余白とタイポグラフィで完了状態を明確に見せる。 -->
          <div
            v-if="sent"
            ref="successMessage"
            role="status"
            aria-live="polite"
            class="py-3 sm:py-6"
          >
            <div class="flex items-center gap-4">
              <div
                aria-hidden="true"
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#111317] text-[22px] font-semibold text-[#f4f1ea]"
              >
                ✓
              </div>
              <p class="text-[12px] font-semibold tracking-[0.18em] text-black/42 sm:text-[13px]">
                MESSAGE SENT
              </p>
            </div>

            <p
              class="mt-8 max-w-[820px] text-[clamp(2.3rem,4vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.055em]"
            >
              お問い合わせを<br class="hidden sm:block" />
              受け付けました。
            </p>

            <p class="mt-7 max-w-[620px] text-[16px] leading-[2] text-black/60 sm:text-[17px]">
              送信ありがとうございます。<br class="hidden sm:block" />
              内容を確認のうえ、順次ご返信いたします。
            </p>

            <div class="mt-10 h-px w-full bg-black/20" />
          </div>

          <!-- 送信完了前だけ入力フォームを表示する。 -->
          <form
            v-if="!sent"
            class="mt-12 space-y-10"
            :aria-label="formEnabled ? 'お問い合わせフォーム' : 'お問い合わせフォーム（準備中）'"
            @submit.prevent="submitContact"
          >
            <div>
              <label for="name" class="block text-[15px] font-semibold">お名前</label>
              <input
                id="name"
                v-model="form.name"
                name="name"
                type="text"
                required
                maxlength="100"
                autocomplete="name"
                :disabled="!formEnabled || sending"
                placeholder="山田 太郎"
                class="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-4 text-[17px] outline-none placeholder:text-black/35 focus:border-black disabled:cursor-not-allowed disabled:opacity-55"
              />
            </div>

            <div>
              <label for="email" class="block text-[15px] font-semibold">メールアドレス</label>
              <input
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                required
                maxlength="254"
                autocomplete="email"
                :disabled="!formEnabled || sending"
                placeholder="example@example.com"
                class="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-4 text-[17px] outline-none placeholder:text-black/35 focus:border-black disabled:cursor-not-allowed disabled:opacity-55"
              />
            </div>

            <div>
              <label for="type" class="block text-[15px] font-semibold">お問い合わせ種別</label>
              <select
                id="type"
                v-model="form.category"
                name="category"
                required
                :disabled="!formEnabled || sending"
                class="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-4 text-[17px] outline-none focus:border-black disabled:cursor-not-allowed disabled:opacity-55"
              >
                <option disabled value="">選択してください</option>
                <option v-for="type in contactCategories" :key="type" :value="type">
                  {{ type }}
                </option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-[15px] font-semibold">お問い合わせ内容</label>
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                rows="7"
                required
                minlength="10"
                maxlength="5000"
                :disabled="!formEnabled || sending"
                placeholder="ご相談・ご依頼内容をご記入ください。（10文字以上）"
                class="mt-3 w-full resize-y border border-black/20 bg-transparent p-4 text-[17px] leading-[1.9] outline-none placeholder:text-black/35 focus:border-black disabled:cursor-not-allowed disabled:opacity-55"
              />
            </div>

            <!-- 個人情報の送信前にプライバシーポリシーへの同意を求める。 -->
            <label class="flex items-start gap-3 text-[14px] leading-[1.8] text-black/70">
              <input
                v-model="form.consent"
                name="consent"
                type="checkbox"
                required
                :disabled="!formEnabled || sending"
                class="mt-1 h-4 w-4 shrink-0 accent-[#111317] disabled:cursor-not-allowed"
              />
              <span>
                <NuxtLink
                  to="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="border-b border-black/30 text-[#111317] transition-colors hover:border-black"
                >
                  プライバシーポリシー
                </NuxtLink>
                に同意する
              </span>
            </label>

            <!-- 失敗した場合だけエラーを表示する。 -->
            <p v-if="sendError" role="alert" class="text-[14px] leading-[1.8] text-red-800">
              {{ sendError }}
            </p>

            <!-- 準備中・送信中はボタンを押せないようにする。 -->
            <button
              type="submit"
              :disabled="!formEnabled || sending"
              class="inline-flex min-w-[180px] items-center justify-center border border-[#111317] px-7 py-4 text-[15px] font-semibold transition-colors enabled:hover:bg-[#111317] enabled:hover:text-[#f4f1ea] disabled:cursor-not-allowed disabled:border-black/20 disabled:text-black/35"
            >
              {{ !formEnabled ? "送信機能は準備中" : sending ? "送信中…" : "送信する" }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <section
      class="px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            メールでのお問い合わせ
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p class="max-w-[760px] text-[17px] leading-[2] text-black/68 sm:text-[18px]">
            メールでのお問い合わせも受け付けています。内容を確認のうえ、順次ご返信いたします。
          </p>

          <a
            href="mailto:info@goodbychoice.co.jp"
            class="group mt-10 flex items-center justify-between gap-6 border-y border-black/20 py-7 transition-colors hover:text-black/60 sm:py-8"
          >
            <span
              class="text-[clamp(1.35rem,2.3vw,2.2rem)] font-semibold tracking-[-0.025em]"
            >
              info@goodbychoice.co.jp
            </span>
            <span
              aria-hidden="true"
              class="text-[1.8rem] leading-none transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>

          <p class="mt-5 text-[13px] leading-[1.8] text-black/42 sm:text-[14px]">
            お問い合わせ内容によっては、返信までお時間をいただく場合があります。
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
