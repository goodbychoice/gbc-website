<script setup lang="ts">
// 規約やポリシーの1条。左に条の見出し、右の7列目から本文を置き、条ごとに細い罫線で区切る。
// 見出しが折り返すときは、文節で区切って行の長さをそろえる。
defineProps<{ title: string }>();
</script>

<template>
  <section v-reveal class="grid grid-cols-12 gap-x-6 gap-y-6 border-b border-brand-ink/15 py-12 md:py-16">
    <h3 class="col-span-12 font-serif text-catch text-balance font-features-['palt'] [word-break:auto-phrase] md:col-span-5">
      {{ title }}
    </h3>
    <div class="col-span-12 max-w-lg space-y-7 text-body text-pretty text-brand-ink/72 md:col-start-7 md:col-end-13">
      <slot />
    </div>
  </section>
</template>
