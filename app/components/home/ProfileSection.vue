<template>
  <section id="profile" class="scroll-mt-24 bg-brand-surface text-brand-ink">
    <div class="mx-auto w-full max-w-brand px-5 py-28 sm:px-8 md:py-40 lg:px-12 lg:py-52 xl:px-16">
      <SectionHeading>代表</SectionHeading>

      <!-- 代表の言葉を手紙のように右寄りに置き、名前は最後に署名として添える。 -->
      <div class="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
        <div class="col-span-12 md:col-start-6 md:col-end-13 lg:col-start-7">
          <div v-reveal class="max-w-lg space-y-7 text-body text-pretty text-brand-ink/72">
            <p>
              現役ITエンジニア・ITコンサルとして開発や技術支援に携わる中で、組織に依存しなくても、個人が自分の力で学び、創り、生きていける社会をつくりたいと考え、GBCを設立しました。
            </p>
            <p>
              GBCでは、個人を管理するのではなく、一人ひとりが自立して活動していくための仕組みや支援をつくっています。
            </p>
            <p>
              誰かに決められた生き方ではなく、自分で選び、自分の力で進んでいける。その選択肢を、現実のものとして増やしていきます。
            </p>
          </div>

          <!-- 署名は本文の右端にそろえる。字間は最後の字の後ろにも付くため、その分を負の右余白で戻す。 -->
          <div v-reveal class="mt-16 max-w-lg text-right delay-150 md:mt-20">
            <p class="-mr-[0.12em] text-sm font-medium tracking-[0.12em] text-brand-ink/60">代表 / CEO</p>
            <p class="mt-3 -mr-[0.2em] font-serif text-lead tracking-[0.2em]">雨宮 澪</p>
            <p class="mt-1 -mr-[0.28em] text-sm font-medium tracking-[0.28em] text-brand-ink/60">AMEMIYA REI</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
