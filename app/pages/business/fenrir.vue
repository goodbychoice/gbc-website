<script setup lang="ts">
// フェンリルページの検索結果・SNS共有向け情報を設定する。
useSeoMeta({
  title: "個人事業主・フリーランスの事業相談 | フェンリル | GBC",
  description:
    "フェンリルは、個人が自分の事業を自分で進めるための相談・伴走・サポートサービスです。事業の方向を代わりに決めるのではなく、本人が考え、選び、進められる状態を支えます。",
  ogTitle: "個人事業主・フリーランスの事業相談 | フェンリル | GBC",
  ogDescription:
    "フェンリルは、個人が自分の事業を自分で進めるための相談・伴走・サポートサービスです。事業の方向を代わりに決めるのではなく、本人が考え、選び、進められる状態を支えます。",
  twitterTitle: "個人事業主・フリーランスの事業相談 | フェンリル | GBC",
  twitterDescription:
    "フェンリルは、個人が自分の事業を自分で進めるための相談・伴走・サポートサービスです。事業の方向を代わりに決めるのではなく、本人が考え、選び、進められる状態を支えます。",
});

// こんなときに相談できます。
const cases = [
  "事業を始めたいけれど、何から整理すればいいか分からない。",
  "サービスの方向性や見せ方に迷っている。",
  "集客や発信をどう進めるか決めきれない。",
  "WebやITツールを使いたいけれど、何を選べばいいか分からない。",
  "一人で考え続けるのではなく、状況や選択肢を整理する相手がほしい。",
];

// 相談の進め方。最後の「自分で進める」は、本人だけで進める段階なのでテンプレート側で大きく組む。
const steps = [
  {
    label: "相談する。",
    text: "まず、今悩んでいることや考えていることを持ってきてもらいます。明確な相談テーマがなくても、話しながら一緒に整理していきます。",
  },
  {
    label: "整理する。",
    text: "状況を整理したうえで、考えられる選択肢や、それぞれのメリット・注意点を共有します。",
  },
  {
    label: "選ぶ。",
    text: "必要であればGBCから提案もしますが、何を選ぶかは本人が決めます。",
  },
];
</script>

<template>
  <main>
    <!-- 大きく組む文字で行頭が仮名や「自」のときは、字形の左の余白で引っ込んで見えるため、その行を負のマージンで囲んで見た目の左端をそろえる。 -->
    <!-- スマートフォンだけで行頭になる字は、max-md: でその幅のときだけそろえる。 -->

    <!-- 最初の画面：トップページの事業紹介と同じく、名前を横いっぱいに大きく組み、下に引いた罫線を地面に見立てる。 -->
    <section>
      <div class="mx-auto w-full max-w-brand px-5 pt-16 pb-28 sm:px-8 md:pt-20 md:pb-40 lg:px-12 lg:pt-24 lg:pb-52 xl:px-16">
        <SectionLabel class="animate-rise motion-reduce:animate-none">事業支援</SectionLabel>

        <div class="mt-10 border-b border-brand-ink/15 pb-8 md:mt-14 md:pb-12">
          <h1
            class="-ml-[0.15em] font-serif text-[clamp(3.25rem,11vw,11rem)]/none tracking-[0.12em] font-features-['palt'] animate-rise motion-reduce:animate-none [animation-delay:150ms]"
          >
            フェンリル
          </h1>
        </div>

        <div class="mt-12 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-16">
          <p
            class="col-span-12 font-serif text-catch font-features-['palt'] animate-rise motion-reduce:animate-none [animation-delay:400ms] md:col-span-5"
          >
            自分の事業を、<br />自分の力でつくり、<br />続けていく。
          </p>
          <p
            class="col-span-12 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 animate-rise motion-reduce:animate-none [animation-delay:550ms] md:col-start-7 md:col-end-13"
          >
            フェンリルは、個人が事業を進める中で生まれる悩みや課題を、一緒に整理し、考え、次の一歩につなげるための相談・伴走・サポートサービスです。
          </p>
        </div>
      </div>
    </section>

    <!-- 黒い帯：フェンリルの立場を最初に強調する。本文は左にGBCがしないこと、右に本人が進めるための関わり方を置く。 -->
    <!-- 1行の字数が足りない幅では、本文を1段で続けて読む。 -->
    <PageSection heading="主役は、本人" dark>
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        代わりに進めない。<br /><span class="-ml-[0.14em]">自分で</span><br class="md:hidden" />進められるように<br class="md:hidden" />支える。
      </p>

      <div class="mt-16 grid grid-cols-12 gap-x-6 gap-y-7 text-body lg:text-body-desktop text-pretty text-brand-surface/85 md:mt-24 xl:gap-y-0">
        <p v-reveal class="col-span-12 max-w-lg xl:col-span-5">
          GBCが事業の方向を決めたり、スケジュールを管理したり、日々の実作業を代行したりすることを前提にはしていません。
        </p>
        <div v-reveal class="col-span-12 max-w-lg space-y-7 delay-150 xl:col-start-7 xl:col-end-13">
          <p>
            考えるのも、選ぶのも、動くのも本人です。そのうえで、迷ったときに相談する。状況を整理する。選択肢を増やす。必要なら考え方や進め方を提案する。フェンリルは、そのためにあります。
          </p>
          <p>
            支援を受けながらも、GBCに依存しなくていい。最終的には、自分の判断で事業を進められる状態を目指します。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 支える対象：短く区切ったリードを左に立て、本文を右に並べる。 -->
    <PageSection heading="支える対象">
      <div class="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20 md:items-baseline">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt'] md:col-span-5">
          始める<br />前から、<br />続けていく<br /><span class="-ml-[0.15em]">その先まで。</span>
        </p>

        <div
          v-reveal
          class="col-span-12 max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-6 md:col-end-13 lg:col-start-7"
        >
          <p>
            これから自分の事業を始めたい人。すでに個人事業主、個人社長、フリーランスなど、自分の商品・サービスを持って活動している人。
          </p>
          <p>
            フェンリルは、事業のフェーズや規模ではなく、「自分の事業を、自分で進めていきたい」という人を支えます。
          </p>
          <p>
            事業の準備段階でも、すでに事業が動いている段階でも、その時々で直面している課題を起点に、一緒に考えます。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 相談できること：長いリードを横いっぱいに組み、本文を右下へずらす。 -->
    <PageSection heading="相談できること">
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt']">
          事業の一部分<br class="md:hidden" />ではなく、<br />事業を進める<br class="md:hidden" />中で生まれる<br />課題全般を。
        </p>

        <div
          v-reveal
          class="col-span-12 mt-12 max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13 md:mt-16"
        >
          <p>
            事業アイデアやサービス設計、Web・IT活用、業務の仕組み化、ツール選定、集客、発信、運営、改善など、個人で事業を続ける中で生まれるさまざまな相談を対象にします。
          </p>
          <p>
            すべての領域を代わりに請け負うのではありません。今の状況を整理し、選択肢を考え、本人が判断できる状態をつくることが中心です。
          </p>
          <p>
            専門性の高い領域では、必要に応じて「何を確認すべきか」「どの専門家に相談すべきか」といった整理も含めて支援します。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 相談の例：リードの下に、相談の例を5列目から罫線で区切って並べ、本文より一段大きい明朝で組む。 -->
    <!-- 折り返すときは文節で区切って行の長さをそろえ、語尾だけが次の行に落ちないようにする。 -->
    <PageSection heading="こんなときに相談できます">
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt']">
          答えが決まって<br class="md:hidden" /><span class="max-md:-ml-[0.09em]">いなくても、</span><br />一緒に整理する<br class="md:hidden" /><span class="max-md:-ml-[0.25em]">ところから。</span>
        </p>

        <ul v-reveal class="col-span-12 mt-20 border-t border-brand-ink/15 md:col-start-5 md:col-end-13 md:mt-28">
          <li
            v-for="item in cases"
            :key="item"
            class="border-b border-brand-ink/15 py-6 font-serif text-catch text-balance font-features-['palt'] [word-break:auto-phrase] md:py-8"
          >
            {{ item }}
          </li>
        </ul>

        <p
          v-reveal
          class="col-span-12 mt-16 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 md:col-start-7 md:col-end-13 md:mt-20"
        >
          フェンリルでは、答えを代わりに決めるのではなく、今の状況を一緒に整理し、本人が次の一歩を選べる状態をつくります。
        </p>
      </div>
    </PageSection>

    <!-- 進め方：GBCと一緒に進める3つの段階は小さく横に並べ、本人だけで進める最後の段階を特大で組んで、進めるのは本人だと示す。 -->
    <PageSection heading="相談の進め方">
      <ol class="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20">
        <li v-for="step in steps" :key="step.label" v-reveal class="col-span-12 lg:col-span-4">
          <h3 class="font-serif text-catch">{{ step.label }}</h3>
          <p class="mt-6 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85">{{ step.text }}</p>
        </li>

        <li class="col-span-12 mt-12 grid grid-cols-12 gap-x-6 md:mt-24">
          <h3
            v-reveal
            class="col-span-12 -ml-[0.04em] font-serif text-display font-features-['palt']"
          >
            <span class="-ml-[0.16em]">そして、</span><br class="md:hidden" /><span class="max-md:-ml-[0.15em]">自分で</span>進める。
          </h3>
          <p
            v-reveal
            class="col-span-12 mt-12 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13 md:mt-16"
          >
            その後の実行も本人が中心です。進める中でまた迷ったり、状況が変わったりしたら、そのときにもう一度相談できます。
          </p>
        </li>
      </ol>
    </PageSection>

    <!-- 相談方法：短いリードを左に立て、本文を右に並べる。 -->
    <PageSection heading="相談方法">
      <div class="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20 md:items-baseline">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt'] md:col-span-5">
          相談方法も、<br />本人が選ぶ。
        </p>

        <div
          v-reveal
          class="col-span-12 max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-6 md:col-end-13 lg:col-start-7"
        >
          <p>
            話しながら考えたい人もいれば、文章にした方が考えを整理しやすい人もいます。フェンリルでは、オンライン、対面、チャットなど、自分に合う方法で相談できる形を目指します。
          </p>
          <p>
            チャットも正式な相談方法のひとつです。オンラインや対面で直接話すことを前提にはしません。
          </p>
          <p>
            一方で、即時対応や緊急対応を前提にはせず、利用状況に応じて相談頻度や対応方法を調整しながら、双方にとって無理なく続けられる関係をつくります。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 料金：項目名と割合を罫線ではさんだ1行にし、割合を特大の明朝で組んで左端を5列目にそろえる。 -->
    <PageSection heading="料金">
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        事業の売上に<br class="md:hidden" />合わせて、<br />利用料金も変わる。
      </p>

      <div
        v-reveal
        class="mt-20 grid grid-cols-12 items-baseline gap-x-6 gap-y-4 border-y border-brand-ink/15 py-8 md:mt-28 md:py-12"
      >
        <p class="col-span-12 text-base font-medium tracking-[0.12em] text-brand-ink/75 md:col-span-4">標準利用料</p>
        <p
          class="col-span-12 -ml-[0.04em] font-serif text-display leading-none md:col-start-5 md:col-end-13"
        >
          月間売上の ○%
        </p>
      </div>

      <div class="mt-16 grid grid-cols-12 gap-x-6 md:mt-20">
        <div v-reveal class="col-span-12 max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85 md:col-start-7 md:col-end-13">
          <p>
            固定の月額料金ではなく、フェンリルが支援対象としている事業の月間売上に対して、一定の割合を利用料金とする形を検討しています。
          </p>
          <p>
            固定費ではなく、事業の売上に応じて利用料金も変わる。利用する側と支援する側の双方が、無理なく続けられる料金体系を目指します。
          </p>
          <p>
            売上は本人による自己申告を基本とする方針です。個人を必要以上に管理することはしませんが、虚偽の申告を認めるものではありません。
          </p>
          <p>
            標準の割合に加え、希望する方のみ任意で支援割合を上げられる仕組みも検討しています。選択する割合によって、提供するサービス内容が変わることはありません。
          </p>
          <p class="text-base leading-7 text-brand-ink/75">
            ※料金体系・割合は現在検討中です。正式な内容はサービス開始までに公開します。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- お問い合わせ：最後の一文をトップのお問い合わせと同じ大きさで組み、その下にお問い合わせへの導線を置く。 -->
    <PageSection heading="お問い合わせ">
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        GBCを必要と<br class="md:hidden" /><span class="max-md:-ml-[0.18em]">しなくなったら、</span><br />利用を続ける<br class="md:hidden" />必要はありません。
      </p>

      <div class="mt-12 grid grid-cols-12 gap-x-6 md:mt-16">
        <p
          v-reveal
          class="col-span-12 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13"
        >
          フェンリルの目的は、GBCを使い続けてもらうことではありません。自分で考え、自分で決め、自分の力で事業を進められるようになること。そのために必要なときだけ、フェンリルを使ってください。
        </p>
      </div>

      <div v-reveal class="mt-20 md:mt-28">
        <ContactLink />
      </div>
    </PageSection>
  </main>
</template>
