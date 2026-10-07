<script setup lang="ts">
import { ref } from "vue";

// モバイルメニューの開閉状態を管理する。
const isMenuOpen = ref(false);

// ヘッダーに表示するトップページ内のナビゲーションを定義する。
const navLinks = [
  { href: "/#about", label: "GBCについて" },
  { href: "/#projects", label: "事業" },
  { href: "/#structure", label: "GBCの仕組み" },
  { href: "/#company", label: "会社情報" },
  { href: "/#contact", label: "お問い合わせ" },
];

// ナビゲーション選択後にモバイルメニューを閉じる。
function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-black/10 bg-[#f4f1ea]/95 text-[#111317] backdrop-blur-sm"
  >
    <div
      class="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16"
    >
      <!-- ロゴからトップページへ戻る。 -->
      <NuxtLink
        to="/"
        class="flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        aria-label="GBC トップページ"
      >
        <img
          src="/images/gbc-logo-light-theme.svg"
          alt="GBC Good By Choice"
          class="h-9 w-auto sm:h-10"
        />
      </NuxtLink>

      <!-- PCではページ内リンクを横並びで表示する。 -->
      <nav
        aria-label="メインナビゲーション"
        class="hidden items-center gap-8 text-[13px] font-medium tracking-[0.04em] text-black/65 lg:flex"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="transition-colors duration-200 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- モバイルではボタンでメニューを開閉する。 -->
      <button
        class="flex h-10 w-10 items-center justify-center text-black/70 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="relative block h-4 w-6">
          <span
            class="absolute left-0 top-0 block h-px w-full bg-current transition-all duration-200"
            :class="isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : ''"
          />
          <span
            class="absolute bottom-0 left-0 block h-px w-full bg-current transition-all duration-200"
            :class="isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''"
          />
        </span>
      </button>
    </div>

    <!-- 閉じている間はinertでキーボードフォーカスの対象から外す。 -->
    <div
      id="mobile-menu"
      :inert="!isMenuOpen"
      :aria-hidden="!isMenuOpen"
      class="overflow-hidden border-t border-black/10 bg-[#f4f1ea] transition-[max-height,opacity] duration-200 lg:hidden"
      :class="isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'"
    >
      <nav aria-label="モバイルナビゲーション" class="px-5 py-3 sm:px-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="block border-b border-black/10 py-4 text-[15px] font-medium text-black/70 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black last:border-b-0"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
