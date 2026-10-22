<script setup lang="ts">
// 事業の区切りに置く小さなラベル。前に短い罫線を添える。
// 黒い背景の上ではアクセント色の罫線が沈むため、dark を付けて明るい罫線にする。
const { dark = false } = defineProps<{ dark?: boolean }>();
</script>

<template>
  <p
    class="flex items-center gap-4 text-sm font-medium tracking-[0.28em]"
    :class="dark ? 'text-brand-surface/60' : 'text-brand-ink/60'"
  >
    <span class="h-px w-6" :class="dark ? 'bg-brand-surface/40' : 'bg-brand-accent'" />
    <slot />
  </p>
</template>
