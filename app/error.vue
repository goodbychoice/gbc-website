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
    <main>
      <!-- 下層ページの最初の画面と同じく、題を左に組み、説明と戻り先を右下へずらす。題は特大にせずリードの大きさに抑える。 -->
      <!-- 内容が少なくてもフッターが画面の途中に上がってこないよう、1画面ぶんの高さを確保する。 -->
      <section class="mx-auto min-h-[calc(100svh-76px)] w-full max-w-brand px-5 pt-16 pb-28 sm:px-8 md:pt-20 md:pb-40 lg:px-12 lg:pt-24 lg:pb-52 xl:px-16">
        <SectionLabel class="animate-rise motion-reduce:animate-none">{{ error.statusCode }}</SectionLabel>

        <h1
          class="mt-10 font-serif text-lead font-features-['palt'] animate-rise motion-reduce:animate-none [animation-delay:150ms] md:mt-14"
        >
          <template v-if="isNotFound">ページが<br class="md:hidden" />見つかりません。</template>
          <template v-else>エラーが<br class="md:hidden" />発生しました。</template>
        </h1>

        <div class="mt-16 grid grid-cols-12 gap-x-6 md:mt-24">
          <div
            class="col-span-12 max-w-lg animate-rise motion-reduce:animate-none [animation-delay:400ms] md:col-start-7 md:col-end-13"
          >
            <p class="text-body lg:text-body-desktop text-pretty text-brand-ink/85">
              {{
                isNotFound
                  ? "URLが変更されたか、ページが削除された可能性があります。トップページや各事業ページから、必要な情報をお探しください。"
                  : "一時的な問題が発生しています。時間をおいて再度お試しください。"
              }}
            </p>

            <!-- 戻り先は矢印付きのリンクで縦に並べる。404以外ではトップページへ戻る導線だけを置く。 -->
            <!-- トップページへは、エラー表示を解除してから移るため、リンクと同じ見た目のボタンにする。 -->
            <div class="mt-12 flex flex-col gap-8 md:mt-16">
              <button
                type="button"
                class="group flex w-fit items-center gap-5 border-b border-current/25 pb-3 text-base font-medium tracking-[0.12em] transition-colors duration-700 ease-brand hover:border-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                @click="goHome"
              >
                トップページへ戻る
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 9"
                  class="w-8 transition-transform duration-700 ease-brand group-hover:translate-x-1.5 motion-reduce:transition-none"
                >
                  <path d="M0 4.5h31M27 1l4 3.5-4 3.5" fill="none" stroke="currentColor" />
                </svg>
              </button>
              <ArrowLink v-if="isNotFound" to="/contact">お問い合わせ</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
