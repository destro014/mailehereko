import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { useUsersStore } from '~/stores/users'

export default defineNuxtRouteMiddleware(() => {
  const usersStore = useUsersStore()
  if (!usersStore.isLoggedIn) {
    return navigateTo('/login')
  }
})
