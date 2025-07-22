import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchTerm: '',
  }),
  getters: {
    getSearchTerm: (state) => state.searchTerm,
  },
  actions: {
    setSearchTerm(term: string) {
      this.searchTerm = term
    },
  },
})
