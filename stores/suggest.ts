import { defineStore } from 'pinia'

export const useSuggestStore = defineStore('suggest', {
  state: () => ({
    searchTerm: '',
    searchResults: [],
    pageCount: 1,
  }),
  actions: {
    setSearchTerm(term) {
      this.searchTerm = term
    },
    setSearchResults(results) {
      this.searchResults = results
    },
    setPageCount(page) {
      this.pageCount = page
    },
    clear() {
      this.searchTerm = ''
      this.searchResults = []
      this.pageCount = 1
    },
  },
})
