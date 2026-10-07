<script setup lang="ts">
// トップページで共通利用するタイトルと説明文を定義する。
const title = "GBC（Good By Choice）｜選んで生きる、個の時代へ。";
const description =
  "GBCは、会社や組織に依存せず、個人が自分の選択で自由に生きていくためのプラットフォームです。";

// 検索結果とSNS共有向けにトップページ固有のメタ情報を設定する。
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});

// 検索エンジンへ会社情報とWebサイト情報を構造化データとして伝える。
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.goodbychoice.co.jp/#organization",
        name: "GBC合同会社",
        alternateName: ["GBC", "Good By Choice"],
        url: "https://www.goodbychoice.co.jp/",
        logo: "https://www.goodbychoice.co.jp/images/gbc-logo-light-theme.svg",
        description,
        foundingDate: "2026-02",
        address: {
          "@type": "PostalAddress",
          streetAddress: "北幸2-10-48 むつみビル3階",
          addressLocality: "横浜市西区",
          addressRegion: "神奈川県",
          postalCode: "220-0004",
          addressCountry: "JP",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "045-275-0720",
          contactType: "customer service",
          email: "info@goodbychoice.co.jp",
          availableLanguage: "Japanese",
        },
        founder: {
          "@type": "Person",
          name: "雨宮 澪",
          jobTitle: "代表 / CEO",
        },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.goodbychoice.co.jp/#website",
        name: "GBC（Good By Choice）",
        alternateName: "GBC",
        url: "https://www.goodbychoice.co.jp/",
        description,
        inLanguage: "ja",
        publisher: {
          "@id": "https://www.goodbychoice.co.jp/#organization",
        },
      }),
    },
  ],
});
</script>

<template>
  <main>
    <!-- GBCのキャッチコピーを最初に伝える。 -->
    <HomeHeroSection />

    <!-- GBCの概要と思想を順番に紹介する。 -->
    <HomeAboutSection />
    <HomeMissionSection />

    <!-- 事業とGBC全体の仕組みを紹介する。 -->
    <HomeProjectsSection />
    <HomeStructureSection />

    <!-- 会社・代表情報とお問い合わせ導線を表示する。 -->
    <HomeProfileCompanySection />
    <HomeContactSection />
  </main>
</template>
