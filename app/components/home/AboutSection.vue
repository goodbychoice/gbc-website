<template>
  <section id="about" class="scroll-mt-24 bg-brand-surface text-brand-ink">
    <div class="mx-auto w-full max-w-brand px-5 py-28 sm:px-8 md:py-40 lg:px-12 lg:py-52 xl:px-16">
      <SectionHeading>GBCについて</SectionHeading>

      <!-- リードを文節ごとの4行で左に立て、本文は1行目のベースラインにそろえて右に並べる。 -->
      <!-- 「自」は字形の左の余白が大きく、行頭で引っ込んで見えるため、その行だけ負のマージンで見た目の左端をそろえる。 -->
      <div class="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20 md:items-baseline">
        <p v-reveal class="col-span-12 font-serif text-lead font-features-['palt'] md:col-span-5">
          個人が、<br /><span class="-ml-[0.14em]">自分の選択で</span><br />生きられる<br />社会へ。
        </p>

        <div v-reveal class="col-span-12 delay-150 md:col-start-6 md:col-end-13 lg:col-start-7">
          <div class="max-w-lg space-y-7 text-body text-pretty text-brand-ink/72">
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

          <ArrowLink to="/about" class="mt-12">GBCについて詳しく見る</ArrowLink>
        </div>
      </div>
    </div>
  </section>
</template>
