require('dotenv').config()

export default {
  head: {
    titleTemplate: '%s MaileHereko',
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
        content: 'Movies and TV Shows watched by Pramod Poudel.',
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
    middleware: ['authenticated'],
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

  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    '@layer0/nuxt/module',
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],
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
        initialize: {
          onAuthStateChangedAction: 'users/onAuthStateChanged',
        },
        ssr: true,
      },
    },
  },
  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      dev: process.env.NODE_ENV === 'development',
    },
  },
  axios: {},
  sitemap: {
    hostname: 'https://mailehereko.pramodpoudel.com.np',
    exclude: ['/bhitra', '/prasasan/*', '/prasasan'],
    defaults: {
      priority: 0.7,
    },
    routes: [
      {
        url: '/',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/movies',
        priority: 0.8,
        lastmod: new Date(),
      },
      {
        url: '/tvshows',
        priority: 0.8,
        lastmod: new Date(),
      },
      {
        url: '/suggest',
        priority: 0.8,
        lastmod: new Date(),
      },
      '/movie/99861 ',
      '/tv/86453 ',
      '/tv/84958 ',
      '/tv/84105 ',
      '/movie/8078 ',
      '/movie/8077 ',
      '/tv/79352 ',
      '/movie/791373 ',
      '/movie/783273 ',
      '/tv/76747 ',
      '/movie/76338 ',
      '/tv/75758 ',
      '/movie/7508 ',
      '/tv/71446 ',
      '/movie/70981 ',
      '/movie/691179 ',
      '/tv/66732 ',
      '/tv/63351 ',
      '/tv/62560 ',
      '/tv/60735 ',
      '/tv/60708 ',
      '/tv/59427 ',
      '/movie/5915 ',
      '/movie/559969 ',
      '/movie/530915 ',
      '/movie/512200 ',
      '/movie/497698 ',
      '/movie/49521 ',
      '/movie/49026 ',
      '/movie/475557 ',
      '/movie/474350 ',
      '/movie/472027 ',
      '/movie/464052 ',
      '/movie/460962 ',
      '/movie/448368 ',
      '/movie/436969 ',
      '/movie/429617 ',
      '/movie/360814 ',
      '/movie/353486 ',
      '/movie/348 ',
      '/movie/346364 ',
      '/movie/339403 ',
      '/movie/335983 ',
      '/movie/324857 ',
      '/movie/299536 ',
      '/movie/299534 ',
      '/movie/297802 ',
      '/movie/297762 ',
      '/movie/297761 ',
      '/movie/286217 ',
      '/movie/284053 ',
      '/movie/283995 ',
      '/movie/27205 ',
      '/tv/2691 ',
      '/movie/24428 ',
      '/movie/22683 ',
      '/movie/209112 ',
      '/movie/207703 ',
      '/movie/206324 ',
      '/movie/20453 ',
      '/movie/198184 ',
      '/movie/19666 ',
      '/tv/19614 ',
      '/movie/1927 ',
      '/movie/1771 ',
      '/movie/1724 ',
      '/tv/1668 ',
      '/movie/157336 ',
      '/movie/155 ',
      '/tv/1418 ',
      '/tv/1412 ',
      '/movie/141052 ',
      '/tv/1399 ',
      '/tv/1396 ',
      '/movie/126889 ',
      '/movie/123 ',
      '/movie/123025 ',
      '/movie/122 ',
      '/movie/121 ',
      '/movie/120 ',
      '/movie/118340 ',
      '/tv/1100 ',
      '/movie/10681 ',
      '/movie/10195 ',
    ],
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
    maximumFileSizeToCacheInBytes: 50000000,
  },
}
