import { defineStore } from 'pinia'
import { useNuxtApp } from 'nuxt/app'
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  type Auth,
} from 'firebase/auth'

export const useUsersStore = defineStore('users', {
  state: () => ({
    authUser: null as null | { uid: string; email: string },
    loading: false,
    error: null as string | null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.authUser,
  },
  actions: {
    async login(email: string, password: string) {
      this.loading = true
      this.error = null
      const { $auth } = useNuxtApp()
      try {
        const userCredential = await signInWithEmailAndPassword(
          $auth as Auth,
          email,
          password
        )
        const user = userCredential.user
        this.authUser = { uid: user.uid, email: user.email || '' }
      } catch (e: any) {
        this.error = e.message
        this.authUser = null
      } finally {
        this.loading = false
      }
    },
    async logout() {
      const { $auth } = useNuxtApp()
      await signOut($auth as Auth)
      this.authUser = null
    },
    initAuthListener() {
      const { $auth } = useNuxtApp()
      onAuthStateChanged($auth as Auth, (user: User | null) => {
        if (user) {
          this.authUser = { uid: user.uid, email: user.email || '' }
        } else {
          this.authUser = null
        }
      })
    },
  },
})
