<script setup lang="ts">
// Pandoraページの検索結果・SNS共有向け情報を設定する。
useSeoMeta({
  title: "Webサービス・システム開発 | Pandora | GBC",
  description:
    "Pandoraは、GBC自身のサービスや各事業に必要な仕組みを企画し、技術で形にする開発領域です。自社サービス・プロダクト開発を中心に、必要に応じて外部向けの開発・技術支援にも取り組みます。",
  ogTitle: "Webサービス・システム開発 | Pandora | GBC",
  ogDescription:
    "Pandoraは、GBC自身のサービスや各事業に必要な仕組みを企画し、技術で形にする開発領域です。自社サービス・プロダクト開発を中心に、必要に応じて外部向けの開発・技術支援にも取り組みます。",
  twitterTitle: "Webサービス・システム開発 | Pandora | GBC",
  twitterDescription:
    "Pandoraは、GBC自身のサービスや各事業に必要な仕組みを企画し、技術で形にする開発領域です。自社サービス・プロダクト開発を中心に、必要に応じて外部向けの開発・技術支援にも取り組みます。",
});

// Pandoraでつくるもの。項目名と説明を台帳のように並べる。
const products = [
  { label: "自社サービス", text: "GBC自身が提供するサービスを企画し、開発します。" },
  {
    label: "各事業の仕組み",
    text: "Simple Study、フェンリル、華の騎士団を支えるシステムやツールをつくります。",
  },
  {
    label: "新しいプロダクト",
    text: "既存の事業に限らず、新しいサービスやプロダクトそのものを企画し、形にします。",
  },
  { label: "外部向け開発", text: "必要に応じて、GBC外部の開発や技術支援にも取り組みます。" },
];
</script>

<template>
  <main>
    <!-- 大きく組む文字で行頭が仮名や「自」「「」のときは、字形の左の余白で引っ込んで見えるため、その行を負のマージンで囲んで見た目の左端をそろえる。 -->
    <!-- スマートフォンだけで行頭になる字は、max-md: でその幅のときだけそろえる。 -->

    <!-- 最初の画面：トップページの事業紹介と同じ黒い帯にし、特大の名前を画面の下端に置いて各事業を支える土台に見立てる。 -->
    <section class="bg-brand-ink text-brand-surface">
      <div
        class="mx-auto flex min-h-[calc(100svh-76px)] w-full max-w-brand flex-col px-5 pt-16 pb-8 sm:px-8 md:pt-20 md:pb-10 lg:px-12 lg:pt-24 xl:px-16"
      >
        <!-- 読み上げでは見出しが先に届くようHTMLでは先に書き、表示は order-last と mt-auto で下端へ移す。 -->
        <h1
          class="order-last mt-auto -ml-[0.04em] pt-24 font-serif text-[clamp(3.5rem,19vw,17rem)]/none tracking-[0.04em] animate-rise motion-reduce:animate-none [animation-delay:500ms] md:pt-36"
        >
          Pandora
        </h1>

        <SectionLabel dark class="animate-rise motion-reduce:animate-none">技術・開発</SectionLabel>

        <div class="mt-10 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-14">
          <p
            class="col-span-12 font-serif text-catch font-features-['palt'] animate-rise motion-reduce:animate-none [animation-delay:150ms] md:col-span-5"
          >
            必要なものを、<br />自分でつくる。
          </p>
          <p
            class="col-span-12 max-w-lg text-lg/9 lg:text-xl/10 text-pretty text-brand-surface/85 animate-rise motion-reduce:animate-none [animation-delay:300ms] md:col-start-7 md:col-end-13"
          >
            Pandoraは、GBC自身のサービスや各事業に必要な仕組みを企画し、技術で形にするための開発領域です。
          </p>
        </div>
      </div>
    </section>

    <!-- Pandoraの役割：短く区切ったリードを左に立て、本文を右に並べる。 -->
    <PageSection heading="Pandoraとは">
      <div class="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20 md:items-baseline">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt'] md:col-span-5">
          必要な<br />仕組みを、<br /><span class="-ml-[0.14em]">自分の手で</span><br />形にする。
        </p>

        <div
          v-reveal
          class="col-span-12 max-w-lg space-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 delay-150 md:col-start-6 md:col-end-13 lg:col-start-7"
        >
          <p>
            Simple Study、フェンリル、華の騎士団が個人に向けて価値を届ける事業であるのに対し、PandoraはGBC自身が必要とするサービスや仕組みをつくる側を担います。
          </p>
          <p>
            既にある仕組みに無理に合わせるのではなく、必要なものがなければつくる。GBCの考えや事業を、実際に使えるサービスやシステムとして形にしていきます。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- つくるもの：リードの下に、項目名を明朝で左に、説明を5列目から置く台帳を並べる。項目名が1行に収まる幅になるまでは縦に積む。 -->
    <PageSection heading="つくるもの">
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        GBCの中から、<br />新しいものを<br class="md:hidden" />生み出す。
      </p>

      <dl v-reveal class="mt-20 border-t border-brand-ink/15 delay-150 md:mt-28">
        <div
          v-for="product in products"
          :key="product.label"
          class="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-b border-brand-ink/15 py-8 md:py-10"
        >
          <dt class="col-span-12 font-serif text-catch lg:col-span-4">{{ product.label }}</dt>
          <dd class="col-span-12 max-w-lg text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 lg:col-start-5 lg:col-end-13">
            {{ product.text }}
          </dd>
        </div>
      </dl>
    </PageSection>

    <!-- 企画から開発まで：長いリードを横いっぱいに組み、本文を右下へずらす。 -->
    <PageSection heading="企画から開発まで">
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt']">
          <span class="-ml-[0.54em]">「どうつくるか」</span><br class="md:hidden" />だけではなく、<br /><span class="-ml-[0.54em]">「何をつくるか」</span><br class="md:hidden" />から考える。
        </p>

        <div
          v-reveal
          class="col-span-12 mt-12 max-w-lg space-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13 md:mt-16"
        >
          <p>
            Pandoraは、決められた仕様を実装するだけの開発領域ではありません。何が必要なのか、どんな形なら使いやすいのか、そもそもつくるべきなのか。企画や設計の段階から考えます。
          </p>
          <p>
            Webサービス、アプリ、業務システム、内部ツール、AIを活用した仕組みなど、手段を先に決めるのではなく、目的に必要な技術を選びます。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 外部向けの開発：リードを横いっぱいに組み、本文は左に中心とする事業、右に外部向けの位置づけを置く。 -->
    <!-- 1行の字数が足りない幅では、本文を1段で続けて読む。 -->
    <PageSection heading="外部向けの開発">
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        受託を中心には<br class="md:hidden" /><span class="max-md:-ml-[0.18em]">しない。</span><br />でも、必要なら<br class="md:hidden" />技術を届ける。
      </p>

      <div class="mt-16 grid grid-cols-12 gap-x-6 gap-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 md:mt-24 xl:gap-y-0">
        <p v-reveal class="col-span-12 max-w-lg xl:col-span-5">
          Pandoraの中心は、GBC自身のサービスやプロダクトを生み出すことです。外部から依頼された開発を受け続けることを、事業の前提にはしていません。
        </p>
        <p v-reveal class="col-span-12 max-w-lg delay-150 xl:col-start-7 xl:col-end-13">
          一方で、GBCの技術や経験を活かせる開発・技術支援については、内容に応じて取り組む可能性があります。
        </p>
      </div>
    </PageSection>

    <!-- お問い合わせ：最後の一文をトップのお問い合わせと同じ大きさで組み、その下にお問い合わせへの導線を置く。 -->
    <PageSection heading="お問い合わせ">
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        誰かに<br class="md:hidden" />つくってもらう<br class="md:hidden" />前に、<br /><span class="-ml-[0.14em]">自分でつくれる</span><br class="md:hidden" />力を持つ。
      </p>

      <div class="mt-12 grid grid-cols-12 gap-x-6 md:mt-16">
        <p
          v-reveal
          class="col-span-12 max-w-lg text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13"
        >
          GBCが必要とするものを、自分で考え、自分でつくる。その積み重ねから、新しいサービスや仕組みを生み出していきます。
        </p>
      </div>

      <div v-reveal class="mt-20 md:mt-28">
        <ContactLink />
      </div>
    </PageSection>
  </main>
</template>
