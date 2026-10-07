// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/a11y'],

  a11y: {
    defaultHighlight: false,
    logIssues: true,
    report: {
      // 本番ビルドには影響させず、開発時のDevTools監査に限定する。
      enabled: false,
    },
  },

  site: {
    url: 'https://www.goodbychoice.co.jp',
    name: 'GBC（Good By Choice）'
  },

  robots: {
    disallow: [],
  },

  // 秘密情報はNitroのサーバー側だけで使用する。VercelではNUXT_*環境変数を設定する。
  runtimeConfig: {
    supabaseUrl: '',
    supabaseSecretKey: '',
    slackWebhookUrl: '',
    public: {
      // SupabaseとSlackの接続確認が完了するまでは、公開フォームを無効にしておく。
      contactFormEnabled: false,
    },
  },

  experimental: {
    prerenderErrorPages: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/robots.txt', '/sitemap.xml'],
    },
  },

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
