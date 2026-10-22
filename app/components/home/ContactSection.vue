<template>
  <section id="contact" class="scroll-mt-24 bg-brand-surface text-brand-ink">
    <div class="mx-auto w-full max-w-brand px-5 py-28 sm:px-8 md:py-40 lg:px-12 lg:py-52 xl:px-16">
      <div class="grid grid-cols-12 gap-x-6">
        <SectionHeading class="col-span-12">お問い合わせ</SectionHeading>

        <!-- スマートフォンでは1行に収まらないため、文節で4行に折り返す。 -->
        <!-- 「自」と「そ」は字形の左の余白が大きく、行頭で引っ込んで見えるため、負のマージンで見た目の左端をそろえる。 -->
        <p v-reveal class="col-span-12 mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
          <span class="-ml-[0.14em]">自分の力で</span><br class="md:hidden" />始めたい。<br /><span class="-ml-[0.15em]">そのために</span><br class="md:hidden" />GBCが必要なら。
        </p>

        <p
          v-reveal
          class="col-span-12 mt-12 max-w-lg text-body text-pretty text-brand-ink/72 delay-150 md:col-start-7 md:col-end-13 md:mt-16"
        >
          ご相談やご依頼については、お問い合わせフォームまたはメールからご連絡ください。
        </p>
      </div>

      <!-- お問い合わせページへの導線の下に、メールアドレスを添える。 -->
      <div v-reveal class="mt-20 md:mt-28">
        <ContactLink />

        <p class="mt-8 text-base tracking-[0.06em] text-brand-ink/60">
          メール：<a
            href="mailto:info@goodbychoice.co.jp"
            class="text-brand-ink underline decoration-brand-ink/25 underline-offset-[6px] transition-colors duration-700 ease-brand hover:decoration-brand-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink"
          >info@goodbychoice.co.jp</a>
        </p>
      </div>
    </div>
  </section>
</template>
