export const state = () => ({
  lists: [],
  loading: true,
})
export const getter = {
  lists: (state) => {
    return state.lists
  },
  loading: (state) => {
    return state.loading
  },
}
export const mutations = {
  SET_LIST: (state, lists) => {
    state.lists.unshift(lists)
  },
  SET_LOADING: (state) => {
    state.loading = false
  },
}
export const actions = {
  async getLists(state, userData) {
    await this.$fire.firestore
      .collection('lists')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          state.commit('SET_LIST', doc.data())
        })
        state.commit('SET_LOADING')
      })
  },
}
