import { defineStore } from 'pinia'
import { collection, getDocs } from 'firebase/firestore'
import { useNuxtApp } from '#app'

export const useSuggestionsStore = defineStore('suggestions', {
  state: () => ({
    suggestions: [] as any[],
    manualSuggestions: [] as any[],
    loading: true,
  }),
  getters: {
    getSuggestions: (state) => state.suggestions,
    getManualSuggestions: (state) => state.manualSuggestions,
    isLoading: (state) => state.loading,
  },
  actions: {
    async fetchSuggestions() {
      this.loading = true
      const { $db } = useNuxtApp()
      const suggestionsSnap = await getDocs(collection($db, 'suggestions'))
      this.suggestions = suggestionsSnap.docs.map((doc) => doc.data())
      const manualSnap = await getDocs(collection($db, 'manualsuggestions'))
      this.manualSuggestions = manualSnap.docs.map((doc) => doc.data())
      this.loading = false
    },
    setSuggestions(data: any[]) {
      this.suggestions = data
    },
    setManualSuggestions(data: any[]) {
      this.manualSuggestions = data
    },
    setLoading(val: boolean) {
      this.loading = val
    },
  },
})
