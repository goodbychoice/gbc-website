<script setup lang="ts">
// 会社情報の表示項目を1か所にまとめ、テンプレート側では同じ構造で描画する。
const companyItems = [
  {
    label: "名称",
    value: "GBC合同会社",
  },
  {
    label: "対外表記",
    value: "GBC（Good By Choice）",
  },
  {
    label: "設立",
    value: "2026年2月",
  },
  {
    label: "所在地",
    value: "〒220-0004 神奈川県横浜市西区北幸2-10-48 むつみビル3階",
  },
  {
    label: "電話番号",
    value: "045-275-0720",
  },
  {
    label: "事業内容",
    value: "Webサービス開発、IT教育、個人事業主支援、クリエイター支援",
  },
  {
    label: "Web",
    value: "www.goodbychoice.co.jp",
  },
  {
    label: "Mail",
    value: "info@goodbychoice.co.jp",
  },
];
</script>

<template>
  <section id="company" class="scroll-mt-24 bg-brand-surface text-brand-ink">
    <div class="mx-auto w-full max-w-brand px-5 py-28 sm:px-8 md:py-40 lg:px-12 lg:py-52 xl:px-16">
      <SectionHeading>会社情報</SectionHeading>

      <!-- 英文名はヒーローの英文コピーと同じ組み方にする。 -->
      <div v-reveal class="mt-14 md:mt-20">
        <p class="font-serif text-lead font-features-['palt']">GBC合同会社</p>
        <p class="mt-2 font-serif text-[clamp(1.125rem,1.5vw,1.5rem)] tracking-[0.06em] text-brand-ink/80">
          Good By Choice
        </p>
      </div>

      <!-- 台帳：項目名と内容を細い罫線で区切り、内容の左端を「仕組み」の索引と同じ5列目にそろえる。 -->
      <!-- 内容は文節で折り返し、住所の「3階」のような語尾だけが次の行に落ちないようにする。 -->
      <dl v-reveal class="mt-16 border-t border-brand-ink/15 delay-150 md:mt-24">
        <div
          v-for="item in companyItems"
          :key="item.label"
          class="grid grid-cols-12 items-baseline gap-x-6 gap-y-1 border-b border-brand-ink/15 py-5 md:py-6"
        >
          <dt class="col-span-12 text-sm font-medium tracking-[0.12em] text-brand-ink/60 md:col-span-4">
            {{ item.label }}
          </dt>
          <dd class="col-span-12 text-body text-pretty text-brand-ink/72 [word-break:auto-phrase] md:col-start-5 md:col-end-13">
            {{ item.value }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
