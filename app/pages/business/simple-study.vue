<script setup lang="ts">
// Simple Studyページの検索結果・SNS共有向け情報を設定する。
useSeoMeta({
  title: "個人向けIT・プログラミング学習 | Simple Study | GBC",
  description:
    "Simple Studyは、個人が自分の力で活動していくために必要な知識や技術を、シンプルに学び、理解するためのオンライン学習サービスです。現在はIT・プログラミング領域を中心に展開します。",
  ogTitle: "個人向けIT・プログラミング学習 | Simple Study | GBC",
  ogDescription:
    "Simple Studyは、個人が自分の力で活動していくために必要な知識や技術を、シンプルに学び、理解するためのオンライン学習サービスです。現在はIT・プログラミング領域を中心に展開します。",
  twitterTitle: "個人向けIT・プログラミング学習 | Simple Study | GBC",
  twitterDescription:
    "Simple Studyは、個人が自分の力で活動していくために必要な知識や技術を、シンプルに学び、理解するためのオンライン学習サービスです。現在はIT・プログラミング領域を中心に展開します。",
});

// 学ぶ領域。2つに順序はないので、同じ幅で横に並べる。
const areas = [
  {
    name: "Python",
    text: "Pythonでは、言語の基礎だけでなく、データ処理、API、AI活用、Webでの活用など、自分の活動やサービスにつなげやすい使い方を学びます。",
  },
  {
    name: "Web",
    text: "Webでは、Vue・Nuxtを軸に、サービスをつくるために必要な基礎から実践までを扱います。",
  },
];

// 学んだ先につくれるもの。
const outcomes = [
  "日々の作業を効率化する小さなツール",
  "自分のアイデアを形にしたWebサービス",
  "APIを使って処理をつなぐ自動化の仕組み",
  "データを整理・集計・処理するツール",
  "AIを自分のサービスや業務に取り入れた機能",
];
</script>

<template>
  <main>
    <!-- 大きく組む文字で行頭が仮名や「自」のときは、字形の左の余白で引っ込んで見えるため、その行を負のマージンで囲んで見た目の左端をそろえる。 -->
    <!-- スマートフォンだけで行頭になる字は、max-md: でその幅のときだけそろえる。 -->

    <!-- 最初の画面：トップページの事業紹介と同じく、2語を階段状にずらして左上から右下へ進む流れをつくる。 -->
    <section>
      <div class="mx-auto w-full max-w-brand px-5 pt-16 pb-28 sm:px-8 md:pt-20 md:pb-40 lg:px-12 lg:pt-24 lg:pb-52 xl:px-16">
        <SectionLabel class="animate-rise motion-reduce:animate-none">学び</SectionLabel>

        <!-- 2語目は、12列の4列目にそろう幅だけ右へずらす。2語の間の空白は、読み上げと検索で1語につながらないように残す。 -->
        <!-- 題は幅に合わせて大きくするが、高さの足りない画面では画面の下にはみ出さないよう、高さでも大きさを抑える。 -->
        <h1 class="mt-10 -ml-[0.04em] font-serif text-[clamp(3.25rem,min(11vw,111svh-900px),11rem)]/none tracking-[0.04em] md:mt-14">
          <span class="block animate-rise motion-reduce:animate-none [animation-delay:150ms]">Simple</span> <span class="block pl-[2.1em] animate-rise motion-reduce:animate-none [animation-delay:300ms]">Study</span>
        </h1>

        <div class="mt-12 grid grid-cols-12 gap-x-6 md:mt-16">
          <div class="col-span-12 animate-rise motion-reduce:animate-none [animation-delay:500ms] md:col-start-7 md:col-end-13">
            <p class="font-serif text-catch font-features-['palt']">シンプルに学ぶ。<br />シンプルに理解する。</p>
            <p class="mt-10 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 md:mt-12">
              Simple Studyは、個人が自分の力で活動していくために必要な知識や技術を学ぶためのオンライン学習サービスです。現在はIT・プログラミング領域を中心に、基礎から実践、そして実際に使える形として公開するところまでを見据えて展開します。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 考え方：短く区切ったリードを左に立て、本文を右に並べる。 -->
    <PageSection heading="Simple Studyの考え方">
      <div class="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20 md:items-baseline">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt'] md:col-span-5">
          難しい<br /><span class="-ml-[0.19em]">ことを、</span><br />難しいまま<br />教えない。
        </p>

        <div
          v-reveal
          class="col-span-12 max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-6 md:col-end-13 lg:col-start-7"
        >
          <p>
            Simple Studyが大切にするのは、最初からすべてを正確に説明することではありません。まずは「つまり、こういうこと」とシンプルに理解できるところまで噛み砕き、必要になったときに必要な知識だけを加えていきます。
          </p>
          <p>
            専門用語や細かな仕組みを、知っている側の都合で一度に押し込まない。今の理解や目的に必要のないことは、あえて説明しない。それも、分かりやすく教えるために必要な設計だと考えています。
          </p>
          <p>
            何を教えるかだけではなく、何を教えないか。どの順番なら自然に理解できるか。そこまで含めて、学びやすさをつくります。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 対象：長いリードを横いっぱいに組み、本文を右下へずらす。 -->
    <PageSection heading="誰のための学びか">
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt']">
          エンジニアに<br class="md:hidden" /><span class="max-md:-ml-[0.09em]">なるためではなく、</span><br /><span class="-ml-[0.14em]">自分の活動に</span><br class="md:hidden" />技術を使うために。
        </p>

        <div
          v-reveal
          class="col-span-12 mt-12 max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13 md:mt-16"
        >
          <p>
            個人開発でサービスをつくりたい人。個人事業やフリーランスの仕事を効率化したい人。自分の活動にWebやAIなどの技術を取り入れたい人。
          </p>
          <p>
            Simple Studyが主に想定しているのは、エンジニア転職そのものを目的とする人ではなく、技術を自分の活動のための道具として使いたい人です。
          </p>
          <p>
            外注するしかなかったものを、自分でも考え、つくり、改善できる。その選択肢を増やすための学びを提供します。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 学ぶ領域：リードと考え方を左右に並べ、その下に2つの領域を同じ幅で並べる。 -->
    <PageSection heading="学ぶ領域">
      <div class="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20 md:items-baseline">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt'] md:col-span-5">
          幅広く<br />触れるより、<br />実際に使う<br />技術を深く。
        </p>

        <div
          v-reveal
          class="col-span-12 max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-6 md:col-end-13 lg:col-start-7"
        >
          <p>現在は、PythonとWebを中心に学習領域を構成する予定です。</p>
          <p>
            特定のフレームワークや技術を覚えること自体を目的にはしません。その時々で適切な技術を選びながら、「何をつくれるようになるか」を軸に扱う内容を考えていきます。
          </p>
        </div>
      </div>

      <!-- 2つの領域：罫線を列ごとに切り、それぞれが独立して並んでいることを示す。 -->
      <ul v-reveal class="mt-24 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-36">
        <li v-for="area in areas" :key="area.name" class="col-span-12 border-t border-brand-ink/15 pt-6 md:col-span-6">
          <h3 class="font-serif text-catch">{{ area.name }}</h3>
          <p class="mt-6 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85">{{ area.text }}</p>
        </li>
      </ul>
    </PageSection>

    <!-- 基礎：リードを横いっぱいに組み、本文を右下へずらす。 -->
    <PageSection heading="基礎を、飛ばさない">
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt']">
          実践する<br class="md:hidden" />ためにこそ、<br />基礎から丁寧に。
        </p>

        <div
          v-reveal
          class="col-span-12 mt-12 max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13 md:mt-16"
        >
          <p>
            最終的にサービスをつくるからといって、いきなり実践だけを始めるわけではありません。変数、条件分岐、関数、データ構造といった基礎も、初めて学ぶ人が理解できるところから丁寧に扱います。
          </p>
          <p>
            Webでも同様に、HTML・CSS・JavaScriptなどの基礎を理解したうえで、VueやNuxtを使った開発へ進みます。
          </p>
          <p>
            基礎と実践を切り離すのではなく、学んだことをすぐに使いながら、必要な知識を少しずつ積み重ねていく学び方を目指します。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- 学び方：短く区切ったリードを左に立て、本文を右に並べる。 -->
    <PageSection heading="学び方">
      <div class="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20 md:items-baseline">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt'] md:col-span-5">
          道は示す。<br />でも、<br />学び方は<br />縛らない。
        </p>

        <div
          v-reveal
          class="col-span-12 max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-6 md:col-end-13 lg:col-start-7"
        >
          <p>
            初めて学ぶ人が迷わないように、目的に合わせた推奨の学習順序を用意します。一方で、すべてを決められた順番どおりに進めることを前提にはしません。
          </p>
          <p>
            教材は文章を中心に、図、コード、演習を組み合わせ、必要な場面では動画も使います。読むだけではなく、その場で試し、自分の環境でも実際に手を動かすことを重視します。
          </p>
          <p>
            学ぶ。つくる。足りないものを学ぶ。そして、またつくる。その往復を繰り返しながら、自分で進める力を身につけていきます。
          </p>
        </div>
      </div>
    </PageSection>

    <!-- つくれるもの：リードの下に、つくれるものを5列目から罫線で区切って並べ、本文より一段大きい明朝で組む。 -->
    <!-- 折り返すときは文節で区切って行の長さをそろえ、語尾だけが次の行に落ちないようにする。 -->
    <PageSection heading="学んだ先につくれるもの">
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt']">
          知識を覚える<br class="md:hidden" />だけでなく、<br /><span class="-ml-[0.14em]">自分に必要なものを</span><br class="md:hidden" />形にする。
        </p>

        <p
          v-reveal
          class="col-span-12 mt-12 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13 md:mt-16"
        >
          Simple Studyで目指すのは、学んだ技術を使って、自分の活動に必要なものを自分で形にできる状態です。
        </p>

        <ul v-reveal class="col-span-12 mt-20 border-t border-brand-ink/15 md:col-start-5 md:col-end-13 md:mt-28">
          <li
            v-for="outcome in outcomes"
            :key="outcome"
            class="border-b border-brand-ink/15 py-6 font-serif text-catch text-balance font-features-['palt'] [word-break:auto-phrase] md:py-8"
          >
            {{ outcome }}
          </li>
        </ul>

        <p
          v-reveal
          class="col-span-12 mt-16 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 md:col-start-7 md:col-end-13 md:mt-20"
        >
          つくるものを起点に必要なことを学び、学んだら実際につくる。その繰り返しを通して、技術を「知っているもの」ではなく「使えるもの」にしていきます。
        </p>
      </div>
    </PageSection>

    <!-- 黒い帯：Simple Studyのゴールを強調する。本文は2段に分け、1行の字数が足りない幅では1段で続けて読む。 -->
    <PageSection heading="ゴール" dark>
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        動くコード<br class="md:hidden" />ではなく、<br />使える<br class="md:hidden" />サービスをつくる。
      </p>

      <div class="mt-16 grid grid-cols-12 gap-x-6 gap-y-7 text-body lg:text-body-desktop text-pretty text-brand-surface/85 md:mt-24 xl:gap-y-0">
        <p v-reveal class="col-span-12 max-w-lg xl:col-span-5">
          Simple Studyでは、コードを書いて実行できたことだけをゴールにはしません。Webサービスやツールなど、他の人が実際に使える形までつくることを大切にします。
        </p>
        <p v-reveal class="col-span-12 max-w-lg delay-150 xl:col-start-7 xl:col-end-13">
          ローカルで完成して終わるのではなく、必要な知識を学びながら公開まで進む。自分でつくったものを、自分以外の誰かが使える状態にする。そこまで経験して初めて、技術が自分の力になります。
        </p>
      </div>
    </PageSection>

    <!-- お問い合わせ：最後の一文をトップのお問い合わせと同じ大きさで組み、その下にお問い合わせへの導線を置く。 -->
    <PageSection heading="お問い合わせ">
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        学んだ先に、<br /><span class="-ml-[0.14em]">自分でつくった</span><br class="md:hidden" /><span class="max-md:-ml-[0.21em]">ものが残る。</span>
      </p>

      <div class="mt-12 grid grid-cols-12 gap-x-6 md:mt-16">
        <p
          v-reveal
          class="col-span-12 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13"
        >
          Simple Studyは、知識を増やすためだけの場所ではありません。自分の活動に技術を使い、自分の手で形にできる人を増やしていきます。
        </p>
      </div>

      <div v-reveal class="mt-20 md:mt-28">
        <ContactLink />
      </div>
    </PageSection>
  </main>
</template>
