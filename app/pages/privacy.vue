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
</script>

<template>
  <main class="bg-[#f4f1ea] text-[#111317]">
    <!-- ページタイトルとポリシーの概要を表示する。 -->
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
          プライバシーポリシー
        </h1>

        <p
          class="mt-10 max-w-[900px] text-[18px] leading-[2] text-black/68 sm:text-[19px] md:text-[21px]"
        >
          GBC合同会社（以下「当社」といいます。）は、当社が運営するWebサイトおよび各サービスにおいて取り扱う個人情報について、以下のとおりプライバシーポリシーを定めます。
        </p>
      </div>
    </section>

    <!-- 個人情報の取り扱いに関する各項目を表示する。 -->
    <section
      class="px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16"
    >
      <div class="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12">
        <div class="col-span-12 md:col-span-3">
          <p class="text-[14px] font-semibold tracking-[0.03em] text-black/60">
            個人情報の取り扱い
          </p>
        </div>

        <div class="col-span-12 md:col-start-4 md:col-end-12">
          <div class="space-y-16 md:space-y-20">
            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                1. 取得する情報
              </h2>
              <p class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]">
                当社は、お問い合わせや各サービスの利用等に際して、氏名、メールアドレス、お問い合わせ種別、お問い合わせ内容その他利用者が当社に提供する情報を取得する場合があります。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                2. 利用目的
              </h2>
              <div class="mt-6 space-y-4 text-[16px] leading-[2] text-black/68 sm:text-[17px]">
                <p>取得した情報は、主に以下の目的で利用します。</p>
                <ul class="list-disc space-y-2 pl-6">
                  <li>お問い合わせ、ご相談、ご依頼への対応</li>
                  <li>当社サービスの提供、案内、連絡および運営</li>
                  <li>本人確認や不正利用防止など、安全なサービス提供のため</li>
                  <li>サービスやWebサイトの改善、品質向上のため</li>
                  <li>法令等に基づく対応のため</li>
                </ul>
              </div>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                3. 第三者提供
              </h2>
              <p class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]">
                当社は、法令に基づく場合その他法令上認められる場合を除き、本人の同意なく個人情報を第三者に提供しません。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                4. 外部サービスへの委託
              </h2>
              <p class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]">
                当社は、サービスの運営、メール送信、システム管理その他必要な業務のため、個人情報の取り扱いを外部事業者に委託する場合があります。その場合、委託先を適切に選定し、必要な管理を行います。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                5. 安全管理
              </h2>
              <p class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]">
                当社は、個人情報への不正アクセス、漏えい、滅失または毀損等を防止するため、取扱状況に応じて、アクセス権限の制限、アカウントの適切な管理、委託先の選定・確認など、必要かつ適切な安全管理措置を講じます。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                6. 開示・訂正・削除等
              </h2>
              <p class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]">
                当社が保有するご自身の個人情報について、開示、訂正、利用停止、削除等をご希望の場合は、下記お問い合わせ窓口までメールでご連絡ください。本人確認を行ったうえで、法令に従い適切に対応します。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                7. Cookie・アクセス解析等
              </h2>
              <div class="mt-6 space-y-4 text-[16px] leading-[2] text-black/68 sm:text-[17px]">
                <p>
                  当社Webサイトでは、サイトの機能提供や利便性向上のために、Cookie等の技術を利用する場合があります。
                </p>
                <p>
                  アクセス解析などの外部サービスを導入する場合は、取得する情報や利用目的を確認し、必要に応じて本ポリシー等でお知らせします。
                </p>
              </div>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                8. プライバシーポリシーの変更
              </h2>
              <p class="mt-6 text-[16px] leading-[2] text-black/68 sm:text-[17px]">
                当社は、法令の改正、サービス内容の変更その他必要に応じて、本ポリシーを変更することがあります。重要な変更がある場合は、当社Webサイト上でお知らせします。
              </p>
            </section>

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                9. お問い合わせ窓口
              </h2>
              <div class="mt-6 border-y border-black/20 py-7 text-[16px] leading-[2] text-black/68 sm:text-[17px]">
                <p class="font-semibold text-[#111317]">GBC合同会社</p>
                <p class="mt-2">
                  〒220-0004 神奈川県横浜市西区北幸2-10-48 むつみビル3階
                </p>
                <p>
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

            <section>
              <h2
                class="text-[clamp(1.7rem,2.4vw,2.5rem)] font-semibold tracking-[-0.035em]"
              >
                10. 事業者情報
              </h2>
              <dl class="mt-6 border-y border-black/20 text-[16px] leading-[2] text-black/68 sm:text-[17px]">
                <div class="grid gap-1 border-b border-black/15 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt class="font-semibold text-black/60">事業者名</dt>
                  <dd>GBC合同会社</dd>
                </div>
                <div class="grid gap-1 border-b border-black/15 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt class="font-semibold text-black/60">代表者</dt>
                  <dd>雨宮 澪</dd>
                </div>
                <div class="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt class="font-semibold text-black/60">所在地</dt>
                  <dd>
                    〒220-0004 神奈川県横浜市西区北幸2-10-48 むつみビル3階
                  </dd>
                </div>
              </dl>
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
