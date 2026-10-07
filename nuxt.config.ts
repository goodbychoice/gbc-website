// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxtの互換性基準日を固定し、将来の挙動変更による影響を抑える。
  compatibilityDate: '2025-07-15',

  // 開発時の確認にNuxt DevToolsを利用する。
  devtools: { enabled: true },

  // Tailwind、SEO補助、アクセシビリティ監査の公式モジュールを有効にする。
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/a11y'],

  // アクセシビリティ監査は開発時に利用し、本番ビルド時のレポート生成は行わない。
  a11y: {
    defaultHighlight: false,
    logIssues: true,
    report: {
      enabled: false,
    },
  },

  // canonical、sitemap、robotsで利用する公開サイト情報を定義する。
  site: {
    url: 'https://www.goodbychoice.co.jp',
    name: 'GBC（Good By Choice）',
  },

  // 公開ページ全体のクロールを許可する。
  robots: {
    disallow: [],
  },

  // 秘密情報はサーバー側だけで利用し、公開フォームの有効化だけpublicへ渡す。
  runtimeConfig: {
    supabaseUrl: '',
    supabaseSecretKey: '',
    slackWebhookUrl: '',
    public: {
      // 環境変数でお問い合わせフォームの公開可否を切り替える。
      contactFormEnabled: false,
    },
  },

  // エラーページも事前生成し、静的配信時に404表示を維持する。
  experimental: {
    prerenderErrorPages: true,
  },

  // robots.txtとsitemap.xmlを含め、内部リンクから到達できるページを事前生成する。
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/robots.txt', '/sitemap.xml'],
    },
  },

  // 全ページ共通の言語・スクロール・favicon設定を定義する。
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        class: 'scroll-smooth motion-reduce:scroll-auto',
      },
      title: 'GBC（Good By Choice）',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
