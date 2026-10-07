<script setup lang="ts">
// 現在のルートから各ページ固有のcanonical URLを組み立てる。
const route = useRoute();
const siteUrl = "https://www.goodbychoice.co.jp";
const canonicalUrl = computed(() => new URL(route.path, siteUrl).toString());

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
  ogSiteName: "GBC（Good By Choice）",
  ogImage: "https://www.goodbychoice.co.jp/images/gbc-sns-card.png",
  ogImageAlt: "GBC（Good By Choice）｜選んで生きる、個の時代へ。",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: "summary_large_image",
  twitterImage: "https://www.goodbychoice.co.jp/images/gbc-sns-card.png",
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
