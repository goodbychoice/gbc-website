<template>
  <section
    id="about"
    class="scroll-mt-24 border-t-2 border-brand-ink/20 bg-brand-surface px-5 py-28 text-brand-ink sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
  >
    <div class="mx-auto w-full max-w-brand">
      <div class="grid grid-cols-12 gap-y-12 md:gap-y-0">
        <div class="col-span-12 md:col-span-4">
          <div class="max-w-[280px]">
            <h2
              class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
            >
              GBCについて
            </h2>
            <div class="mt-5 h-[3px] w-24 bg-brand-ink" />
          </div>
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-13">
          <p
            class="max-w-[980px] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.15] tracking-[-0.045em]"
          >
            個人が、自分の選択で<br class="hidden sm:block" />
            生きられる社会へ。
          </p>

          <div
            class="mt-12 max-w-[760px] space-y-7 text-[17px] leading-[2] text-brand-ink/68 sm:text-[18px] md:mt-14 md:text-[19px]"
          >
            <p>
              GBCは、会社や組織に依存せず、個人が自分の選択で自由に生きていくためのプラットフォームです。
            </p>

            <p>
              誰かに決められた道ではなく、自分で考え、自分で選ぶ。自分の好きなことや得意なことを、自分自身の力で価値に変えていく。
            </p>

            <p>
              そのために必要な学び、仕組み、技術、機会を、必要なときに選んで使えるようにする。
            </p>

            <p>
              GBCは、個人が自分の力で生きていくための選択肢をつくります。
            </p>
          </div>

          <NuxtLink
            to="/about"
            class="group mt-10 inline-flex items-center gap-4 border-b border-brand-ink/30 pb-2 text-[15px] font-semibold transition-colors hover:border-brand-ink sm:text-[16px]"
          >
            <span>GBCについて詳しく見る</span>
            <span
              aria-hidden="true"
              class="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
