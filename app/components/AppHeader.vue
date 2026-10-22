<script setup lang="ts">
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
  <header class="sticky top-0 z-50 border-b border-brand-ink/10 bg-brand-surface/95 text-brand-ink backdrop-blur-sm">
    <div
      class="mx-auto flex h-[76px] w-full max-w-brand items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16"
    >
      <!-- ロゴからトップページへ戻る。 -->
      <NuxtLink
        to="/"
        class="flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink"
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
        class="hidden items-center gap-10 text-sm tracking-[0.12em] text-brand-ink/72 lg:flex"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="transition-colors duration-700 ease-brand hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- モバイルではボタンでメニューを開閉する。 -->
      <button
        class="flex h-10 w-10 items-center justify-center text-brand-ink/72 transition-colors duration-700 ease-brand hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <!-- 2本の線を、開いたときに中央で交差させて×印にする。 -->
        <span class="relative block h-4 w-6">
          <span
            class="absolute left-0 block h-px w-full bg-current transition-[top,translate,rotate] duration-700 ease-brand motion-reduce:transition-none"
            :class="isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'"
          />
          <span
            class="absolute left-0 block h-px w-full bg-current transition-[bottom,translate,rotate] duration-700 ease-brand motion-reduce:transition-none"
            :class="isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'"
          />
        </span>
      </button>
    </div>

    <!-- 閉じている間はinertでキーボードフォーカスの対象から外す。 -->
    <div
      id="mobile-menu"
      :inert="!isMenuOpen"
      :aria-hidden="!isMenuOpen"
      class="overflow-hidden border-t border-brand-ink/10 bg-brand-surface transition-[max-height,opacity] duration-700 ease-brand motion-reduce:transition-none lg:hidden"
      :class="isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'"
    >
      <nav aria-label="モバイルナビゲーション" class="px-5 py-3 sm:px-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="block border-b border-brand-ink/10 py-4 text-base tracking-[0.12em] text-brand-ink/72 transition-colors duration-700 ease-brand last:border-b-0 hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
