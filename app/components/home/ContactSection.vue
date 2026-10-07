<template>
  <section
    id="contact"
    class="scroll-mt-24 border-t-2 border-black/20 bg-[#f4f1ea] px-5 py-28 text-[#111317] sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
  >
    <div class="mx-auto w-full max-w-[1600px]">
      <div class="grid grid-cols-12 gap-y-12 md:gap-y-0">
        <div class="col-span-12 md:col-span-4">
          <div class="max-w-[280px]">
            <h2
              class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
            >
              お問い合わせ
            </h2>
            <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
          </div>
        </div>

        <div class="col-span-12 md:col-start-5 md:col-end-13">
          <p
            class="max-w-[980px] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.15] tracking-[-0.045em]"
          >
            自分の力で始めたい。<br class="hidden sm:block" />
            そのためにGBCが必要なら。
          </p>

          <p
            class="mt-12 max-w-[760px] text-[17px] leading-[2] text-black/68 sm:text-[18px] md:mt-14 md:text-[19px]"
          >
            ご相談やご依頼については、お問い合わせページからご連絡ください。現在、フォーム送信機能は準備中のため、メールでのお問い合わせも受け付けています。
          </p>

          <div class="mt-12 border-t border-black/20 md:mt-14">
            <NuxtLink
              to="/contact"
              class="group flex items-center justify-between gap-6 border-b border-black/20 py-7 transition-colors hover:text-black/60 sm:py-8"
            >
              <span
                class="text-[clamp(1.35rem,2.3vw,2.2rem)] font-semibold tracking-[-0.025em]"
              >
                お問い合わせページへ
              </span>

              <span
                aria-hidden="true"
                class="text-[1.8rem] leading-none transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </NuxtLink>
          </div>

          <p
            class="mt-5 text-[13px] leading-[1.8] text-black/60 sm:text-[14px]"
          >
            メール：info@goodbychoice.co.jp
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
