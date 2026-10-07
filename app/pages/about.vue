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
  <main class="bg-[#f4f1ea] text-[#111317]">
    <!-- ページタイトルとGBCが目指す社会を最初に伝える。 -->
    <section
      class="border-b-2 border-black/20 px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
    >
      <div class="mx-auto w-full max-w-[1600px]">
        <p
          class="text-[15px] font-semibold tracking-[0.04em] text-black/60 sm:text-[16px]"
        >
          GBCについて
        </p>

        <h1
          class="mt-8 max-w-[1240px] text-[clamp(3rem,7vw,7rem)] font-semibold leading-[1.08] tracking-[-0.055em]"
        >
          会社に縛られず、<br class="hidden sm:block" />
          個人が自由に生きる社会へ。
        </h1>

        <p
          class="mt-12 max-w-[860px] text-[18px] leading-[2] text-black/68 sm:text-[19px] md:mt-14 md:text-[21px]"
        >
          GBCが目指すのは、会社労働に依存しなくても、個人が自分の力で学び、創り、働き、自由に生きていける社会です。
        </p>
      </div>
    </section>

    <!-- GBCの役割と提供する価値を説明する。 -->
    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            GBCとは
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <p
            class="max-w-[900px] text-[clamp(2.2rem,4.3vw,4.5rem)] font-semibold leading-[1.2] tracking-[-0.045em]"
          >
            会社や組織に依存せず、<br class="hidden sm:block" />
            自分の選択で自由に生きていくために。
          </p>

          <div
            class="mt-12 max-w-[820px] space-y-8 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:mt-14 md:text-[19px]"
          >
            <p>
              GBCは、会社や組織に依存せず、個人が自分の選択で自由に生きていくためのプラットフォームです。
            </p>
            <p>
              誰かが用意した一つの正解に合わせるのではなく、自分で考え、自分で選ぶ。その選択を現実の行動につなげるために、学び、仕組み、技術、機会を必要なときに使える状態をつくります。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- GBCをつくる背景と問題意識を説明する。 -->
    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-4">
          <h2
            class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
          >
            なぜ、GBCをつくるのか
          </h2>
          <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-12">
          <div
            class="space-y-8 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:text-[19px]"
          >
            <p>
              個人が生み出した価値が、その人自身の自由や豊かさにつながるとは限りません。働き方や活動の仕方によっては、自分で生み出した価値であっても、自分自身では十分に選択できないことがあります。
            </p>
            <p>
              GBCは、個人が誰かに管理され、価値を一方的に搾取されることなく、自分の意思で学び、創り、働き、稼ぎ、生きていける状態を増やしたいと考えています。
            </p>
            <p>
              そのために必要なのは、新しい所属先をつくることではありません。個人が自分で判断し、自分で進めるようになるための選択肢と、それを実行できる仕組みを増やすことだと考えています。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 支援する一方で本人の意思決定を尊重する考え方を示す。 -->
    <section
      class="border-b border-black/20 px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto w-full max-w-[1600px]">
        <div
          class="grid grid-cols-12 gap-y-12 border-y border-black/20 py-12 md:py-16"
        >
          <div class="col-span-12 md:col-span-4">
            <h2
              class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
            >
              支える。<br />
              でも、決めない。
            </h2>
          </div>

          <div class="col-span-12 md:col-start-5 md:col-end-12">
            <div
              class="space-y-7 text-[17px] leading-[2.05] text-black/68 sm:text-[18px] md:text-[19px]"
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
        </div>
      </div>
    </section>

    <!-- GBCが最終的に増やしたい状態をメッセージとして締める。 -->
    <section
      class="px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
    >
      <div class="mx-auto flex w-full max-w-[1600px] justify-center text-center">
        <p
          class="max-w-[1240px] text-[clamp(2.4rem,5vw,5.2rem)] font-semibold leading-[1.22] tracking-[-0.045em]"
        >
          GBCが増やしたいのは、<br class="hidden sm:block" />
          GBCに依存する人ではありません。<br />
          自分の人生を、自分で選べる人です。
        </p>
      </div>
    </section>
  </main>
</template>
