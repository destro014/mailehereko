export default defineNuxtPlugin(() => {
  if (process.client && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-auth-sw.js')
  }
})
