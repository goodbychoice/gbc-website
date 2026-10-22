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
  <main>
    <!-- 最初の画面：「GBCについて」と同じく、題を左に組み、説明を右下へずらす。読むためのページなので、題は特大にせずリードの大きさに抑える。 -->
    <section>
      <div class="mx-auto w-full max-w-brand px-5 pt-16 pb-28 sm:px-8 md:pt-20 md:pb-40 lg:px-12 lg:pt-24 lg:pb-52 xl:px-16">
        <SectionLabel class="animate-rise motion-reduce:animate-none">GBC合同会社</SectionLabel>

        <h1
          class="mt-10 font-serif text-lead font-features-['palt'] animate-rise motion-reduce:animate-none [animation-delay:150ms] md:mt-14"
        >
          利用規約
        </h1>

        <div class="mt-16 grid grid-cols-12 gap-x-6 md:mt-24">
          <p
            class="col-span-12 max-w-lg text-lg/9 lg:text-xl/10 text-pretty text-brand-ink/85 animate-rise motion-reduce:animate-none [animation-delay:400ms] md:col-start-7 md:col-end-13"
          >
            この利用規約は、GBC合同会社（以下「当社」といいます。）が運営するWebサイトの利用について、必要なルールを定めるものです。
          </p>
        </div>
      </div>
    </section>

    <!-- 条文：条ごとに罫線で区切り、左に条の見出し、右に本文を置く。 -->
    <PageSection heading="Webサイトの利用について">
      <div class="mt-6 md:mt-10">
        <LegalArticle title="1. 適用範囲">
          <p>本規約は、当社が運営するWebサイトの閲覧・利用に適用されます。</p>
          <p>
            Simple Study、フェンリル、華の騎士団、Pandoraその他の個別サービスについて別途利用条件や規約を定めた場合は、その内容が優先して適用されます。
          </p>
        </LegalArticle>

        <LegalArticle title="2. 掲載情報について">
          <p>
            当社は、掲載する情報について、できる限り正確で分かりやすい内容となるよう努めます。
          </p>
          <p>
            事業・サービスの内容、料金、提供方法その他の情報は、検討中のものを含め、変更・追加・削除される場合があります。正式な契約条件は、実際にサービスを利用する際に提示する内容をご確認ください。
          </p>
        </LegalArticle>

        <LegalArticle title="3. 禁止事項">
          <p>本サイトの利用にあたり、以下の行為を禁止します。</p>
          <!-- 項目は文節で折り返し、語尾だけが次の行に落ちないようにする。 -->
          <ul class="list-disc space-y-2 pl-[1.25em] marker:text-brand-ink/40 [word-break:auto-phrase]">
            <li>法令または公序良俗に反する行為</li>
            <li>当社または第三者の権利・利益を侵害する行為</li>
            <li>不正アクセス、改ざん、過度な負荷をかける行為など、本サイトの運営を妨げる行為</li>
            <li>虚偽の情報を用いた問い合わせ、なりすましその他不正な目的での利用</li>
          </ul>
        </LegalArticle>

        <LegalArticle title="4. 著作権・知的財産権">
          <p>
            本サイトに掲載する文章、画像、ロゴ、デザインその他のコンテンツに関する権利は、当社または正当な権利を有する第三者に帰属します。法令で認められる範囲を超えて、無断で複製、転載、改変、配布等を行うことはできません。
          </p>
        </LegalArticle>

        <LegalArticle title="5. 外部サイト・外部サービス">
          <p>
            本サイトから外部のWebサイトやサービスへ移動する場合があります。外部サイトやサービスの内容、安全性、利用条件等については、それぞれの運営者が定める内容をご確認ください。
          </p>
        </LegalArticle>

        <LegalArticle title="6. 本サイトの変更・停止">
          <p>
            当社は、保守、システム障害、災害その他必要な事情がある場合、本サイトの全部または一部を変更・停止することがあります。
          </p>
        </LegalArticle>

        <LegalArticle title="7. 当社の責任">
          <p>当社は、本サイトの利用に関連して損害が生じた場合、法令に従って責任を負います。</p>
          <p>
            当社の責任によらない通信障害、利用者の利用環境、外部サイト・外部サービス等に起因する損害については、当社が法令上責任を負う場合を除き、責任を負いません。
          </p>
        </LegalArticle>

        <LegalArticle title="8. 個人情報の取り扱い">
          <p>
            個人情報の取り扱いについては、<NuxtLink
              to="/privacy"
              class="text-brand-ink underline decoration-brand-ink/25 underline-offset-[6px] transition-colors duration-700 ease-brand hover:decoration-brand-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink"
            >プライバシーポリシー</NuxtLink>をご確認ください。
          </p>
        </LegalArticle>

        <LegalArticle title="9. 本規約の変更">
          <p>
            当社は、法令の改正、本サイトやサービス内容の変更その他必要に応じて、本規約を変更することがあります。変更する場合は、変更内容と効力発生日を本サイト上でお知らせするなど、適切な方法で周知します。
          </p>
        </LegalArticle>

        <LegalArticle title="10. 準拠法・裁判管轄">
          <p>
            本規約は日本法に準拠します。本サイトの利用に関して紛争が生じ、当事者間で解決できない場合は、法令により認められる範囲で、当社の本店所在地を管轄する裁判所を第一審の管轄裁判所とします。
          </p>
        </LegalArticle>

        <LegalArticle title="11. お問い合わせ">
          <address class="not-italic">
            <p class="text-brand-ink">GBC合同会社</p>
            <p>
              メール：<a
                href="mailto:info@goodbychoice.co.jp"
                class="text-brand-ink underline decoration-brand-ink/25 underline-offset-[6px] transition-colors duration-700 ease-brand hover:decoration-brand-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink"
              >info@goodbychoice.co.jp</a>
            </p>
          </address>
        </LegalArticle>
      </div>

      <div class="grid grid-cols-12 gap-x-6">
        <p class="col-span-12 mt-12 text-base tracking-[0.06em] text-brand-ink/75 md:col-start-7 md:col-end-13 md:mt-16">
          制定日：2026年9月22日
        </p>
      </div>
    </PageSection>
  </main>
</template>
