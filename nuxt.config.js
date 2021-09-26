export default {
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
      { name: 'theme-color', content: '#2C8AFD' },
      { name: 'msapplication-TileColor', content: '#2C8AFD' },
      {
        name: 'title',
        content: 'MaileHereko - Movies and TV Shows watched by Pramod Poudel',
      },
      {
        name: 'description',
        content: 'MaileHereko - Movies and TV Shows watched by Pramod Poudel',
      },
      {
        name: 'keywords',
        content:
          'mailehereko, movies, tvshows, tv series, movies to watch, pramod poudel',
      },
      {
        property: 'og:title',
        content: 'MaileHereko - Movies and TV Shows watched by Pramod Poudel',
      },
      {
        property: 'og:description',
        content: 'MaileHereko - Movies and TV Shows watched by Pramod Poudel',
      },
      {
        property: 'og:image',
        content: '/img/banner.jpg',
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

      {
        property: 'twitter:title',
        content: 'MaileHereko - Movies and TV Shows watched by Pramod Poudel',
      },
      {
        property: 'twitter:description',
        content: 'MaileHereko - Movies and TV Shows watched by Pramod Poudel',
      },
      {
        property: 'twitter:image',
        content: 'https://mailehereko.pramodpoudel.com.np/img/banner.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'icons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        href: '/icons/apple-touch-icon.png',
        sizes: '512x512',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/icons/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#18a352',
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
    ],
  },

  buildModules: [],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@layer0/nuxt/module'],

  axios: {},

  pwa: {},

  build: {
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
