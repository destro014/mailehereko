import { defineStore } from 'pinia';
import { getDocs, collection } from 'firebase/firestore';
import { d as useNuxtApp } from './server.mjs';

const useSuggestionsStore = defineStore("suggestions", {
  state: () => ({
    suggestions: [],
    manualSuggestions: [],
    loading: true
  }),
  getters: {
    getSuggestions: (state) => state.suggestions,
    getManualSuggestions: (state) => state.manualSuggestions,
    isLoading: (state) => state.loading
  },
  actions: {
    async fetchSuggestions() {
      this.loading = true;
      const { $db } = useNuxtApp();
      const suggestionsSnap = await getDocs(collection($db, "suggestions"));
      this.suggestions = suggestionsSnap.docs.map((doc) => doc.data());
      const manualSnap = await getDocs(collection($db, "manualsuggestions"));
      this.manualSuggestions = manualSnap.docs.map((doc) => doc.data());
      this.loading = false;
    },
    setSuggestions(data) {
      this.suggestions = data;
    },
    setManualSuggestions(data) {
      this.manualSuggestions = data;
    },
    setLoading(val) {
      this.loading = val;
    }
  }
});

export { useSuggestionsStore as u };
//# sourceMappingURL=suggestions-DWkk13IR.mjs.map
