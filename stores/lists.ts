import { defineStore } from 'pinia'
import { Firestore, collection, getDocs } from 'firebase/firestore'
import { useNuxtApp } from 'nuxt/app'

export const useListsStore = defineStore('lists', {
  state: () => ({
    lists: [] as any[],
    loading: true,
  }),
  getters: {
    getLists: (state) => state.lists,
    isLoading: (state) => state.loading,
  },
  actions: {
    async fetchLists() {
      this.loading = true
      const { $db } = useNuxtApp()
      const querySnapshot = await getDocs(
        collection($db as Firestore, 'watchedList')
      )
      this.lists = querySnapshot.docs.map((doc) => doc.data())
      this.loading = false
    },
    setLists(data: any[]) {
      this.lists = data
    },
    setLoading(val: boolean) {
      this.loading = val
    },
  },
})
