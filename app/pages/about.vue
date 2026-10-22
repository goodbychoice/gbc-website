<script setup lang="ts">
// GBCについてページの検索結果・SNS共有向け情報を設定する。
useSeoMeta({
  title: "GBCについて | 個人が自由に生きるためのプラットフォーム | GBC",
  description:
    "GBCは、会社や組織に依存せず、個人が自分の選択で自由に生きていくためのプラットフォームです。",
  ogTitle: "GBCについて | 個人が自由に生きるためのプラットフォーム | GBC",
  ogDescription:
    "GBCは、会社や組織に依存せず、個人が自分の選択で自由に生きていくためのプラットフォームです。",
  twitterTitle: "GBCについて | 個人が自由に生きるためのプラットフォーム | GBC",
  twitterDescription:
    "GBCは、会社や組織に依存せず、個人が自分の選択で自由に生きていくためのプラットフォームです。",
});
</script>

<template>
  <main>
    <!-- 大きく組む文字で行頭が仮名や「自」のときは、字形の左の余白で引っ込んで見えるため、その行を負のマージンで囲んで見た目の左端をそろえる。 -->

    <!-- 最初の画面：ページの主題を特大の明朝で左に組み、説明を右下へずらして対角の流れをつくる。 -->
    <section>
      <div class="mx-auto w-full max-w-brand px-5 pt-16 pb-28 sm:px-8 md:pt-20 md:pb-40 lg:px-12 lg:pt-24 lg:pb-52 xl:px-16">
        <SectionLabel class="animate-rise motion-reduce:animate-none">GBCについて</SectionLabel>

        <h1
          class="mt-10 -ml-[0.04em] font-serif text-display font-features-['palt'] animate-rise motion-reduce:animate-none [animation-delay:150ms] md:mt-14"
        >
          会社に縛られず、<br />個人が自由に<br />生きる社会へ。
        </h1>

        <div class="mt-16 grid grid-cols-12 gap-x-6 md:mt-24">
          <p
            class="col-span-12 max-w-lg text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 animate-rise motion-reduce:animate-none [animation-delay:400ms] md:col-start-7 md:col-end-13"
          >
            GBCが目指すのは、会社労働に依存しなくても、個人が自分の力で学び、創り、働き、自由に生きていける社会です。
          </p>
        </div>
      </div>
    </section>

    <!-- GBCの役割：長いリードを横いっぱいに組み、本文を右下へずらす。 -->
    <PageSection heading="GBCとは">
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt']">
          会社や組織に<br class="md:hidden" />依存せず、<br /><span class="-ml-[0.14em]">自分の選択で自由に</span><br />生きていくために。
        </p>

        <div
          v-reveal
          class="col-span-12 mt-12 max-w-lg space-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13 md:mt-16"
        >
          <p>
            GBCは、会社や組織に依存せず、個人が自分の選択で自由に生きていくためのプラットフォームです。
          </p>
          <p>
            誰かが用意した一つの正解に合わせるのではなく、自分で考え、自分で選ぶ。その選択を現実の行動につなげるために、学び、仕組み、技術、機会を必要なときに使える状態をつくります。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 背景と問題意識：最初の一文をリードとして大きく組み、本文は左に課題、右にGBCの考えを置く。 -->
    <!-- 1行の字数が足りない幅では、本文を1段で続けて読む。 -->
    <PageSection heading="なぜ、GBCをつくるのか">
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        個人が生み出した<br class="md:hidden" />価値が、<br /><span class="-ml-[0.15em]">その人自身の自由や</span><br class="md:hidden" />豊かさに<br />つながるとは<br class="md:hidden" />限りません。
      </p>

      <div class="mt-16 grid grid-cols-12 gap-x-6 gap-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 md:mt-24 xl:gap-y-0">
        <p v-reveal class="col-span-12 max-w-lg xl:col-span-5">
          働き方や活動の仕方によっては、自分で生み出した価値であっても、自分自身では十分に選択できないことがあります。
        </p>

        <div v-reveal class="col-span-12 max-w-lg space-y-7 delay-150 xl:col-start-7 xl:col-end-13">
          <p>
            GBCは、個人が誰かに管理され、価値を一方的に搾取されることなく、自分の意思で学び、創り、働き、稼ぎ、生きていける状態を増やしたいと考えています。
          </p>
          <p>
            そのために必要なのは、新しい所属先をつくることではありません。個人が自分で判断し、自分で進めるようになるための選択肢と、それを実行できる仕組みを増やすことだと考えています。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 黒い帯：支援と本人の決定の距離感はGBCの関わり方の核なので、この言葉そのものを見出しとして特大で組む。 -->
    <PageSection dark>
      <h2
        v-reveal
        class="-ml-[0.04em] font-serif text-display font-features-['palt']"
      >
        支える。<br />でも、決めない。
      </h2>

      <div class="mt-16 grid grid-cols-12 gap-x-6 md:mt-24">
        <div
          v-reveal
          class="col-span-12 max-w-lg space-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-surface/85 delay-150 md:col-start-7 md:col-end-13"
        >
          <p>
            GBCが支援するのは、個人の活動そのものです。GBCのやり方に合わせてもらうことや、活動の方向を代わりに決めることを目的にはしていません。
          </p>
          <p>
            何を学ぶか。何をつくるか。どんな形で活動するか。どこまで支援を使うか。最終的に決めるのは本人です。
          </p>
          <p>
            必要な支援を必要なときに受けられる。けれど、その支援に依存する必要はない。GBCは、その距離感を大切にします。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 締め：前半を小さく、答えにあたる後半を2倍の大きさで組み、最後に伝えたいことを際立たせる。黒い帯の直後なので見出しは付けない。 -->
    <PageSection>
      <p class="font-serif font-features-['palt']">
        <span v-reveal class="block text-[clamp(1.375rem,3.7vw,3.5rem)]/[1.6] tracking-[0.1em]">
          GBCが増やしたいのは、<br />GBCに依存する人では<br class="md:hidden" />ありません。
        </span>
        <span
          v-reveal
          class="mt-12 -ml-[0.04em] block text-display delay-150 md:mt-16"
        >
          <span class="-ml-[0.15em]">自分の人生を、</span><br /><span class="-ml-[0.15em]">自分で</span><br class="md:hidden" />選べる人です。
        </span>
      </p>
    </PageSection>
  </main>
</template>
