<script setup lang="ts">
// 利用規約ページの検索結果・SNS共有向け情報を設定する。
useSeoMeta({
  title: "利用規約 | GBC",
  description: "GBC合同会社が運営するWebサイトの利用条件について定めた利用規約です。",
  ogTitle: "利用規約 | GBC",
  ogDescription: "GBC合同会社が運営するWebサイトの利用条件について定めた利用規約です。",
  twitterTitle: "利用規約 | GBC",
  twitterDescription: "GBC合同会社が運営するWebサイトの利用条件について定めた利用規約です。",
});
</script>

<template>
  <main class="bg-[#f4f1ea] text-[#111317]">
    <!-- ページタイトルと規約の概要を表示する。 -->
    <section
      class="border-b-2 border-black/20 px-5 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-44 xl:px-16"
    >
      <div class="mx-auto w-full max-w-[1600px]">
        <p
          class="text-[15px] font-semibold tracking-[0.04em] text-black/60 sm:text-[16px]"
        >
          GBC合同会社
        </p>

        <h1
          class="mt-8 text-[clamp(3rem,7vw,7rem)] font-semibold leading-[1.05] tracking-[-0.055em]"
        >
          利用規約
        </h1>

        <p
          class="mt-10 max-w-[900px] text-[18px] leading-[2] text-black/68 sm:text-[19px] md:text-[21px]"
        >
          この利用規約は、GBC合同会社（以下「当社」といいます。）が運営するWebサイトの利用について、必要なルールを定めるものです。
        </p>
      </div>
    </section>

    <!-- 利用規約の各条項を表示する。 -->
    <section
      class="px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-3">
          <p class="text-[14px] font-semibold tracking-[0.03em] text-black/60">
            Webサイトの利用について
          </p>
        </div>

        <div class="col-span-12 md:col-start-4 md:col-end-12">
          <div class="space-y-16 md:space-y-20">
            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                1. 適用範囲
              </h2>
              <div
                class="mt-6 space-y-4 text-[16px] leading-[2] text-black/68 sm:text-[17px]"
              >
                <p>本規約は、当社が運営するWebサイトの閲覧・利用に適用されます。</p>
                <p>
                  Simple Study、フェンリル、華の騎士団、Pandoraその他の個別サービスについて別途利用条件や規約を定めた場合は、その内容が優先して適用されます。
                </p>
              </div>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                2. 掲載情報について
              </h2>
              <div
                class="mt-6 space-y-4 text-[16px] leading-[2] text-black/68 sm:text-[17px]"
              >
                <p>
                  当社は、掲載する情報について、できる限り正確で分かりやすい内容となるよう努めます。
                </p>
                <p>
                  事業・サービスの内容、料金、提供方法その他の情報は、検討中のものを含め、変更・追加・削除される場合があります。正式な契約条件は、実際にサービスを利用する際に提示する内容をご確認ください。
                </p>
              </div>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                3. 禁止事項
              </h2>
              <div
                class="mt-6 space-y-4 text-[16px] leading-[2] text-black/68 sm:text-[17px]"
              >
                <p>本サイトの利用にあたり、以下の行為を禁止します。</p>
                <ul class="list-disc space-y-2 pl-6">
                  <li>法令または公序良俗に反する行為</li>
                  <li>当社または第三者の権利・利益を侵害する行為</li>
                  <li>
                    不正アクセス、改ざん、過度な負荷をかける行為など、本サイトの運営を妨げる行為
                  </li>
                  <li>
                    虚偽の情報を用いた問い合わせ、なりすましその他不正な目的での利用
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                4. 著作権・知的財産権
              </h2>
              <p
                class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]"
              >
                本サイトに掲載する文章、画像、ロゴ、デザインその他のコンテンツに関する権利は、当社または正当な権利を有する第三者に帰属します。法令で認められる範囲を超えて、無断で複製、転載、改変、配布等を行うことはできません。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                5. 外部サイト・外部サービス
              </h2>
              <p
                class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]"
              >
                本サイトから外部のWebサイトやサービスへ移動する場合があります。外部サイトやサービスの内容、安全性、利用条件等については、それぞれの運営者が定める内容をご確認ください。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                6. 本サイトの変更・停止
              </h2>
              <p
                class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]"
              >
                当社は、保守、システム障害、災害その他必要な事情がある場合、本サイトの全部または一部を変更・停止することがあります。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                7. 当社の責任
              </h2>
              <div
                class="mt-6 space-y-4 text-[16px] leading-[2] text-black/68 sm:text-[17px]"
              >
                <p>
                  当社は、本サイトの利用に関連して損害が生じた場合、法令に従って責任を負います。
                </p>
                <p>
                  当社の責任によらない通信障害、利用者の利用環境、外部サイト・外部サービス等に起因する損害については、当社が法令上責任を負う場合を除き、責任を負いません。
                </p>
              </div>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                8. 個人情報の取り扱い
              </h2>
              <p
                class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]"
              >
                個人情報の取り扱いについては、
                <NuxtLink
                  to="/privacy"
                  class="border-b border-black/30 text-black/78 transition-colors hover:border-black hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  プライバシーポリシー
                </NuxtLink>
                をご確認ください。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                9. 本規約の変更
              </h2>
              <p
                class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]"
              >
                当社は、法令の改正、本サイトやサービス内容の変更その他必要に応じて、本規約を変更することがあります。変更する場合は、変更内容と効力発生日を本サイト上でお知らせするなど、適切な方法で周知します。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                10. 準拠法・裁判管轄
              </h2>
              <p
                class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]"
              >
                本規約は日本法に準拠します。本サイトの利用に関して紛争が生じ、当事者間で解決できない場合は、法令により認められる範囲で、当社の本店所在地を管轄する裁判所を第一審の管轄裁判所とします。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                11. お問い合わせ
              </h2>
              <div
                class="mt-6 border-y border-black/20 py-7 text-[16px] leading-[2] text-black/68 sm:text-[17px]"
              >
                <p class="font-semibold text-[#111317]">GBC合同会社</p>
                <p class="mt-2">
                  メール：
                  <a
                    href="mailto:info@goodbychoice.co.jp"
                    class="border-b border-black/30 transition-colors hover:border-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    info@goodbychoice.co.jp
                  </a>
                </p>
              </div>
            </section>

            <div
              class="border-t border-black/20 pt-8 text-[14px] leading-[1.9] text-black/60"
            >
              <p>制定日：2026年9月22日</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
