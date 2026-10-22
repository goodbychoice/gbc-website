<script setup lang="ts">
// 3つのサービス。順序はないので、同じ幅で横に並べる。
const services = [
  { role: "学ぶ", name: "Simple Study" },
  { role: "事業をつくる・続ける", name: "フェンリル" },
  { role: "表現する・届ける", name: "華の騎士団" },
];
</script>

<template>
  <section id="structure" class="scroll-mt-24 bg-brand-surface text-brand-ink">
    <div class="mx-auto w-full max-w-brand px-5 py-28 sm:px-8 md:py-40 lg:px-12 lg:py-52 xl:px-16">
      <SectionHeading>GBCの仕組み</SectionHeading>

      <!-- 導入：リードと本文を左に積み、右側は空けておく。スマートフォンでは2行目が収まらないため、文節で折り返す。 -->
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        GBCには、<br />決められた道は<br class="md:hidden" />ありません。
      </p>

      <p v-reveal class="mt-10 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:mt-12">
        学びたいときは、学ぶ。事業を始めたいときは、そのための支援を使う。表現活動を続けたいときは、必要な力を借りる。何を使うかは、その人自身が決めます。
      </p>

      <!-- 3つのサービス：罫線を列ごとに切り、それぞれが独立して並んでいることを示す。 -->
      <ul v-reveal class="mt-24 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-36">
        <li v-for="service in services" :key="service.name" class="col-span-12 border-t border-brand-ink/15 pt-6 md:col-span-4">
          <span class="block text-base font-medium tracking-[0.12em] text-brand-ink/75">{{ service.role }}</span>
          <span class="mt-3 block font-serif text-catch">{{ service.name }}</span>
        </li>
      </ul>

      <!-- Pandora：3列をつないだ1本の罫線の下に置き、3つのサービスを支える土台に見立てる。説明は2列目の左端にそろえる。 -->
      <div v-reveal class="mt-16 grid grid-cols-12 gap-x-6 gap-y-8 border-t border-brand-ink/15 pt-6 md:mt-20 md:items-baseline">
        <div class="col-span-12 md:col-span-4">
          <span class="block text-base font-medium tracking-[0.12em] text-brand-ink/75">GBCを技術面から支える</span>
          <span class="mt-3 block font-serif text-catch">Pandora</span>
        </div>
        <p class="col-span-12 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 md:col-start-5 md:col-end-13">
          Simple Study、フェンリル、華の騎士団は、それぞれ異なる形で個人の活動を支えます。Pandoraは、その活動やGBCのサービスを技術面から支え、必要な仕組みを形にします。
        </p>
      </div>

      <!-- 締めの一文：3行の問いに1行の答えを返して対比をつくる。大きさは問いを答えの2倍にする。 -->
      <!-- 答えは1行（22.28字分）が768px以上の幅に収まる 3.7vw にし、スマートフォンでは文節で2行に折り返す。 -->
      <!-- 仮名は字形の左の余白が大きく、行頭で引っ込んで見えるため、その行だけ負のマージンで見た目の左端をそろえる。 -->
      <p class="mt-28 font-serif font-features-['palt'] md:mt-40 lg:mt-52">
        <span v-reveal class="-ml-[0.04em] block text-display">
          何を使うか。<br /><span class="-ml-[0.1em]">いつ使うか。</span><br /><span class="-ml-[0.25em]">どこまで使うか。</span>
        </span>
        <span v-reveal class="mt-12 block text-[clamp(1.375rem,3.7vw,3.5rem)]/[1.6] tracking-[0.1em] delay-150 md:mt-16">
          <span class="-ml-[0.15em]">それを決めるのは、</span><br class="md:hidden" />GBCではなく本人です。
        </span>
      </p>
    </div>
  </section>
</template>
