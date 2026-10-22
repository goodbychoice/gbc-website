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

// 環境変数から公開フォームの有効状態を取得する。
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
  // フォーム無効時や二重送信時は処理しない。
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
    sendError.value =
      "送信できませんでした。時間をおいて再度お試しいただくか、メールにてご連絡ください。";
  } finally {
    // 成功・失敗に関係なく送信中の状態を解除する。
    sending.value = false;
  }
}
</script>

<template>
  <main>
    <!-- 最初の画面：「GBCについて」と同じく題を左に組む。読むためのページなので、題は特大にせずリードの大きさに抑える。 -->
    <!-- 題の下には、トップのお問い合わせと同じ一文を左に、説明を右に並べる。一文が半分の幅に収まらない画面では、説明を右下へずらす。 -->
    <section>
      <div class="mx-auto w-full max-w-brand px-5 pt-16 pb-28 sm:px-8 md:pt-20 md:pb-40 lg:px-12 lg:pt-24 lg:pb-52 xl:px-16">
        <SectionLabel class="animate-rise motion-reduce:animate-none">GBCへのご相談・ご依頼</SectionLabel>

        <!-- 「お」は字形の左の余白が大きく、行頭で引っ込んで見えるため、負のマージンで見た目の左端をそろえる。 -->
        <h1
          class="mt-10 font-serif text-lead font-features-['palt'] animate-rise motion-reduce:animate-none [animation-delay:150ms] md:mt-14"
        >
          <span class="-ml-[0.05em]">お問い合わせ</span>
        </h1>

        <div class="mt-16 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-24">
          <p
            class="col-span-12 font-serif text-catch font-features-['palt'] animate-rise motion-reduce:animate-none [animation-delay:400ms] xl:col-span-6"
          >
            自分の力で始めたい。<br />そのために<br class="md:hidden" />GBCが必要なら。
          </p>
          <p
            class="col-span-12 max-w-lg text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 animate-rise motion-reduce:animate-none [animation-delay:550ms] md:col-start-7 md:col-end-13"
          >
            サービスについてのご相談、ご依頼、取材・協業などについて、こちらからお問い合わせいただけます。
          </p>
        </div>
      </div>
    </section>

    <!-- フォーム：会社情報の台帳と同じく、左に項目名、右に入力欄を置く。項目名の列を空けたまま、同意と送信も入力欄の列にそろえる。 -->
    <PageSection heading="お問い合わせフォーム">
      <!-- 送信が終わったら、フォームの代わりに受付の一文を置く。題と同じく、行頭の「お」だけ左へ寄せる。 -->
      <div
        v-if="sent"
        ref="successMessage"
        role="status"
        aria-live="polite"
        class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20"
      >
        <p class="col-span-12 font-serif text-lead font-features-['palt']">
          <span class="-ml-[0.05em]">お問い合わせを</span><br />受け付けました。
        </p>
        <p
          class="col-span-12 mt-12 max-w-lg text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 md:col-start-7 md:col-end-13 md:mt-16"
        >
          送信ありがとうございます。内容を確認のうえ、順次ご返信いたします。
        </p>
      </div>

      <form
        v-else
        v-reveal
        class="mt-8 md:mt-12"
        :aria-label="formEnabled ? 'お問い合わせフォーム' : 'お問い合わせフォーム（利用不可）'"
        @submit.prevent="submitContact"
      >
        <!-- フォームが無効のときは、入力欄の前でメールの利用を案内する。文節で折り返し、語尾だけが次の行に落ちないようにする。 -->
        <div v-if="!formEnabled" class="grid grid-cols-12 gap-x-6 border-b border-brand-ink/15 py-5 md:py-6">
          <div class="col-span-12 [word-break:auto-phrase] md:col-start-5 md:col-end-13">
            <p class="text-lg/9 lg:text-xl/10 text-brand-ink">フォーム送信機能は現在ご利用いただけません。</p>
            <p class="text-base leading-7 text-brand-ink/75">お問い合わせは、下記メールアドレスをご利用ください。</p>
          </div>
        </div>

        <FormField label="お名前" for="name">
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
            class="w-full border-0 bg-transparent p-0 text-lg/9 lg:text-xl/10 outline-hidden placeholder:text-brand-ink/55 disabled:cursor-not-allowed disabled:opacity-55"
          />
        </FormField>

        <FormField label="メールアドレス" for="email">
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
            class="w-full border-0 bg-transparent p-0 text-lg/9 lg:text-xl/10 outline-hidden placeholder:text-brand-ink/55 disabled:cursor-not-allowed disabled:opacity-55"
          />
        </FormField>

        <!-- 種別はAPIと共通の一覧から選ぶ。端末ごとに形の違う標準の矢印は消し、細い線の矢印に置き換える。 -->
        <!-- 未選択のあいだは項目名と同じ薄さにし、入力済みの欄と見分けられるようにする。入力例ほど薄くすると読みにくいため、この濃さにとどめる。選択肢の一覧は濃い文字のまま見せる。 -->
        <FormField label="お問い合わせ種別" for="type">
          <div class="relative">
            <select
              id="type"
              v-model="form.category"
              name="category"
              required
              :disabled="!formEnabled || sending"
              class="w-full appearance-none border-0 bg-transparent p-0 pr-8 text-lg/9 lg:text-xl/10 outline-hidden invalid:text-brand-ink/75 disabled:cursor-not-allowed disabled:opacity-55 [&>option]:text-brand-ink"
            >
              <option disabled value="">選択してください</option>
              <option v-for="type in contactCategories" :key="type" :value="type">
                {{ type }}
              </option>
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 12 7"
              class="pointer-events-none absolute top-1/2 right-0 w-3 -translate-y-1/2"
            >
              <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" />
            </svg>
          </div>
        </FormField>

        <FormField label="お問い合わせ内容" for="message">
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
            class="block w-full resize-y border-0 bg-transparent p-0 text-lg/9 lg:text-xl/10 outline-hidden placeholder:text-brand-ink/55 disabled:cursor-not-allowed disabled:opacity-55"
          />
        </FormField>

        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12 md:col-start-5 md:col-end-13">
            <!-- 個人情報の送信前に、プライバシーポリシーへの同意を求める。 -->
            <label class="mt-10 flex items-start gap-3 text-base leading-7 text-brand-ink/85 md:mt-12">
              <input
                v-model="form.consent"
                name="consent"
                type="checkbox"
                required
                :disabled="!formEnabled || sending"
                class="mt-1.5 size-4 shrink-0 accent-brand-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink disabled:cursor-not-allowed"
              />
              <span><NuxtLink
                to="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                class="text-brand-ink underline decoration-brand-ink/25 underline-offset-[6px] transition-colors duration-700 ease-brand hover:decoration-brand-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink"
              >プライバシーポリシー</NuxtLink>に同意する</span>
            </label>

            <!-- 送信に失敗したときだけ、再試行とメールでの連絡を案内する。語尾だけが次の行に落ちないよう、文節で折り返す。 -->
            <p v-if="sendError" role="alert" class="mt-8 text-base leading-7 font-medium text-brand-ink [word-break:auto-phrase]">
              {{ sendError }}
            </p>

            <!-- 送信ボタンは、お問い合わせへの導線と同じ横幅いっぱいの行にする。無効のときと送信中は押せない。 -->
            <button
              type="submit"
              :disabled="!formEnabled || sending"
              class="group mt-14 flex w-full items-center justify-between gap-6 border-y border-brand-ink/25 py-8 text-left transition-colors duration-700 ease-brand enabled:hover:border-brand-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink disabled:cursor-not-allowed disabled:text-brand-ink/35 md:mt-16 md:gap-8 md:py-10"
            >
              <span class="font-serif text-catch font-features-['palt']">
                {{ !formEnabled ? "送信機能は利用不可" : sending ? "送信中…" : "送信する" }}
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 96 9"
                preserveAspectRatio="xMaxYMid slice"
                class="h-2.25 w-12 shrink-0 transition-transform duration-700 ease-brand group-enabled:group-hover:translate-x-2 motion-reduce:transition-none md:w-24"
              >
                <path d="M0 4.5h95M91 1l4 3.5-4 3.5" fill="none" stroke="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </PageSection>

    <!-- メール：フォームのほかの連絡手段として、メールアドレスを送信ボタンと同じ横幅いっぱいの行で示す。 -->
    <PageSection heading="メールでのお問い合わせ">
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <p
          v-reveal
          class="col-span-12 max-w-lg text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 md:col-start-7 md:col-end-13"
        >
          メールでのお問い合わせも受け付けています。内容を確認のうえ、順次ご返信いたします。
        </p>
      </div>

      <!-- メールアドレスは途中で折り返せないため、狭い画面では文字を小さくして矢印と1行に収める。 -->
      <div v-reveal class="mt-16 delay-150 md:mt-20">
        <ContactLink to="mailto:info@goodbychoice.co.jp">
          <span class="text-lg tracking-[0.06em] sm:text-catch">info@goodbychoice.co.jp</span>
        </ContactLink>
        <p class="mt-8 text-base leading-7 text-brand-ink/75 [word-break:auto-phrase]">
          お問い合わせ内容によっては、返信までお時間をいただく場合があります。
        </p>
      </div>
    </PageSection>
  </main>
</template>
