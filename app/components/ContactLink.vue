<script setup lang="ts">
// お問い合わせへの導線。既定ではお問い合わせページへ進み、to と文言を渡すとメールアドレスへの導線にも使える。
const { to = "/contact" } = defineProps<{ to?: string }>();
</script>

<template>
  <!-- 横幅いっぱいの1行にし、ホバーで罫線を濃くして矢印を右へ進める。 -->
  <NuxtLink
    :to
    class="group flex items-center justify-between gap-6 border-y border-brand-ink/25 py-8 transition-colors duration-700 ease-brand hover:border-brand-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink md:gap-8 md:py-10"
  >
    <span class="font-serif text-catch font-features-['palt']"><slot>お問い合わせページへ</slot></span>
    <!-- 矢印は右端を基準に切り抜いて軸の長さだけを変え、狭い画面でも文字を1行に収める。矢じりの大きさはどの幅でも同じ。 -->
    <svg
      aria-hidden="true"
      viewBox="0 0 96 9"
      preserveAspectRatio="xMaxYMid slice"
      class="h-2.25 w-12 shrink-0 transition-transform duration-700 ease-brand group-hover:translate-x-2 motion-reduce:transition-none md:w-24"
    >
      <path d="M0 4.5h95M91 1l4 3.5-4 3.5" fill="none" stroke="currentColor" />
    </svg>
  </NuxtLink>
</template>
