<script setup lang="ts">
// セクションの見出し。本文幅いっぱいの細い罫線の下に置き、罫線の左端だけ色を変えてセクションの始まりを示す。
// 黒い背景の上ではアクセント色が沈むため、dark を付けて明るい罫線にする。
const { dark = false } = defineProps<{ dark?: boolean }>();
</script>

<template>
  <h2
    class="relative border-t pt-6 text-sm font-medium tracking-[0.28em] before:absolute before:-top-px before:left-0 before:h-px before:w-6"
    :class="
      dark
        ? 'border-brand-surface/20 text-brand-surface/60 before:bg-brand-surface/60'
        : 'border-brand-ink/15 text-brand-ink/60 before:bg-brand-accent'
    "
  >
    <slot />
  </h2>
</template>
