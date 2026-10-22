<script setup lang="ts">
// フッターに表示する主要ページ・主要セクションへのリンクを定義する。
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
  <!-- ページの最後を黒で締め、フッターであることがひと目で分かるようにする。 -->
  <footer class="bg-brand-ink text-brand-surface">
    <div class="mx-auto w-full max-w-brand px-5 pt-16 pb-10 sm:px-8 md:pt-20 lg:px-12 xl:px-16">
      <div class="grid grid-cols-12 gap-x-6 gap-y-12">
        <!-- ロゴからトップページへ戻る。 -->
        <NuxtLink
          to="/"
          class="col-span-12 w-fit focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-surface md:col-span-6"
          aria-label="GBC トップページ"
        >
          <img
            src="/images/gbc-logo-dark-theme.svg"
            alt="GBC Good By Choice"
            class="h-8 w-auto sm:h-9"
          />
        </NuxtLink>

        <!-- サイト内の主要導線を、本文と同じ7列目から2列で並べる。上から順に読めるよう、左の列から埋める。 -->
        <!-- スマートフォンでは「プライバシーポリシー」が半分の幅に収まらないため、左の列を文字の幅に合わせて右の列を広げる。 -->
        <nav aria-label="フッターナビゲーション" class="col-span-12 md:col-start-7 md:col-end-13">
          <ul class="grid grid-flow-col grid-cols-[auto_1fr] grid-rows-5 gap-x-6 gap-y-4 text-base tracking-[0.06em] text-brand-surface/75 md:grid-cols-2">
            <li v-for="link in footerLinks" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="transition-colors duration-700 ease-brand hover:text-brand-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-surface"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- ブランドメッセージと会社表記をフッター下部に表示する。 -->
      <div class="mt-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mt-24">
        <p class="font-serif text-base tracking-[0.1em] text-brand-surface/80">
          選んで生きる、個の時代へ。
        </p>

        <div class="text-base leading-7 text-brand-surface/75 sm:text-right">
          <p>GBC合同会社 / GBC LLC</p>
          <p>© 2026 GBC LLC. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
