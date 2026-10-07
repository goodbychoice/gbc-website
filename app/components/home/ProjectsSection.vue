<template>
  <section
    id="projects"
    class="scroll-mt-24 border-t-2 border-black/20 bg-[#f4f1ea] px-5 py-28 text-[#111317] sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
  >
    <div class="mx-auto w-full max-w-[1600px]">
      <div class="grid grid-cols-12 gap-y-12 md:gap-y-0">
        <div class="col-span-12 md:col-span-4">
          <div class="max-w-[280px]">
            <h2
              class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
            >
              事業
            </h2>
            <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
          </div>
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-13">
          <p
            class="max-w-[980px] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.15] tracking-[-0.045em]"
          >
            必要なものを、<br class="hidden sm:block" />
            必要なときに選ぶ。
          </p>

          <p
            class="mt-12 max-w-[760px] text-[17px] leading-[2] text-black/68 sm:text-[18px] md:mt-14 md:text-[19px]"
          >
            GBCは、個人が自分の力で活動していくために、学び、事業、表現のそれぞれの領域で支援を行っています。決められた順路はありません。その人自身が、今必要なものを選べることを大切にしています。
          </p>
        </div>
      </div>

      <div class="mt-24 md:mt-32">
        <article
          class="grid grid-cols-12 gap-y-8 border-t border-black/20 py-12 md:items-start md:py-16"
        >
          <div class="col-span-12 md:col-span-4">
            <p class="text-[13px] font-medium tracking-[0.08em] text-black/60">
              学び
            </p>
            <h3
              class="mt-3 text-[clamp(2rem,3vw,3.2rem)] font-semibold tracking-[-0.04em]"
            >
              Simple Study
            </h3>
          </div>

          <div class="col-span-12 md:col-start-5 md:col-end-12">
            <p
              class="text-[clamp(1.8rem,3.2vw,3.5rem)] font-semibold leading-[1.25] tracking-[-0.04em]"
            >
              自分の力で進むための、学びを。
            </p>

            <div
              class="mt-8 max-w-[760px] space-y-6 text-[17px] leading-[2] text-black/66 sm:text-[18px]"
            >
              <p>
                Simple Studyは、個人が自立して活動していくために必要な知識や技術を学ぶためのサービスです。
              </p>
              <p>
                まずはIT・プログラミング領域を中心に、未経験からでも実践につながる学習機会を提供します。学ぶことそのものを目的にするのではなく、自分の力で何かをつくり、仕事や活動につなげていくところまでを見据えます。
              </p>
            </div>

            <NuxtLink
              to="/business/simple-study"
              class="group mt-8 inline-flex items-center gap-4 border-b border-black/30 pb-2 text-[15px] font-semibold transition-colors hover:border-black sm:text-[16px]"
            >
              <span>Simple Studyを詳しく見る</span>
              <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </NuxtLink>
          </div>
        </article>

        <article
          class="grid grid-cols-12 gap-y-8 border-t border-black/20 py-12 md:items-start md:py-16"
        >
          <div class="col-span-12 md:col-span-4">
            <p class="text-[13px] font-medium tracking-[0.08em] text-black/60">
              事業支援
            </p>
            <h3
              class="mt-3 text-[clamp(2rem,3vw,3.2rem)] font-semibold tracking-[-0.04em]"
            >
              フェンリル
            </h3>
          </div>

          <div class="col-span-12 md:col-start-5 md:col-end-12">
            <p
              class="text-[clamp(1.8rem,3.2vw,3.5rem)] font-semibold leading-[1.25] tracking-[-0.04em]"
            >
              自分の事業を、自分の力でつくり、続けていく。
            </p>

            <div
              class="mt-8 max-w-[760px] space-y-6 text-[17px] leading-[2] text-black/66 sm:text-[18px]"
            >
              <p>
                フェンリルは、これから自分の事業を始めたい人から、すでに個人事業主、フリーランス、個人社長として活動している人までを支えるサービスです。
              </p>
              <p>
                IT活用、業務の仕組み化、Web、集客、運営など、事業を自分の手で進めていくために必要な支援を提供します。GBCが事業の方向を決めるのではありません。主役は、あくまでその事業をつくる本人です。
              </p>
            </div>

            <NuxtLink
              to="/business/fenrir"
              class="group mt-8 inline-flex items-center gap-4 border-b border-black/30 pb-2 text-[15px] font-semibold transition-colors hover:border-black sm:text-[16px]"
            >
              <span>フェンリルを詳しく見る</span>
              <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </NuxtLink>
          </div>
        </article>

        <article
          class="grid grid-cols-12 gap-y-8 border-y border-black/20 py-12 md:items-start md:py-16"
        >
          <div class="col-span-12 md:col-span-4">
            <p class="text-[13px] font-medium tracking-[0.08em] text-black/60">
              クリエイター支援
            </p>
            <h3
              class="mt-3 text-[clamp(2rem,3vw,3.2rem)] font-semibold tracking-[-0.04em]"
            >
              華の騎士団
            </h3>
          </div>

          <div class="col-span-12 md:col-start-5 md:col-end-12">
            <p
              class="text-[clamp(1.8rem,3.2vw,3.5rem)] font-semibold leading-[1.25] tracking-[-0.04em]"
            >
              自分らしい表現を、自分らしく続けていく。
            </p>

            <div
              class="mt-8 max-w-[760px] space-y-6 text-[17px] leading-[2] text-black/66 sm:text-[18px]"
            >
              <p>
                華の騎士団は、個人として創作・表現・発信活動を行うクリエイターを支えるサービスです。
              </p>
              <p>
                活動設計、制作環境、発信、収益化など、それぞれの活動に必要な支援を提供します。活動を管理するのではなく、その人自身の世界観や判断を尊重し、必要なときに必要な支援を使える関係をつくります。
              </p>
            </div>

            <NuxtLink
              to="/business/hana-no-kishidan"
              class="group mt-8 inline-flex items-center gap-4 border-b border-black/30 pb-2 text-[15px] font-semibold transition-colors hover:border-black sm:text-[16px]"
            >
              <span>華の騎士団を詳しく見る</span>
              <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </NuxtLink>
          </div>
        </article>
      </div>

      <div class="mt-28 md:mt-36">
        <div class="grid grid-cols-12 gap-y-10 border-t-[3px] border-[#111317] pt-10 md:gap-y-0 md:pt-12">
          <div class="col-span-12 md:col-span-4">
            <p class="text-[13px] font-medium tracking-[0.08em] text-black/60">
              技術・開発
            </p>
            <h3
              class="mt-3 text-[clamp(2.2rem,3.4vw,3.6rem)] font-semibold tracking-[-0.04em]"
            >
              Pandora
            </h3>
          </div>

          <div class="col-span-12 md:col-start-5 md:col-end-13">
            <p
              class="max-w-[900px] text-[clamp(2rem,4vw,4.2rem)] font-semibold leading-[1.2] tracking-[-0.045em]"
            >
              必要なものを、<br class="hidden sm:block" />
              自分でつくる。
            </p>

            <div
              class="mt-10 max-w-[760px] space-y-6 text-[17px] leading-[2] text-black/66 sm:text-[18px]"
            >
              <p>
                Pandoraは、GBC自身のサービスや各事業に必要な仕組みを企画し、技術で形にする開発領域です。
              </p>
              <p>
                各事業を支えるシステムやツールに加え、新しい自社サービスやプロダクトも企画・開発します。必要に応じて、外部向けの開発・技術支援にも取り組みます。
              </p>
            </div>

            <NuxtLink
              to="/business/pandora"
              class="group mt-8 inline-flex items-center gap-4 border-b border-black/30 pb-2 text-[15px] font-semibold transition-colors hover:border-black sm:text-[16px]"
            >
              <span>Pandoraを詳しく見る</span>
              <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
