export const state = () => ({
  listType: 'all',
})
export const getter = {
  listType: (state) => {
    return state.listType
  },
}
export const mutations = {
  SET_LIST_TYPE: (state, listType) => {
    state.listType = listType
  },
}
export const actions = {
  setListType(state, listType) {
    state.commit('SET_LIST_TYPE', listType)
  },
}
