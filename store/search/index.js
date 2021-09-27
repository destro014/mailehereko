export const state = () => ({
  searchTerm: '',
})
export const getter = {
  searchTerm: (state) => {
    return state.searchTerm
  },
}
export const mutations = {
  SET_SEARCH_TERM: (state, searchTerm) => {
    state.searchTerm = searchTerm
  },
}
export const actions = {
  async setSearchTerm(state, searchTerm) {
    state.commit('SET_SEARCH_TERM', searchTerm)
  },
}
