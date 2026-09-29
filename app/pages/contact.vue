<script setup lang="ts">
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

const contactTypes = [
  "Simple Study",
  "フェンリル",
  "華の騎士団",
  "Pandora",
  "取材・協業",
  "その他",
] as const;

const formEnabled = useRuntimeConfig().public.contactFormEnabled;
const name = ref("");
const email = ref("");
const category = ref("");
const message = ref("");
const consent = ref(false);
const website = ref(""); // Hidden spam honeypot
const sending = ref(false);
const sent = ref(false);
const sendError = ref("");

async function submitContact() {
  if (!formEnabled || sending.value) return;
  sending.value = true;
  sendError.value = "";

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
        category: category.value,
        message: message.value,
        consent: consent.value,
        website: website.value,
      },
    });
    sent.value = true;
    name.value = "";
    email.value = "";
    category.value = "";
    message.value = "";
    consent.value = false;
  } catch {
    sendError.value =
      "送信できませんでした。時間をおいて再度お試しいただくか、メールにてご連絡ください。";
  } finally {
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
          <div v-if="!formEnabled" class="border-y border-black/20 py-6">
            <p class="text-[15px] font-semibold text-black/72 sm:text-[16px]">
              フォーム送信機能は現在準備中です。
            </p>
            <p class="mt-2 text-[14px] leading-[1.8] text-black/60 sm:text-[15px]">
              現在のお問い合わせは、下記メールアドレスをご利用ください。
            </p>
          </div>

          <div
            v-if="sent"
            role="status"
            aria-live="polite"
            class="border-y border-black/20 py-7 text-[16px] leading-[1.9]"
          >
            お問い合わせを受け付けました。内容を確認のうえ、順次ご返信いたします。
          </div>

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
                v-model="name"
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
                v-model="email"
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
                v-model="category"
                name="category"
                required
                :disabled="!formEnabled || sending"
                class="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-4 text-[17px] outline-none focus:border-black disabled:cursor-not-allowed disabled:opacity-55"
              >
                <option disabled value="">選択してください</option>
                <option v-for="type in contactTypes" :key="type" :value="type">
                  {{ type }}
                </option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-[15px] font-semibold">お問い合わせ内容</label>
              <textarea
                id="message"
                v-model="message"
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

            <!-- Hidden honeypot; legitimate users do not fill this field. -->
            <div aria-hidden="true" class="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label for="website">Webサイト</label>
              <input
                id="website"
                v-model="website"
                name="website"
                type="text"
                tabindex="-1"
                autocomplete="off"
              />
            </div>

            <label class="flex items-start gap-3 text-[14px] leading-[1.8] text-black/70">
              <input
                v-model="consent"
                name="consent"
                type="checkbox"
                required
                :disabled="!formEnabled || sending"
                class="mt-1 h-4 w-4 shrink-0 accent-[#111317] disabled:cursor-not-allowed"
              />
              <span>
                <NuxtLink
                  to="/privacy"
                  class="border-b border-black/30 text-[#111317] transition-colors hover:border-black"
                >
                  プライバシーポリシー
                </NuxtLink>
                に同意する
              </span>
            </label>

            <p v-if="sendError" role="alert" class="text-[14px] leading-[1.8] text-red-800">
              {{ sendError }}
            </p>

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
