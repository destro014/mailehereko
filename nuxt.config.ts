export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s MaileHereko',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        { name: 'apple-mobile-web-app-title', content: 'Maile Hereko' },
        { name: 'theme-color', content: '#121829' },
        { name: 'msapplication-TileColor', content: '#121829' },
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { name: 'title', content: 'MaileHereko' },
        {
          name: 'description',
          content: 'Movies and TV Shows watched by Pramod Poudel.',
        },
        {
          name: 'keywords',
          content:
            'mailehereko, movies, tvshows, tv series, movies to watch, pramod poudel',
        },
        { property: 'og:title', content: 'MaileHereko' },
        {
          property: 'og:description',
          content: 'Movies and TV Shows watched by Pramod Poudel',
        },
        {
          property: 'og:image',
          content: 'https://mailehereko.pramodpoudel.com.np/img/banner.png',
        },
        {
          property: 'og:url',
          content: 'https://mailehereko.pramodpoudel.com.np',
        },
        { property: 'og:locale', content: 'en_EN' },
        { property: 'og:site_name', content: 'MaileHereko' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:site', content: '@destro014' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://twitter.com/destro014' },
        { property: 'twitter:title', content: 'MaileHereko' },
        {
          property: 'twitter:description',
          content: 'Movies and TV Shows watched by Pramod Poudel',
        },
        {
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
  },

  css: ['@/assets/scss/mailehereko.scss'],

  components: [
    '~/components',
    '~/components/core/',
    '~/components/layout',
    '~/components/block',
    '~/components/loaders',
  ],

  // Nuxt 3: Use runtimeConfig for env variables
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIRBEASE_MESSAGING_SENDER_ID: process.env.FIRBEASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    },
  },

  // Nuxt 3: Modules must be Nuxt 3 compatible. Add only compatible ones here.
  modules: [
    '@pinia/nuxt',
    // '@nuxtjs/pwa', // Use Nuxt 3 compatible version if available
    // '@nuxtjs/sitemap', // Use Nuxt 3 compatible version if available
    // Add other Nuxt 3 compatible modules here
  ],

  // PWA, sitemap, and firebase configs need Nuxt 3 compatible modules/plugins
  // Add their config here if/when you add Nuxt 3 compatible modules
  // build, generate, router, and other advanced options need review for Nuxt 3 compatibility
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})