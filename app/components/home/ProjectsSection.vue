<template>
  <section id="projects" class="scroll-mt-24 bg-brand-surface text-brand-ink">
    <div class="mx-auto w-full max-w-brand px-5 py-28 sm:px-8 md:py-40 lg:px-12 lg:py-52 xl:px-16">
      <!-- 導入：大きなリードを左に寄せ、本文を右下へずらして対角の流れをつくる。 -->
      <div class="grid grid-cols-12 gap-x-6">
        <SectionHeading class="col-span-12">事業</SectionHeading>

        <p v-reveal class="col-span-12 mt-14 font-serif text-lead font-features-['palt'] md:col-span-10 md:mt-20">
          必要なものを、<br />必要なときに選ぶ。
        </p>

        <p
          v-reveal
          class="col-span-12 mt-12 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 delay-150 md:col-start-7 md:col-end-13 md:mt-16"
        >
          GBCは、個人が自分の力で活動していくために、学び、事業、表現のそれぞれの領域で支援を行っています。決められた順路はありません。その人自身が、今必要なものを選べることを大切にしています。
        </p>
      </div>

      <!-- Simple Study：2語を階段状にずらし、左上から右下へ一段ずつ進む流れをつくる。 -->
      <article class="mt-28 border-t border-brand-ink/15 pt-10 md:mt-40 md:pt-12 lg:mt-52">
        <SectionLabel>学び</SectionLabel>

        <!-- 2語目は、12列の4列目にそろう幅だけ右へずらす。2語の間の空白は、読み上げと検索で1語につながらないように残す。 -->
        <h3 class="mt-10 -ml-[0.04em] font-serif text-[clamp(3.25rem,11vw,11rem)]/none tracking-[0.04em] md:mt-14">
          <span v-reveal class="block">Simple</span> <span v-reveal class="block pl-[2.1em] delay-150">Study</span>
        </h3>

        <div class="mt-12 grid grid-cols-12 gap-x-6 md:mt-16">
          <div class="col-span-12 md:col-start-7 md:col-end-13">
            <p v-reveal class="font-serif text-catch font-features-['palt']">
              自分の力で進むための、<br />学びを。
            </p>

            <div v-reveal class="mt-10 delay-150 md:mt-12">
              <div class="max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85">
                <p>
                  Simple Studyは、個人が自立して活動していくために必要な知識や技術を学ぶためのサービスです。
                </p>
                <p>
                  まずはIT・プログラミング領域を中心に、未経験からでも実践につながる学習機会を提供します。学ぶことそのものを目的にするのではなく、自分の力で何かをつくり、仕事や活動につなげていくところまでを見据えます。
                </p>
              </div>

              <ArrowLink to="/business/simple-study" class="mt-12">
                Simple Studyを詳しく見る
              </ArrowLink>
            </div>
          </div>
        </div>
      </article>

      <!-- フェンリル：名前を画面幅いっぱいに大きく組み、下に引いた罫線を地面に見立てる。 -->
      <article class="mt-28 md:mt-40 lg:mt-52">
        <SectionLabel>事業支援</SectionLabel>

        <div class="mt-10 border-b border-brand-ink/15 pb-8 md:mt-14 md:pb-12">
          <!-- 大きな文字は字形の余白で左端が引っ込んで見えるため、負のマージンで見た目の左端をそろえる。 -->
          <h3
            v-reveal
            class="-ml-[0.15em] font-serif text-[clamp(3.25rem,11vw,11rem)]/none tracking-[0.12em] font-features-['palt']"
          >
            フェンリル
          </h3>
        </div>

        <div class="mt-12 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-16">
          <p v-reveal class="col-span-12 font-serif text-catch font-features-['palt'] md:col-span-5">
            自分の事業を、<br />自分の力でつくり、<br />続けていく。
          </p>

          <div v-reveal class="col-span-12 delay-150 md:col-start-7 md:col-end-13">
            <div class="max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85">
              <p>
                フェンリルは、これから自分の事業を始めたい人から、すでに個人事業主、個人社長、フリーランスなど、自分の商品・サービスを持って活動している人までを支えるサービスです。
              </p>
              <p>
                IT活用、業務の仕組み化、Web、集客、運営など、事業を自分の手で進めていくために必要な支援を提供します。GBCが事業の方向を決めるのではありません。主役は、あくまでその事業をつくる本人です。
              </p>
            </div>

            <ArrowLink to="/business/fenrir" class="mt-12">
              フェンリルを詳しく見る
            </ArrowLink>
          </div>
        </div>
      </article>

      <!-- 華の騎士団：名前をヒーローと同じ縦組みにして右端に立て、文章を左に置く。 -->
      <article class="mt-28 md:mt-40 lg:mt-52">
        <SectionLabel>クリエイター支援</SectionLabel>

        <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
          <h3
            v-reveal
            class="col-start-11 col-end-13 row-start-1 justify-self-end font-serif text-[clamp(3rem,7vw,7.5rem)]/none tracking-[0.24em] whitespace-nowrap [writing-mode:vertical-rl] md:row-end-3"
          >
            華の騎士団
          </h3>

          <!-- スマートフォンではコピーの下端を名前の下端にそろえ、PCでは少し下げて名前と段差をつける。 -->
          <!-- スマートフォンでは名前の横に収まるよう、2行目も文節で折り返す。 -->
          <p
            v-reveal
            class="col-span-10 row-start-1 self-end font-serif text-catch font-features-['palt'] md:col-span-6 md:self-start md:pt-32"
          >
            自分らしい表現を、<br />自分らしく<br class="md:hidden" />続けていく。
          </p>

          <div v-reveal class="col-span-12 row-start-2 mt-14 delay-150 md:col-span-6 md:mt-12">
            <div class="max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-ink/85">
              <p>
                華の騎士団は、個人として創作・表現・発信活動を行うクリエイターを支えるサービスです。
              </p>
              <p>
                活動設計、制作環境、発信、収益化など、それぞれの活動に必要な支援を提供します。活動を管理するのではなく、その人自身の世界観や判断を尊重し、必要なときに必要な支援を使える関係をつくります。
              </p>
            </div>

            <ArrowLink to="/business/hana-no-kishidan" class="mt-12">
              華の騎士団を詳しく見る
            </ArrowLink>
          </div>
        </div>
      </article>
    </div>

    <!-- Pandora：画面幅いっぱいの黒い帯にし、特大の名前を下端に置いて各事業を支える土台に見立てる。 -->
    <article class="bg-brand-ink text-brand-surface">
      <div class="mx-auto w-full max-w-brand px-5 pt-28 pb-8 sm:px-8 md:pt-40 md:pb-10 lg:px-12 lg:pt-52 xl:px-16">
        <SectionLabel dark>技術・開発</SectionLabel>

        <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
          <!-- 読み上げでは見出しが先に届くようHTMLでは先に書き、表示は order-last で下端へ移す。 -->
          <h3
            v-reveal
            class="order-last col-span-12 mt-24 -ml-[0.04em] font-serif text-[clamp(3.5rem,19vw,17rem)]/none tracking-[0.04em] md:mt-36"
          >
            Pandora
          </h3>

          <!-- 「自」は字形の左の余白が大きく、行頭で引っ込んで見えるため、その行だけ負のマージンで見た目の左端をそろえる。 -->
          <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt'] md:col-span-10">
            必要なものを、<br /><span class="-ml-[0.14em]">自分でつくる。</span>
          </p>

          <div v-reveal class="col-span-12 mt-12 delay-150 md:col-start-7 md:col-end-13 md:mt-16">
            <div class="max-w-lg space-y-7 text-body lg:text-body-desktop text-pretty text-brand-surface/85">
              <p>
                Pandoraは、GBC自身のサービスや各事業に必要な仕組みを企画し、技術で形にする開発領域です。
              </p>
              <p>
                各事業を支えるシステムやツールに加え、新しい自社サービスやプロダクトも企画・開発します。必要に応じて、外部向けの開発・技術支援にも取り組みます。
              </p>
            </div>

            <ArrowLink to="/business/pandora" class="mt-12">
              Pandoraを詳しく見る
            </ArrowLink>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
