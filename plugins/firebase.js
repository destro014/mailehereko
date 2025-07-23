import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: config.public.FIREBASE_AUTH_DOMAIN,
    databaseURL: '<replace this>',
    projectId: config.public.FIREBASE_PROJECT_ID,
    storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.public.FIREBASE_APP_ID,
  }
  let firebaseApp
  const apps = getApps()
  if (!apps.length) {
    firebaseApp = initializeApp(firebaseConfig)
  } else {
    firebaseApp = apps[0]
  }
  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)
  nuxtApp.provide('db', db)
  nuxtApp.provide('auth', auth)
})
