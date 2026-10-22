<script setup lang="ts">
// 下層ページのセクション。本文幅の外枠と罫線の見出しをまとめ、ページ側には中身だけを書く。
// 見出しの言葉そのものを特大で組むときは heading を省き、中身の側に h2 を書く。黒い帯にするときは dark を付ける。
defineProps<{ heading?: string; dark?: boolean }>();
</script>

<template>
  <section :class="{ 'bg-brand-ink text-brand-surface': dark }">
    <div class="mx-auto w-full max-w-brand px-5 py-28 sm:px-8 md:py-40 lg:px-12 lg:py-52 xl:px-16">
      <SectionHeading v-if="heading" :dark>{{ heading }}</SectionHeading>
      <slot />
    </div>
  </section>
</template>
