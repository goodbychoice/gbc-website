<script setup lang="ts">
// nuxt.config の site と同じ公開サイト情報を参照する。
const site = useSiteConfig();

// 現在のルートから各ページ固有のcanonical URLを組み立てる。
const route = useRoute();
const canonicalUrl = computed(() => new URL(route.path, site.url).toString());
const snsCardImage = computed(() =>
  new URL("/images/gbc-sns-card.png", site.url).toString(),
);

// 全ページ共通のtitleテンプレートとcanonical URLを設定する。
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk || "GBC（Good By Choice）",
  link: [
    {
      rel: "canonical",
      href: canonicalUrl,
    },
  ],
});

// 全ページ共通のOGP・X向けメタ情報を設定する。
useSeoMeta({
  ogUrl: canonicalUrl,
  ogType: "website",
  ogLocale: "ja_JP",
  ogSiteName: site.name,
  ogImage: snsCardImage,
  ogImageAlt: "GBC（Good By Choice）｜選んで生きる、個の時代へ。",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: "summary_large_image",
  twitterImage: snsCardImage,
  twitterImageAlt: "GBC（Good By Choice）｜選んで生きる、個の時代へ。",
});
</script>

<template>
  <NuxtLayout>
    <!-- 画面遷移をスクリーンリーダーへ通知する。 -->
    <NuxtRouteAnnouncer />

    <!-- 現在のルートに対応するページを表示する。 -->
    <NuxtPage />
  </NuxtLayout>
</template>
