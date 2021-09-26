export const state = () => ({
  lists: '',
})
export const getter = {
  lists: (state) => {
    return state.lists
  },
}
export const mutations = {
  SET_LIST: (state, lists) => {
    state.lists = lists
  },
}
export const actions = {
//   async setUser(state, userData) {
//     state.commit('SET_LIST', {
//       email: userData.email,
//       displayName: userData.displayName,
//     })
//   },
  
}
