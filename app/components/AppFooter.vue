<script setup lang="ts">
const footerLinks = [
  { href: "/#about", label: "GBCについて" },
  { href: "/#mission", label: "私たちが目指すもの" },
  { href: "/#projects", label: "事業" },
  { href: "/#structure", label: "GBCの仕組み" },
  { href: "/#company", label: "会社情報" },
  { href: "/#profile", label: "代表" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
];
</script>

<template>
  <footer class="bg-[#07111f] px-5 py-9 text-white sm:px-8 lg:px-12 xl:px-16">
    <div class="mx-auto w-full max-w-[1600px]">
      <div
        class="flex flex-col gap-8 border-b border-white/14 pb-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <NuxtLink to="/" class="inline-flex w-fit" aria-label="GBC トップページ">
          <img
            src="/images/gbc-logo-dark-theme.svg"
            alt="GBC Good By Choice"
            class="h-8 w-auto sm:h-9"
          />
        </NuxtLink>

        <nav aria-label="フッターナビゲーション">
          <ul
            class="flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-medium text-white/58"
          >
            <li v-for="link in footerLinks" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="transition-colors duration-200 hover:text-white"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="flex flex-col gap-6 pt-7 sm:flex-row sm:items-end sm:justify-between"
      >
        <p class="text-[13px] leading-6 text-white/46">
          選んで生きる、個の時代へ。
        </p>

        <div class="text-left text-[12px] leading-6 text-white/42 sm:text-right">
          <p>GBC合同会社 / GBC LLC</p>
          <p>© 2026 GBC LLC. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
