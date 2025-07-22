import { defineStore } from 'pinia'

export const useTypeStore = defineStore('type', {
  state: () => ({
    listType: 'all',
    listTitle: 'All',
  }),
  getters: {
    getListType: (state) => state.listType,
    getListTitle: (state) => state.listTitle,
  },
  actions: {
    setListType(listType: string) {
      this.listType = listType
      if (listType === 'all') {
        this.listTitle = 'All'
      } else if (listType === 'movie') {
        this.listTitle = 'Movies'
      } else if (listType === 'tv') {
        this.listTitle = 'TV Shows'
      }
    },
    setListTitle(listTitle: string) {
      this.listTitle = listTitle
    },
  },
})
