<script setup lang="ts">
// プライバシーポリシーページの検索結果・SNS共有向け情報を設定する。
useSeoMeta({
  title: "プライバシーポリシー | GBC",
  description:
    "GBC合同会社における個人情報の取り扱いについて定めたプライバシーポリシーです。",
  ogTitle: "プライバシーポリシー | GBC",
  ogDescription:
    "GBC合同会社における個人情報の取り扱いについて定めたプライバシーポリシーです。",
  twitterTitle: "プライバシーポリシー | GBC",
  twitterDescription:
    "GBC合同会社における個人情報の取り扱いについて定めたプライバシーポリシーです。",
});

// 事業者情報の項目を1か所にまとめ、テンプレート側では同じ構造で描画する。
const operatorItems = [
  { label: "事業者名", value: "GBC合同会社" },
  { label: "代表者", value: "雨宮 澪" },
  { label: "所在地", value: "〒220-0004 神奈川県横浜市西区北幸2-10-48 むつみビル3階" },
];
</script>

<template>
  <main>
    <!-- 最初の画面：「GBCについて」と同じく、題を左に組み、説明を右下へずらす。読むためのページなので、題は特大にせずリードの大きさに抑える。 -->
    <section>
      <div class="mx-auto w-full max-w-brand px-5 pt-16 pb-28 sm:px-8 md:pt-20 md:pb-40 lg:px-12 lg:pt-24 lg:pb-52 xl:px-16">
        <SectionLabel class="animate-rise motion-reduce:animate-none">GBC合同会社</SectionLabel>

        <!-- 「プ」は字形の左の余白が大きく、行頭で引っ込んで見えるため、その行だけ負のマージンで見た目の左端をそろえる。 -->
        <h1
          class="mt-10 font-serif text-lead font-features-['palt'] animate-rise motion-reduce:animate-none [animation-delay:150ms] md:mt-14"
        >
          <span class="-ml-[0.1em]">プライバシー</span><br class="md:hidden" />ポリシー
        </h1>

        <div class="mt-16 grid grid-cols-12 gap-x-6 md:mt-24">
          <p
            class="col-span-12 max-w-lg text-body lg:text-body-desktop text-pretty text-brand-ink/85 animate-rise motion-reduce:animate-none [animation-delay:400ms] md:col-start-7 md:col-end-13"
          >
            GBC合同会社（以下「当社」といいます。）は、当社が運営するWebサイトおよび各サービスにおいて取り扱う個人情報について、以下のとおりプライバシーポリシーを定めます。
          </p>
        </div>
      </div>
    </section>

    <!-- 条文：条ごとに罫線で区切り、左に条の見出し、右に本文を置く。 -->
    <PageSection heading="個人情報の取り扱い">
      <div class="mt-6 md:mt-10">
        <LegalArticle title="1. 取得する情報">
          <p>
            当社は、お問い合わせや各サービスの利用等に際して、氏名、メールアドレス、お問い合わせ種別、お問い合わせ内容その他利用者が当社に提供する情報を取得する場合があります。
          </p>
        </LegalArticle>

        <LegalArticle title="2. 利用目的">
          <p>取得した情報は、主に以下の目的で利用します。</p>
          <!-- 項目は文節で折り返し、「ため」のような語尾だけが次の行に落ちないようにする。 -->
          <ul class="list-disc space-y-2 pl-[1.25em] marker:text-brand-ink/40 [word-break:auto-phrase]">
            <li>お問い合わせ、ご相談、ご依頼への対応</li>
            <li>当社サービスの提供、案内、連絡および運営</li>
            <li>本人確認や不正利用防止など、安全なサービス提供のため</li>
            <li>サービスやWebサイトの改善、品質向上のため</li>
            <li>法令等に基づく対応のため</li>
          </ul>
        </LegalArticle>

        <LegalArticle title="3. 第三者提供">
          <p>
            当社は、法令に基づく場合その他法令上認められる場合を除き、本人の同意なく個人情報を第三者に提供しません。
          </p>
        </LegalArticle>

        <LegalArticle title="4. 外部サービスへの委託">
          <p>
            当社は、サービスの運営、メール送信、システム管理その他必要な業務のため、個人情報の取り扱いを外部事業者に委託する場合があります。その場合、委託先を適切に選定し、必要な管理を行います。
          </p>
        </LegalArticle>

        <LegalArticle title="5. 安全管理">
          <p>
            当社は、個人情報への不正アクセス、漏えい、滅失または毀損等を防止するため、取扱状況に応じて、アクセス権限の制限、アカウントの適切な管理、委託先の選定・確認など、必要かつ適切な安全管理措置を講じます。
          </p>
        </LegalArticle>

        <LegalArticle title="6. 開示・訂正・削除等">
          <p>
            当社が保有するご自身の個人情報について、開示、訂正、利用停止、削除等をご希望の場合は、下記お問い合わせ窓口までメールでご連絡ください。本人確認を行ったうえで、法令に従い適切に対応します。
          </p>
        </LegalArticle>

        <LegalArticle title="7. Cookie・アクセス解析等">
          <p>
            当社Webサイトでは、サイトの機能提供や利便性向上のために、Cookie等の技術を利用する場合があります。
          </p>
          <p>
            アクセス解析などの外部サービスを導入する場合は、取得する情報や利用目的を確認し、必要に応じて本ポリシー等でお知らせします。
          </p>
        </LegalArticle>

        <!-- 見出しが折り返すと「変更」だけが次の行に落ちるため、「プライバシー」と「ポリシー」の間でも折り返せるようにする（&#x200B; は幅のない改行位置）。 -->
        <LegalArticle title="8. プライバシー&#x200B;ポリシーの変更">
          <p>
            当社は、法令の改正、サービス内容の変更その他必要に応じて、本ポリシーを変更することがあります。重要な変更がある場合は、当社Webサイト上でお知らせします。
          </p>
        </LegalArticle>

        <!-- 住所は文節で折り返し、「3階」のような語尾だけが次の行に落ちないようにする。 -->
        <LegalArticle title="9. お問い合わせ窓口">
          <address class="not-italic [word-break:auto-phrase]">
            <p class="text-brand-ink">GBC合同会社</p>
            <p>〒220-0004 神奈川県横浜市西区北幸2-10-48 むつみビル3階</p>
            <p>
              メール：<a
                href="mailto:info@goodbychoice.co.jp"
                class="text-brand-ink underline decoration-brand-ink/25 underline-offset-[6px] transition-colors duration-700 ease-brand hover:decoration-brand-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink"
              >info@goodbychoice.co.jp</a>
            </p>
          </address>
        </LegalArticle>

        <!-- 事業者情報は、会社情報の台帳と同じく項目名と内容を細い罫線で区切る。 -->
        <LegalArticle title="10. 事業者情報">
          <dl class="border-t border-brand-ink/15">
            <div
              v-for="item in operatorItems"
              :key="item.label"
              class="grid items-baseline gap-x-6 gap-y-1 border-b border-brand-ink/15 py-4 sm:grid-cols-[6rem_1fr]"
            >
              <dt class="text-base font-medium tracking-[0.12em] text-brand-ink/75">{{ item.label }}</dt>
              <dd class="[word-break:auto-phrase]">{{ item.value }}</dd>
            </div>
          </dl>
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
