<script setup lang="ts">
import type { NuxtError } from "#app";

// Nuxtから受け取ったエラー情報をページ内で参照する。
const props = defineProps<{
  error: NuxtError;
}>();

// 404とその他のエラーで表示内容を切り替える。
const isNotFound = computed(() => props.error.statusCode === 404);

// エラーページは検索結果へ登録されないようnoindexを設定する。
useHead({
  title: isNotFound.value ? "ページが見つかりません | GBC" : "エラーが発生しました | GBC",
  meta: [{ name: "robots", content: "noindex, nofollow" }],
});

// エラー状態を解除してトップページへ戻る。
function goHome() {
  clearError({ redirect: "/" });
}
</script>

<template>
  <NuxtLayout>
    <main class="bg-[#f4f1ea] text-[#111317]">
      <!-- エラー種別に応じた説明と復帰導線を表示する。 -->
      <section
        class="min-h-[calc(100vh-76px)] px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
      >
        <div class="mx-auto w-full max-w-[1600px]">
          <p class="text-[14px] font-semibold tracking-[0.08em] text-black/60">
            {{ error.statusCode }}
          </p>

          <h1
            class="mt-6 max-w-[1100px] text-[clamp(3rem,7vw,7rem)] font-semibold leading-[1.06] tracking-[-0.055em]"
          >
            {{ isNotFound ? "ページが見つかりません。" : "エラーが発生しました。" }}
          </h1>

          <p
            class="mt-10 max-w-[760px] text-[17px] leading-[2] text-black/68 sm:text-[18px] md:text-[19px]"
          >
            {{
              isNotFound
                ? "URLが変更されたか、ページが削除された可能性があります。トップページや各事業ページから、必要な情報をお探しください。"
                : "一時的な問題が発生しています。時間をおいて再度お試しください。"
            }}
          </p>

          <!-- 404ではトップページとお問い合わせの2つの導線を表示する。 -->
          <div
            v-if="isNotFound"
            class="mt-14 grid max-w-[980px] gap-0 border-y border-black/20 sm:grid-cols-2"
          >
            <button
              type="button"
              class="group flex items-center justify-between gap-6 border-b border-black/20 py-6 text-left text-[16px] font-semibold transition-colors hover:text-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:border-b-0 sm:border-r sm:pr-8"
              @click="goHome"
            >
              <span>トップページへ戻る</span>
              <span
                aria-hidden="true"
                class="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>

            <NuxtLink
              to="/contact"
              class="group flex items-center justify-between gap-6 py-6 text-[16px] font-semibold transition-colors hover:text-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:pl-8"
            >
              <span>お問い合わせ</span>
              <span
                aria-hidden="true"
                class="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </NuxtLink>
          </div>

          <!-- 404以外ではトップページへ戻る導線だけを表示する。 -->
          <button
            v-else
            type="button"
            class="group mt-14 inline-flex items-center gap-4 border-b border-black/30 pb-2 text-[16px] font-semibold transition-colors hover:border-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            @click="goHome"
          >
            <span>トップページへ戻る</span>
            <span
              aria-hidden="true"
              class="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
