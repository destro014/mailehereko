import { defineStore } from 'pinia';

const useTypeStore = defineStore("type", {
  state: () => ({
    listType: "all",
    listTitle: "All"
  }),
  getters: {
    getListType: (state) => state.listType,
    getListTitle: (state) => state.listTitle
  },
  actions: {
    setListType(listType) {
      this.listType = listType;
      if (listType === "all") {
        this.listTitle = "All";
      } else if (listType === "movie") {
        this.listTitle = "Movies";
      } else if (listType === "tv") {
        this.listTitle = "TV Shows";
      }
    },
    setListTitle(listTitle) {
      this.listTitle = listTitle;
    }
  }
});
const useSearchStore = defineStore("search", {
  state: () => ({
    searchTerm: ""
  }),
  getters: {
    getSearchTerm: (state) => state.searchTerm
  },
  actions: {
    setSearchTerm(term) {
      this.searchTerm = term;
    }
  }
});

export { useSearchStore as a, useTypeStore as u };
//# sourceMappingURL=search-_02KT1ET.mjs.map
