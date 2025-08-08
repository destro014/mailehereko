import { getDocs, collection } from 'firebase/firestore'
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

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
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      TMDB_API_KEY: process.env.TMDB_API_KEY, // moved back to public
    },
  },

  // Nuxt 3: Modules must be Nuxt 3 compatible. Add only compatible ones here.
  modules: ['@pinia/nuxt', '@nuxtjs/sitemap'],
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
  sitemap: {
    sitemapsPathPrefix: '/',
    sitemapIndexFilename: 'sitemap.xml',
    sitemaps: {
      movies: {
        excludeAppSources: true,
        urls: async () => {
          try {
            const firebaseConfig = {
              apiKey: process.env.FIREBASE_API_KEY,
              authDomain: process.env.FIREBASE_AUTH_DOMAIN,
              projectId: process.env.FIREBASE_PROJECT_ID,
              storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
              messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
              appId: process.env.FIREBASE_APP_ID,
            }

            let firebaseApp
            const apps = getApps()
            if (!apps.length) {
              firebaseApp = initializeApp(firebaseConfig)
            } else {
              firebaseApp = apps[0]
            }

            const db = getFirestore(firebaseApp)
            const listsSnap = await getDocs(collection(db, 'watchedList'))
            const urls = []

            listsSnap.docs.forEach((doc) => {
              const data = doc.data()
              if (data.media_type === 'movie' && data.id) {
                urls.push({ loc: `/movie/${data.id}` })
              }
            })

            console.log('Movies sitemap generated:', urls.length, 'URLs')
            return urls
          } catch (error) {
            console.error('Error generating movies sitemap:', error)
            return []
          }
        },
      },
      tvshows: {
        excludeAppSources: true,
        urls: async () => {
          try {
            const firebaseConfig = {
              apiKey: process.env.FIREBASE_API_KEY,
              authDomain: process.env.FIREBASE_AUTH_DOMAIN,
              projectId: process.env.FIREBASE_PROJECT_ID,
              storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
              messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
              appId: process.env.FIREBASE_APP_ID,
            }

            let firebaseApp
            const apps = getApps()
            if (!apps.length) {
              firebaseApp = initializeApp(firebaseConfig)
            } else {
              firebaseApp = apps[0]
            }

            const db = getFirestore(firebaseApp)
            const listsSnap = await getDocs(collection(db, 'watchedList'))
            const urls = []

            listsSnap.docs.forEach((doc) => {
              const data = doc.data()
              if (data.media_type === 'tv' && data.id) {
                urls.push({ loc: `/tv/${data.id}` })
              }
            })

            console.log('TV Shows sitemap generated:', urls.length, 'URLs')
            return urls
          } catch (error) {
            console.error('Error generating TV shows sitemap:', error)
            return []
          }
        },
      },
      pages: {
        exclude: ['/login', '/admin', '/admin/**'],
        excludeAppSources: true,
        urls: async () => [
          { loc: '/' },
          { loc: '/movies' },
          { loc: '/tvshows' },
          { loc: '/suggest' },
        ],
      },
    },
  },
})
