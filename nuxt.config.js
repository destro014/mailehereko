require('dotenv').config()

export default {
  target: 'server',
  head: {
    titleTemplate: '%s Maile Hereko',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'mobile-web-app-capable',
        name: 'mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'apple-mobile-web-app-capable',
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Maile Hereko',
      },
      { hid: 'theme-color', name: 'theme-color', content: '#121829' },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#121829',
      },
      {
        hid: 'msapplication-TileImage',
        name: 'msapplication-TileImage',
        content: '/ms-icon-144x144.png',
      },
      {
        hid: 'title',
        name: 'title',
        content: 'MaileHereko',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Movies and TV Shows watched by Pramod Poudel',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'mailehereko, movies, tvshows, tv series, movies to watch, pramod poudel',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'MaileHereko',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Movies and TV Shows watched by Pramod Poudel',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://mailehereko.pramodpoudel.com.np/img/banner.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://mailehereko.pramodpoudel.com.np',
      },

      { hid: 'og:locale', property: 'og:locale', content: 'en_EN' },

      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'MaileHereko',
      },

      { hid: 'og:type', property: 'og:type', content: 'website' },

      { hid: 'twitter:site', name: 'twitter:site', content: '@destro014' },

      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },

      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://twitter.com/destro014',
      },

      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'MaileHereko',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'Movies and TV Shows watched by Pramod Poudel',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://mailehereko.pramodpoudel.com.np/img/banner.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
  },
  generate: {
    fallback: true,
  },

  router: {
    linkExactActiveClass: 'active',
    // middleware: ['authenticated'],
  },
  css: ['@/assets/scss/mailehereko.scss'],
  plugins: [],

  components: true,
  components: {
    dirs: [
      '~/components',
      '~/components/core/',
      '~/components/layout',
      '~/components/block',
      '~/components/loaders',
    ],
  },

  buildModules: [
    '@nuxtjs/axios',
    '@layer0/nuxt/module',
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase',
    '@nuxtjs/sitemap',
  ],
  modules: [],
  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIRBEASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    services: {
      firestore: {
        enablePersistence: true,
      },
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedMutation: 'users/ON_AUTH_STATE_CHANGED',
          onAuthStateChangedAction: 'users/onAuthStateChanged',
          subscribeManually: false,
        },
        ssr: true,
      },
    },
  },
  axios: {},
  sitemap: {
    hostname: 'https://mailehereko.pramodpoudel.com.np',
    exclude: ['/login', '/prasasan/**'],
    defaults: {
      lastmod: new Date(),
    },
  },
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        autoprefixer: {
          flexbox: true,
          grid: true,
          transition: true,
          transform: true,
          animation: true,
        },
      },
    },
  },
}
