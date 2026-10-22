<script setup lang="ts">
// 詳細ページへのリンク。文字色は周りから引き継ぎ、明るい背景と黒い背景の両方で使う。
defineProps<{ to: string }>();
</script>

<template>
  <NuxtLink
    :to
    class="group flex w-fit items-center gap-5 border-b border-current/25 pb-3 text-base font-medium tracking-[0.12em] transition-colors duration-700 ease-brand hover:border-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
  >
    <slot />
    <!-- 矢印はホバーで少しだけ右へ動かす。 -->
    <svg
      aria-hidden="true"
      viewBox="0 0 32 9"
      class="w-8 transition-transform duration-700 ease-brand group-hover:translate-x-1.5 motion-reduce:transition-none"
    >
      <path d="M0 4.5h31M27 1l4 3.5-4 3.5" fill="none" stroke="currentColor" />
    </svg>
  </NuxtLink>
</template>
