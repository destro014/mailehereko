import { defineStore } from 'pinia';
import { getDocs, collection } from 'firebase/firestore';
import { d as useNuxtApp } from './server.mjs';

const useListsStore = defineStore("lists", {
  state: () => ({
    lists: [],
    loading: true
  }),
  getters: {
    getLists: (state) => state.lists,
    isLoading: (state) => state.loading
  },
  actions: {
    async fetchLists() {
      this.loading = true;
      const { $db } = useNuxtApp();
      const querySnapshot = await getDocs(collection($db, "lists"));
      this.lists = querySnapshot.docs.map((doc) => doc.data());
      this.loading = false;
    },
    setLists(data) {
      this.lists = data;
    },
    setLoading(val) {
      this.loading = val;
    }
  }
});

export { useListsStore as u };
//# sourceMappingURL=lists-bCv0e5oG.mjs.map
