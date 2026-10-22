<script setup lang="ts">
// 華の騎士団ページの検索結果・SNS共有向け情報を設定する。
useSeoMeta({
  title: "個人クリエイターの活動相談・伴走支援 | 華の騎士団 | GBC",
  description:
    "華の騎士団は、個人クリエイターが自分の世界観や活動方針を守りながら、創作・表現・発信活動を続けていくための相談・伴走・サポートサービスです。",
  ogTitle: "個人クリエイターの活動相談・伴走支援 | 華の騎士団 | GBC",
  ogDescription:
    "華の騎士団は、個人クリエイターが自分の世界観や活動方針を守りながら、創作・表現・発信活動を続けていくための相談・伴走・サポートサービスです。",
  twitterTitle: "個人クリエイターの活動相談・伴走支援 | 華の騎士団 | GBC",
  twitterDescription:
    "華の騎士団は、個人クリエイターが自分の世界観や活動方針を守りながら、創作・表現・発信活動を続けていくための相談・伴走・サポートサービスです。",
});

// こんなときに相談できます。
const cases = [
  "VTuberや配信活動を始めたいけれど、何を準備すればいいか分からない。",
  "配信環境や機材、ツール選びに迷っている。",
  "SNSや動画で、どう発信していくか整理したい。",
  "趣味として続けるのか、収益化を目指すのか迷っている。",
  "自分の世界観を守りながら、無理なく活動を続ける方法を考えたい。",
];
</script>

<template>
  <main>
    <!-- 大きく組む文字で行頭が仮名や「自」「「」のときは、字形の左の余白で引っ込んで見えるため、その行を負のマージンで囲んで見た目の左端をそろえる。 -->
    <!-- スマートフォンだけで行頭になる字は、max-md: でその幅のときだけそろえる。 -->

    <!-- 最初の画面：トップページの事業紹介と同じく、名前をトップの最初の画面と同じ縦組みにして右端に立て、文章を左に置く。 -->
    <section>
      <div class="mx-auto w-full max-w-brand px-5 pt-16 pb-28 sm:px-8 md:pt-20 md:pb-40 lg:px-12 lg:pt-24 lg:pb-52 xl:px-16">
        <SectionLabel class="animate-rise motion-reduce:animate-none">クリエイター支援</SectionLabel>

        <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
          <!-- 名前は幅に合わせて大きくするが、高さの足りない画面では最後の字が画面の下端に接しないよう、高さでも大きさを抑える。 -->
          <h1
            class="col-start-11 col-end-13 row-start-1 justify-self-end font-serif text-[clamp(3rem,min(7vw,110.5svh-900px),7.5rem)]/none tracking-[0.24em] whitespace-nowrap animate-ink motion-reduce:animate-none [animation-delay:200ms] [writing-mode:vertical-rl] md:row-end-3"
          >
            華の騎士団
          </h1>

          <!-- スマートフォンではコピーの下端を名前の下端にそろえ、PCでは少し下げて名前と段差をつける。 -->
          <!-- スマートフォンでは名前の横に収まるよう、2行目も文節で折り返す。 -->
          <p
            class="col-span-10 row-start-1 self-end font-serif text-catch font-features-['palt'] animate-rise motion-reduce:animate-none [animation-delay:700ms] md:col-span-6 md:self-start md:pt-32"
          >
            自分らしい表現を、<br />自分らしく<br class="md:hidden" />続けていく。
          </p>

          <p
            class="col-span-12 row-start-2 mt-14 max-w-lg text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 animate-rise motion-reduce:animate-none [animation-delay:850ms] md:col-span-6 md:mt-12"
          >
            華の騎士団は、個人クリエイターが創作や発信を続ける中で生まれる悩みや課題を、一緒に整理し、考え、次の一歩につなげるための相談・伴走・サポートサービスです。
          </p>
        </div>
      </div>
    </section>

    <!-- 黒い帯：華の騎士団の立場を最初に強調する。本文は左に華の騎士団がしないこと、右に本人が決めるための関わり方を置く。 -->
    <!-- 1行の字数が足りない幅では、本文を1段で続けて読む。 -->
    <PageSection heading="主役は、本人" dark>
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        代わりに進めない。<br /><span class="-ml-[0.14em]">自分で</span><br class="md:hidden" />続けられるように<br class="md:hidden" />支える。
      </p>

      <div class="mt-16 grid grid-cols-12 gap-x-6 gap-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-surface/85 md:mt-24 xl:gap-y-0">
        <div v-reveal class="col-span-12 max-w-lg space-y-7 xl:col-span-5">
          <p>
            華の騎士団は、タレント事務所や所属型のマネジメントサービスではありません。GBCへの所属を前提に活動してもらう仕組みではなく、本人が自分の活動を続けていくための相談・伴走・サポートを行います。
          </p>
          <p>
            案件提供や営業代行、スケジュール管理、活動方針の決定、日々の制作や運営の代行を前提にはしていません。
          </p>
        </div>
        <div v-reveal class="col-span-12 max-w-lg space-y-7 delay-150 xl:col-start-7 xl:col-end-13">
          <p>
            何をつくるか。どこで発信するか。どのくらいのペースで続けるか。収益化を目指すか。最終的に決めるのは、いつでも本人です。
          </p>
          <p>
            GBCは、その判断に必要な情報や選択肢を整理し、迷ったときに相談できる立場として関わります。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 支える対象：短く区切ったリードを左に立て、本文を右に並べる。 -->
    <PageSection heading="支える対象">
      <div class="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20 md:items-baseline">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt'] md:col-span-5">
          個人で<br />つくる。<br />個人で<br />届ける。
        </p>

        <div
          v-reveal
          class="col-span-12 max-w-lg space-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 delay-150 md:col-start-6 md:col-end-13 lg:col-start-7"
        >
          <p>
            VTuber、動画投稿者、配信者、イラストレーター、音楽活動をする人など、個人として創作・表現・発信活動を行うクリエイター全般を対象にしています。
          </p>
          <p>
            活動の規模や知名度、ジャンルで線を引くのではなく、自分自身の名前や世界観で活動していくことを大切にする人を支えます。
          </p>
          <p>
            始めたばかりでも、長く活動していても構いません。その時々で抱えている悩みや課題を起点に、一緒に考えます。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 相談できること：長いリードを横いっぱいに組み、本文を右下へずらす。 -->
    <PageSection heading="相談できること">
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt']">
          活動を続ける<br class="md:hidden" />中で生まれる、<br /><span class="-ml-[0.11em]">さまざまな悩みを。</span>
        </p>

        <div
          v-reveal
          class="col-span-12 mt-12 max-w-lg space-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13 md:mt-16"
        >
          <p>
            活動方針、発信の仕方、見せ方、制作環境、機材やツールの選び方、活動の仕組み化、収益化、今後の方向性など、個人で活動を続ける中で生まれるさまざまな相談を対象にします。
          </p>
          <p>
            収益化を望む場合には、副業として続けるのか、本業として成立させたいのかも含めて、その人に合う形を一緒に考えます。収益化そのものを活動の目的として押しつけることはありません。
          </p>
          <p>
            活動そのものを代わりに進めるのではなく、本人が自分で進めるために必要な整理・提案・判断支援を行います。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 相談の例：リードの下に、相談の例を5列目から罫線で区切って並べ、本文より一段大きい明朝で組む。 -->
    <!-- 折り返すときは文節で区切って行の長さをそろえ、語尾だけが次の行に落ちないようにする。 -->
    <PageSection heading="こんなときに相談できます">
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt']">
          活動の形を<br class="md:hidden" />決めつけず、<br />大切にしたい<br class="md:hidden" /><span class="max-md:-ml-[0.19em]">ことから考える。</span>
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
          class="col-span-12 mt-16 max-w-lg text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 md:col-start-7 md:col-end-13 md:mt-20"
        >
          華の騎士団では、活動の形を決めつけるのではなく、本人が大切にしたいことを起点に、続け方や選択肢を一緒に整理します。
        </p>
      </div>
    </PageSection>

    <!-- 進め方：長いリードを横いっぱいに組み、本文を右下へずらす。 -->
    <PageSection heading="相談の進め方">
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt']">
          本人の<br class="md:hidden" /><span class="max-md:-ml-[0.54em]">「こうしたい」から、</span><br />一緒に考える。
        </p>

        <div
          v-reveal
          class="col-span-12 mt-12 max-w-lg space-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13 md:mt-16"
        >
          <p>
            まず、今考えていることや悩んでいることを持ってきてもらいます。まだ言葉になっていなくても構いません。話したり、書いたりしながら、一緒に整理していきます。
          </p>
          <p>
            そのうえで、考えられる選択肢や進め方を共有します。必要であればGBCから提案もしますが、「こう活動するべき」と決めることはありません。
          </p>
          <p>
            実際に活動を進めるのは本人です。進める中で迷ったら、また相談する。必要なときに必要なだけ使える関係を大切にします。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 相談方法：短いリードを左に立て、本文を右に並べる。 -->
    <PageSection heading="相談方法">
      <div class="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20 md:items-baseline">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt'] md:col-span-5">
          相談方法も、<br />本人が選ぶ。
        </p>

        <div
          v-reveal
          class="col-span-12 max-w-lg space-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 delay-150 md:col-start-6 md:col-end-13 lg:col-start-7"
        >
          <p>
            話しながら考えたい人もいれば、文章にした方が落ち着いて考えられる人もいます。華の騎士団では、オンライン、対面、チャットなど、自分に合う方法で相談できる形を目指します。
          </p>
          <p>
            チャットも正式な相談方法のひとつです。直接話すことが得意である必要はありません。
          </p>
          <p>
            即時対応や緊急対応を前提にはせず、利用状況に応じて相談頻度や対応方法を調整しながら、双方にとって無理なく続けられる関係をつくります。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 料金：項目名と割合を罫線ではさんだ1行にし、割合を特大の明朝で組んで左端を5列目にそろえる。 -->
    <PageSection heading="料金">
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        活動の売上に<br class="md:hidden" />合わせて、<br />利用料金も変わる。
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
        <div v-reveal class="col-span-12 max-w-lg space-y-7 text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 md:col-start-7 md:col-end-13">
          <p>
            固定の月額料金ではなく、華の騎士団が支援対象としている活動の月間売上に対して、一定の割合を利用料金とする形を検討しています。
          </p>
          <p>
            活動の状況にかかわらず同じ固定費を負担するのではなく、売上に応じて料金も変わる。活動する側と支援する側の双方が、無理なく続けられる料金体系を目指します。
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
    <!-- 「GBCのために」と「自分のために」を行頭に置き、二つが向き合うように組む。 -->
    <PageSection heading="お問い合わせ">
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        GBCのために<br />活動する<br class="md:hidden" />のではなく、<br /><span class="-ml-[0.14em]">自分のために</span><br />活動する。
      </p>

      <div class="mt-12 grid grid-cols-12 gap-x-6 md:mt-16">
        <p
          v-reveal
          class="col-span-12 max-w-lg text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13"
        >
          華の騎士団の目的は、GBCを使い続けてもらうことではありません。自分の世界観を守り、自分で選び、自分の力で活動を続けられること。そのために必要なときだけ、華の騎士団を使ってください。
        </p>
      </div>

      <div v-reveal class="mt-20 md:mt-28">
        <ContactLink />
      </div>
    </PageSection>
  </main>
</template>
