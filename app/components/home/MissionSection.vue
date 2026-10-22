<template>
  <section id="mission" class="scroll-mt-24 bg-brand-ink text-brand-surface">
    <div class="mx-auto w-full max-w-brand px-5 py-28 sm:px-8 md:py-40 lg:px-12 lg:py-52 xl:px-16">
      <SectionHeading dark>私たちが目指すもの</SectionHeading>

      <!-- スマートフォンでは2行目が収まらないため、文節で折り返す。 -->
      <!-- 「自」は字形の左の余白が大きく、行頭で引っ込んで見えるため、その行だけ負のマージンで見た目の左端をそろえる。 -->
      <p v-reveal class="mt-14 font-serif text-lead font-features-['palt'] md:mt-20">
        一人ひとりが、<br /><span class="-ml-[0.14em]">自分の選択で</span><br class="md:hidden" />活躍できる<br />社会をつくる。
      </p>

      <!-- 本文は内容の切れ目で2段に分け、左に現状と課題、右に目指す姿を置く。1行の字数が足りない幅では1段で続けて読む。 -->
      <div class="mt-16 grid grid-cols-12 gap-x-6 gap-y-7 text-body lg:text-body-desktop text-pretty text-brand-surface/85 md:mt-24 xl:gap-y-0">
        <div v-reveal class="col-span-12 max-w-lg space-y-7 xl:col-span-5">
          <p>
            今の社会では、個人が生み出した価値が、必ずしもその人自身の自由や豊かさにつながるとは限りません。
          </p>
          <p>
            組織や既存の仕組みに依存しなければ生きていけない。自分でつくった価値であっても、自分自身が十分に選択できない。GBCは、そうした社会のあり方を変えていきたいと考えています。
          </p>
        </div>

        <div v-reveal class="col-span-12 max-w-lg space-y-7 delay-150 xl:col-start-7 xl:col-end-13">
          <p>
            個人が誰かに管理され、価値を一方的に搾取されることなく、自分の意思で学び、創り、働き、稼ぎ、生きていく。
          </p>
          <p>
            必要な支援を必要なときに受けられる。けれど、その支援に依存する必要はない。
          </p>
          <p>
            自分の人生を、自分で選べる個人を増やしていく。その先に、個人が自由に生きていける新しい社会をつくります。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
