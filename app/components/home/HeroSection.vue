<template>
  <section class="bg-brand-surface text-brand-ink">
    <div
      class="mx-auto grid min-h-[calc(100svh-76px)] w-full max-w-brand grid-cols-12 grid-rows-[1fr_auto] px-5 pt-[10svh] pb-10 sm:px-8 lg:px-12 lg:pb-14 xl:px-16"
    >
      <!-- 公式キャッチコピーを明朝体の縦組みで右に置き、左側に大きな余白を残す。 -->
      <h1
        class="col-span-full row-span-full mr-[6vw] justify-self-end font-serif text-[clamp(3.25rem,min(8.8svh,15vw),8.5rem)]/[1.8] tracking-[0.16em] whitespace-nowrap [writing-mode:vertical-rl] lg:col-start-7 lg:col-end-12 lg:mr-0"
      >
        <span class="block animate-ink motion-reduce:animate-none [animation-delay:200ms]">選んで生きる、</span>
        <!-- 2行目を1字下げて、行末の「、」と「。」を同じ高さにそろえる。縦組みでは pt が字下げになる。 -->
        <span class="block pt-[1.16em] animate-ink motion-reduce:animate-none [animation-delay:550ms]">個の時代へ<span class="text-brand-accent">。</span></span>
      </h1>

      <!-- 英文コピーを左下に置き、縦組みのコピーと対角で釣り合わせる。 -->
      <p
        class="col-span-full row-start-2 flex items-center gap-5 self-end justify-self-start font-serif text-[clamp(1.125rem,1.5vw,1.5rem)] tracking-[0.06em] text-brand-ink/80 animate-rise motion-reduce:animate-none [animation-delay:1.5s]"
      >
        <span class="h-px w-12 bg-brand-ink/30" />
        Your Life, Your Choice.
      </p>
    </div>
  </section>
</template>
