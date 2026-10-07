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
</script>

<template>
  <main class="bg-[#f4f1ea] text-[#111317]">
    <!-- サービス名とPandoraの役割を最初に伝える。 -->
    <section
      class="border-b-2 border-black/20 px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
    >
      <div class="mx-auto w-full max-w-[1600px]">
        <p
          class="text-[15px] font-semibold tracking-[0.04em] text-black/60 sm:text-[16px]"
        >
          技術・開発
        </p>

        <h1
          class="mt-8 text-[clamp(3.2rem,8vw,8rem)] font-semibold leading-[1.02] tracking-[-0.06em]"
        >
          Pandora
        </h1>

        <p
          class="mt-10 max-w-[1100px] text-[clamp(2rem,4vw,4.2rem)] font-semibold leading-[1.22] tracking-[-0.045em]"
        >
          必要なものを、<br class="hidden sm:block" />
          自分でつくる。
        </p>

        <p
          class="mt-10 max-w-[860px] text-[18px] leading-[2] text-black/68 sm:text-[19px] md:text-[21px]"
        >
          Pandoraは、GBC自身のサービスや各事業に必要な仕組みを企画し、技術で形にするための開発領域です。
        </p>
      </div>
    </section>

    <!-- Pandoraが担う役割を説明する。 -->
    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            Pandoraとは
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p
            class="max-w-[980px] text-[clamp(2.2rem,4.3vw,4.5rem)] font-semibold leading-[1.18] tracking-[-0.045em]"
          >
            必要な仕組みを、<br class="hidden sm:block" />
            自分の手で形にする。
          </p>

          <div
            class="mt-12 max-w-[820px] space-y-7 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:text-[19px]"
          >
            <p>
              Simple Study、フェンリル、華の騎士団が個人に向けて価値を届ける事業であるのに対し、PandoraはGBC自身が必要とするサービスや仕組みをつくる側を担います。
            </p>
            <p>
              既にある仕組みに無理に合わせるのではなく、必要なものがなければつくる。GBCの考えや事業を、実際に使えるサービスやシステムとして形にしていきます。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pandoraで開発する対象を整理して示す。 -->
    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            つくるもの
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p
            class="max-w-[940px] text-[clamp(2.1rem,4vw,4.2rem)] font-semibold leading-[1.2] tracking-[-0.045em]"
          >
            GBCの中から、<br class="hidden sm:block" />
            新しいものを生み出す。
          </p>

          <div class="mt-12 border-t border-black/20">
            <div
              class="grid gap-4 border-b border-black/20 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <p class="text-[15px] font-semibold text-black/60">自社サービス</p>
              <p class="text-[17px] leading-[1.9] text-black/70 sm:text-[18px]">
                GBC自身が提供するサービスを企画し、開発します。
              </p>
            </div>

            <div
              class="grid gap-4 border-b border-black/20 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <p class="text-[15px] font-semibold text-black/60">各事業の仕組み</p>
              <p class="text-[17px] leading-[1.9] text-black/70 sm:text-[18px]">
                Simple Study、フェンリル、華の騎士団を支えるシステムやツールをつくります。
              </p>
            </div>

            <div
              class="grid gap-4 border-b border-black/20 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <p class="text-[15px] font-semibold text-black/60">新しいプロダクト</p>
              <p class="text-[17px] leading-[1.9] text-black/70 sm:text-[18px]">
                既存の事業に限らず、新しいサービスやプロダクトそのものを企画し、形にします。
              </p>
            </div>

            <div
              class="grid gap-4 border-b border-black/20 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <p class="text-[15px] font-semibold text-black/60">外部向け開発</p>
              <p class="text-[17px] leading-[1.9] text-black/70 sm:text-[18px]">
                必要に応じて、GBC外部の開発や技術支援にも取り組みます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 企画から実装まで一貫して考える開発方針を説明する。 -->
    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            企画から開発まで
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p
            class="max-w-[940px] text-[clamp(2.1rem,4vw,4.2rem)] font-semibold leading-[1.2] tracking-[-0.045em]"
          >
            「どうつくるか」だけではなく、<br class="hidden sm:block" />
            「何をつくるか」から考える。
          </p>

          <div
            class="mt-12 max-w-[820px] space-y-7 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:text-[19px]"
          >
            <p>
              Pandoraは、決められた仕様を実装するだけの開発領域ではありません。何が必要なのか、どんな形なら使いやすいのか、そもそもつくるべきなのか。企画や設計の段階から考えます。
            </p>
            <p>
              Webサービス、アプリ、業務システム、内部ツール、AIを活用した仕組みなど、手段を先に決めるのではなく、目的に必要な技術を選びます。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 外部向け開発の位置づけを説明する。 -->
    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            外部向けの開発
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p
            class="max-w-[940px] text-[clamp(2.1rem,4vw,4.2rem)] font-semibold leading-[1.2] tracking-[-0.045em]"
          >
            受託を中心にはしない。<br class="hidden sm:block" />
            でも、必要なら技術を届ける。
          </p>

          <div
            class="mt-12 max-w-[820px] space-y-7 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:text-[19px]"
          >
            <p>
              Pandoraの中心は、GBC自身のサービスやプロダクトを生み出すことです。外部から依頼された開発を受け続けることを、事業の前提にはしていません。
            </p>
            <p>
              一方で、GBCの技術や経験を活かせる開発・技術支援については、内容に応じて取り組む可能性があります。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pandoraが持つ開発力の意味をメッセージとして締める。 -->
    <section
      class="px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
    >
      <div class="mx-auto w-full max-w-[1600px]">
        <div class="mx-auto max-w-[1180px] text-center">
          <p
            class="text-[clamp(2.4rem,5vw,5.2rem)] font-semibold leading-[1.2] tracking-[-0.05em]"
          >
            誰かにつくってもらう前に、<br class="hidden sm:block" />
            自分でつくれる力を持つ。
          </p>

          <p
            class="mx-auto mt-10 max-w-[800px] text-[17px] leading-[2] text-black/64 sm:text-[18px]"
          >
            GBCが必要とするものを、自分で考え、自分でつくる。その積み重ねから、新しいサービスや仕組みを生み出していきます。
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
