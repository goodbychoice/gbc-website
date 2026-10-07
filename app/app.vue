<script setup lang="ts">
const route = useRoute();
const siteUrl = "https://www.goodbychoice.co.jp";
const canonicalUrl = computed(() => new URL(route.path, siteUrl).toString());

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
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
