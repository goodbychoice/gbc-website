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
</script>

<template>
  <main class="bg-[#f4f1ea] text-[#111317]">
    <section
      class="border-b-2 border-black/20 px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
    >
      <div class="mx-auto w-full max-w-[1600px]">
        <p
          class="text-[15px] font-semibold tracking-[0.04em] text-black/60 sm:text-[16px]"
        >
          学び
        </p>

        <h1
          class="mt-8 text-[clamp(3.2rem,8vw,8rem)] font-semibold leading-[1.02] tracking-[-0.06em]"
        >
          Simple Study
        </h1>

        <p
          class="mt-10 max-w-[1080px] text-[clamp(2rem,4vw,4.2rem)] font-semibold leading-[1.22] tracking-[-0.045em]"
        >
          シンプルに学ぶ。<br class="hidden sm:block" />
          シンプルに理解する。
        </p>

        <p
          class="mt-10 max-w-[860px] text-[18px] leading-[2] text-black/68 sm:text-[19px] md:text-[21px]"
        >
          Simple Studyは、個人が自分の力で活動していくために必要な知識や技術を学ぶためのオンライン学習サービスです。現在はIT・プログラミング領域を中心に、基礎から実践、そして実際に使える形として公開するところまでを見据えて展開します。
        </p>
      </div>
    </section>

    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            Simple Studyの考え方
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p
            class="max-w-[980px] text-[clamp(2.2rem,4.3vw,4.5rem)] font-semibold leading-[1.18] tracking-[-0.045em]"
          >
            難しいことを、<br class="hidden sm:block" />
            難しいまま教えない。
          </p>

          <div
            class="mt-12 max-w-[820px] space-y-7 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:text-[19px]"
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
      </div>
    </section>

    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            誰のための学びか
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p
            class="max-w-[940px] text-[clamp(2.1rem,4vw,4.2rem)] font-semibold leading-[1.2] tracking-[-0.045em]"
          >
            エンジニアになるためではなく、<br class="hidden sm:block" />
            自分の活動に技術を使うために。
          </p>

          <div
            class="mt-12 max-w-[820px] space-y-7 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:text-[19px]"
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
      </div>
    </section>

    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            学ぶ領域
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p
            class="max-w-[940px] text-[clamp(2.1rem,4vw,4.2rem)] font-semibold leading-[1.2] tracking-[-0.045em]"
          >
            幅広く触れるより、<br class="hidden sm:block" />
            実際に使う技術を深く。
          </p>

          <div
            class="mt-12 max-w-[820px] space-y-7 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:text-[19px]"
          >
            <p>
              現在は、PythonとWebを中心に学習領域を構成する予定です。Webでは、Vue・Nuxtを軸に、サービスをつくるために必要な基礎から実践までを扱います。
            </p>
            <p>
              Pythonでは、言語の基礎だけでなく、データ処理、API、AI活用、Webでの活用など、自分の活動やサービスにつなげやすい使い方を学びます。
            </p>
            <p>
              特定のフレームワークや技術を覚えること自体を目的にはしません。その時々で適切な技術を選びながら、「何をつくれるようになるか」を軸に扱う内容を考えていきます。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            基礎を、飛ばさない
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p
            class="max-w-[940px] text-[clamp(2.1rem,4vw,4.2rem)] font-semibold leading-[1.2] tracking-[-0.045em]"
          >
            実践するためにこそ、<br class="hidden sm:block" />
            基礎から丁寧に。
          </p>

          <div
            class="mt-12 max-w-[820px] space-y-7 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:text-[19px]"
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
      </div>
    </section>

    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            学び方
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p
            class="max-w-[940px] text-[clamp(2.1rem,4vw,4.2rem)] font-semibold leading-[1.2] tracking-[-0.045em]"
          >
            道は示す。<br class="hidden sm:block" />
            でも、学び方は縛らない。
          </p>

          <div
            class="mt-12 max-w-[820px] space-y-7 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:text-[19px]"
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
      </div>
    </section>

    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            ゴール
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p
            class="max-w-[980px] text-[clamp(2.3rem,4.6vw,4.8rem)] font-semibold leading-[1.18] tracking-[-0.05em]"
          >
            動くコードではなく、<br class="hidden sm:block" />
            使えるサービスをつくる。
          </p>

          <div
            class="mt-12 max-w-[820px] space-y-7 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:text-[19px]"
          >
            <p>
              Simple Studyでは、コードを書いて実行できたことだけをゴールにはしません。Webサービスやツールなど、他の人が実際に使える形までつくることを大切にします。
            </p>
            <p>
              ローカルで完成して終わるのではなく、必要な知識を学びながら公開まで進む。自分でつくったものを、自分以外の誰かが使える状態にする。そこまで経験して初めて、技術が自分の力になります。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
    >
      <div class="mx-auto w-full max-w-[1600px]">
        <div class="mx-auto max-w-[1180px] text-center">
          <p
            class="text-[clamp(2.4rem,5vw,5.2rem)] font-semibold leading-[1.2] tracking-[-0.05em]"
          >
            学んだ先に、<br class="sm:hidden" />
            自分でつくったものが残る。
          </p>

          <p
            class="mx-auto mt-10 max-w-[760px] text-[17px] leading-[2] text-black/64 sm:text-[18px]"
          >
            Simple Studyは、知識を増やすためだけの場所ではありません。自分の活動に技術を使い、自分の手で形にできる人を増やしていきます。
          </p>

          <NuxtLink
            to="/contact"
            class="group mt-12 inline-flex items-center gap-4 border-b border-black/30 pb-2 text-[16px] font-semibold transition-colors hover:border-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <span>お問い合わせ</span>
            <span
              aria-hidden="true"
              class="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
