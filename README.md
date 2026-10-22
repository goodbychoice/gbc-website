# GBC Corporate Site

GBC（Good By Choice）のコーポレートサイトです。

## Site

https://www.goodbychoice.co.jp

## Overview

「選んで生きる、個の時代へ。」を掲げ、GBCの思想・事業領域・会社情報・お問い合わせ導線を掲載しています。

## Tech Stack

- Nuxt 4
- Vue 3
- Tailwind CSS v4（`@tailwindcss/vite`）
- Supabase
- Vercel

### Brand theme（Tailwind）

公式の色・書体・最大コンテンツ幅・演出は `app/assets/css/main.css` の `@theme` で定義しています。

- `bg-brand-surface` / `text-brand-surface` … 背景 `#f4f1ea`
- `text-brand-ink` / `border-brand-ink/20` など … 文字・線 `#111317`
- `text-brand-accent` / `bg-brand-accent` … アクセント `#1f3a68`（ヒーローの句点と、ラベル前の短い罫線、見出しの罫線の左端にだけ使う）
- `max-w-brand` … レイアウト最大幅 `1600px`
- `font-serif` … 見出し・キャッチコピー（Shippori Mincho）
- `font-sans`（既定）… 本文・ラベル（Zen Kaku Gothic New）
- `text-display` / `text-lead` / `text-catch` / `text-body` … 文字の役割ごとの大きさ（締めや強調の一文 36〜112px、リード 30〜72px、キャッチコピー 22〜32px、本文 17〜19px）。行送りと字間も含み、変えるときは `leading-*` / `tracking-*` で上書きする（`text-display/none` のように `/` で行送りを付けると字間が外れる）
- `ease-brand` … すべての演出で使う減速カーブ `cubic-bezier(0.16, 1, 0.3, 1)`
- `animate-ink` / `animate-rise` … ヒーローの表示演出。`motion-reduce:animate-none` と一緒に使い、時間差は `[animation-delay:150ms]` のように付ける

色や幅を変えるときは **hex を各 Vue ファイルに書かず、このファイルだけ** 更新してください。

書体は `@nuxt/fonts` でGoogle Fontsから取得し、サイト自身から配信します。使う書体とウェイトは `nuxt.config.ts` の `fonts.families` で指定します。

### 共通部品

- `<SectionHeading>` … セクションの見出し（`h2`）。本文幅いっぱいの細い罫線の下に置き、罫線の左端だけ色を変えて、同じ背景色のセクションが続いても区切りが分かるようにします。黒い背景の上では `dark` を付けます。
- `<SectionLabel>` … 事業の区切りに置く小さなラベル。前に短い罫線を添えます。黒い背景の上では `dark` を付けます。
- `<ArrowLink to="/about">` … 詳細ページへのリンク。文字色は周りから引き継ぐため、明るい背景と黒い背景の両方で使えます。
- `<PageSection heading="料金">` … 下層ページのセクション。本文幅の外枠と `<SectionHeading>` をまとめ、ページ側には中身だけを書きます。黒い帯にするときは `dark` を付け、見出しの言葉そのものを特大で組むときは `heading` を省きます。
- `<ContactLink>` … お問い合わせページへの横幅いっぱいの導線。トップと各事業ページの最後に置きます。`to` と文言を渡すと、メールアドレスへの導線にも使えます（`<ContactLink to="mailto:…">…</ContactLink>`）。
- `<FormField label="お名前" for="name">` … お問い合わせフォームの1行。会社情報の台帳と同じく、左に項目名、5列目から入力欄を置いて細い罫線で区切ります。入力中は下の罫線を左から濃く引きます。
- `<LegalArticle title="1. 取得する情報">` … プライバシーポリシーと利用規約の1条。左に条の見出し、7列目から本文を置き、条ごとに細い罫線で区切ります。

黒い帯のセクションは `bg-brand-ink text-brand-surface` で組み、見出しは `<SectionHeading dark>`、ラベルは `<SectionLabel dark>`、本文は `text-brand-surface/72` にします。黒は強調したい帯と、ページを締めるフッターだけに使います。帯はトップでは「私たちが目指すもの」と Pandora、下層ページでは1ページに1つまでにし、フッターと続いて見えないよう最後のセクションには使いません。

### レイアウトと組版

- セクションは12列のグリッド（`grid grid-cols-12 gap-x-6`）で組み、本文は7列目、索引や台帳の値は5列目から始めます。
- 列の開始を指定するときは終わりも指定します（`md:col-start-5 md:col-end-13`）。`col-span-12` に開始だけを足すと、グリッドの外に列が増えて全体の幅が崩れます。
- 大きく組むリードで、行頭の字が仮名や「自」のように左の余白が大きいときは、その行を `<span class="-ml-[0.14em]">` で囲んで見た目の左端をそろえます。
  - `text-display` の一文は、ブロックに `-ml-[0.04em]` を付けて漢字の左端をそろえたうえで、仮名や「自」の行を囲みます。
  - 行頭の「「」は `-ml-[0.54em]` で、括弧の縦線を左端にそろえます。
  - スマートフォンだけで行頭になる字は、`max-md:-ml-[0.09em]` のようにその幅のときだけそろえます。
- 明朝の一覧のように大きな文字が折り返すところは `text-balance [word-break:auto-phrase]` にし、文節で区切って行の長さをそろえます。語尾の1〜2字だけが次の行に落ちるのを防ぎます。
- 下層ページは、トップと同じ組み方を内容に合わせて使い分けます。
  - 短いリードは左に立てて本文を右に並べ、長いリードは横いっぱいに組んで本文を7列目から下に置きます。
  - 最初の画面だけは、トップの事業紹介と同じ見せ方を引き継ぎます。
  - 各事業ページは、明るい背景の「お問い合わせ」で締めます。トップのお問い合わせと同じく `text-lead` の一文、本文、`<ContactLink>` の順に置きます。
  - お問い合わせ・プライバシーポリシー・利用規約・エラーページは読むためのページなので、最初の画面は「GBCについて」と同じ組み方にしたうえで、題を `text-lead` に抑えます。
- 文節の区切りが見つからない複合語で折り返したいときは、文字列に `&#x200B;`（幅のない改行位置）を入れます（例：`title="8. プライバシー&#x200B;ポリシーの変更"`）。

### スクロール時の表示（v-reveal）

`v-reveal` を付けた要素は、画面に入ったときに下から静かに浮かび上がります（`app/plugins/reveal.ts`）。

```vue
<p v-reveal>コピー</p>
<div v-reveal class="delay-150">本文とリンク</div>
```

- 時間差は `delay-*` で付けます。
- 最初から画面内にある要素と、動きを減らす設定のときは演出しません。
- リンクなど自分でトランジションを持つ要素には直接付けず、外側の要素に付けます。

## Development

Node.js **24 LTS**（`24.15.0` 以上）を使用します。リポジトリ直下の `.nvmrc` / `.node-version` に合わせてください。

```bash
# nvm の例
nvm install
nvm use

# fnm の例
fnm install
fnm use
```

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

起動後、以下へアクセスします。

```txt
http://localhost:3000
```

## Environment Variables

お問い合わせフォームを利用する場合は、`.env.example` を参考に環境変数を設定します。

```txt
NUXT_SUPABASE_URL
NUXT_SUPABASE_SECRET_KEY
NUXT_SLACK_WEBHOOK_URL
NUXT_PUBLIC_CONTACT_FORM_ENABLED
```

秘密情報には `NUXT_PUBLIC_` を付けず、サーバー側だけで利用します。

## Build

本番ビルドを確認します。

```bash
npm run build
```

## Deployment

本番環境はVercelで運用します。

- `main` への反映はPull Request経由で行います。
- VercelのProduction Branchは `main` を使用します。
- 作業ブランチはVercel Previewで確認します。
- GitHub Pagesは使用しません。

## Structure

```txt
app/
  components/
    AppHeader.vue
    AppFooter.vue
    ArrowLink.vue
    ContactLink.vue
    FormField.vue
    LegalArticle.vue
    PageSection.vue
    SectionHeading.vue
    SectionLabel.vue
    home/
  layouts/
    default.vue
  plugins/
    reveal.ts
  pages/
    index.vue
    about.vue
    contact.vue
    privacy.vue
    terms.vue
    business/
  app.vue
  error.vue

server/
  api/
    contact.post.ts

shared/
  contact.ts

public/
  favicon.ico
  images/
```

## Implementation Policy

- 通常のUIはTailwind CSSが標準で提供するユーティリティのみで実装します。
- 独自CSSはアニメーションなど、Tailwindだけでは意図を表現しにくい箇所に限定します。
- 処理には日本語コメントを付け、目的と流れが追える状態を保ちます。
- ロジックはできるだけ単純にし、読みやすい改行・構造を維持します。
- `main` へ直接変更せず、作業ブランチからPull Requestで反映します。

## Copyright

© 2026 GBC LLC. All Rights Reserved.
