export const state = () => ({
  suggestions: [],
  manualSuggestions: [],
  loading: true,
})
export const getter = {
  suggestions: (state) => {
    return state.suggestions
  },
  manualSuggestions: (state) => {
    return state.manualSuggestions
  },
  loading: (state) => {
    return state.loading
  },
}
export const mutations = {
  SET_SUGGESTIONS: (state, data) => {
    state.suggestions = data
  },
  SET_MANUAL_SUGGESTIONS: (state, data) => {
    state.manualSuggestions = data
  },
  SET_LOADING: (state) => {
    state.loading = false
  },
}
export const actions = {
  async getSuggestions(state) {
    let suggestions = []
    let manualSuggestions = []
    this.$fire.firestore
      .collection('suggestions')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          suggestions.unshift(doc.data())
        })
        state.commit('SET_SUGGESTIONS', suggestions)
      })
    this.$fire.firestore
      .collection('manualsuggestions')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          manualSuggestions.unshift(doc.data())
        })
        state.commit('SET_MANUAL_SUGGESTIONS', manualSuggestions)
        state.commit('SET_LOADING')
      })
  },
}
