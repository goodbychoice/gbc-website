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

公式の背景色・文字色・最大コンテンツ幅は `app/assets/css/main.css` の `@theme` で定義しています。

- `bg-brand-surface` / `text-brand-surface` … 背景 `#f4f1ea`
- `text-brand-ink` / `border-brand-ink/20` など … 文字・線 `#111317`
- `max-w-brand` … レイアウト最大幅 `1600px`

色や幅を変えるときは **hex を各 Vue ファイルに書かず、このファイルだけ** 更新してください。

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
    home/
  layouts/
    default.vue
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
