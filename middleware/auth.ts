import { defineNuxtRouteMiddleware, navigateTo, useRoute } from 'nuxt/app'
import { useUsersStore } from '../stores/users'

export default defineNuxtRouteMiddleware((to) => {
  // Exclude sitemap and robots.txt from auth
  if (to.path === '/sitemap.xml' || to.path === '/robots.txt') {
    return
  }
  const usersStore = useUsersStore()
  if (!usersStore.isLoggedIn) {
    return navigateTo('/login')
  }
})
