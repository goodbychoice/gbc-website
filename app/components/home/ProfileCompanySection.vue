<script setup lang="ts">
const companyItems = [
  {
    label: "名称",
    value: "GBC合同会社",
  },
  {
    label: "対外表記",
    value: "GBC（Good By Choice）",
  },
  {
    label: "設立",
    value: "2026年2月",
  },
  {
    label: "所在地",
    value: "〒220-0004 神奈川県横浜市西区北幸2-10-48 むつみビル3階",
  },
  {
    label: "電話番号",
    value: "045-275-0720",
  },
  {
    label: "事業内容",
    value: "Webサービス開発、IT教育、個人事業主支援、クリエイター支援",
  },
  {
    label: "Web",
    value: "www.goodbychoice.co.jp",
  },
  {
    label: "Mail",
    value: "info@goodbychoice.co.jp",
  },
];
</script>

<template>
  <div>
    <section
      id="company"
      class="scroll-mt-24 border-t-2 border-black/20 bg-[#f4f1ea] px-5 py-28 text-[#111317] sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
    >
      <div class="mx-auto w-full max-w-[1600px]">
        <div class="grid grid-cols-12 gap-y-12 md:gap-y-0">
          <div class="col-span-12 md:col-span-4">
            <div class="max-w-[280px]">
              <h2
                class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
              >
                会社情報
              </h2>
              <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
            </div>
          </div>

          <div class="col-span-12 md:col-start-5 md:col-end-13">
            <p
              class="max-w-[900px] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.15] tracking-[-0.045em]"
            >
              GBC合同会社
            </p>

            <p
              class="mt-5 text-[17px] leading-[1.9] text-black/54 sm:text-[18px]"
            >
              Good By Choice
            </p>

            <dl class="mt-14 border-t border-black/20 md:mt-16">
              <div
                v-for="item in companyItems"
                :key="item.label"
                class="grid gap-3 border-b border-black/16 py-6 sm:grid-cols-[180px_1fr] sm:gap-8 md:py-7"
              >
                <dt
                  class="text-[14px] font-semibold tracking-[0.03em] text-black/60 sm:text-[15px]"
                >
                  {{ item.label }}
                </dt>
                <dd
                  class="text-[16px] leading-[1.8] text-black/78 sm:text-[17px]"
                >
                  {{ item.value }}
                </dd>
              </div>
            </dl>

          </div>
        </div>
      </div>
    </section>

    <section
      id="profile"
      class="scroll-mt-24 border-t-2 border-black/20 bg-[#f4f1ea] px-5 py-28 text-[#111317] sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
    >
      <div class="mx-auto w-full max-w-[1600px]">
        <div class="grid grid-cols-12 gap-y-12 md:gap-y-0">
          <div class="col-span-12 md:col-span-4">
            <div class="max-w-[280px]">
              <h2
                class="text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-tight tracking-[-0.04em]"
              >
                代表
              </h2>
              <div class="mt-5 h-[3px] w-24 bg-[#111317]" />
            </div>
          </div>

          <div class="col-span-12 md:col-start-5 md:col-end-13">
            <div class="border-b border-black/20 pb-10 md:pb-12">
              <p
                class="text-[clamp(2.7rem,5vw,5.2rem)] font-semibold leading-none tracking-[-0.05em]"
              >
                雨宮 澪
              </p>
              <p
                class="mt-4 text-[14px] font-semibold tracking-[0.14em] text-black/60 sm:text-[15px]"
              >
                AMEMIYA REI
              </p>
              <p
                class="mt-3 text-[15px] font-medium tracking-[0.06em] text-black/60 sm:text-[16px]"
              >
                代表 / CEO
              </p>
            </div>

            <div
              class="mt-12 max-w-[800px] space-y-7 text-[17px] leading-[2] text-black/68 sm:text-[18px] md:mt-14 md:text-[19px]"
            >
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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
