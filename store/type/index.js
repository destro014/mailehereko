export const state = () => ({
  listType: 'all',
  listTitle: 'All',
})
export const getter = {
  listType: (state) => {
    return state.listType
  },
  listTitle: (state) => {
    return state.listTitle
  },
}
export const mutations = {
  SET_LIST_TYPE: (state, listType) => {
    state.listType = listType
  },
  SET_LIST_TITLE: (state, listTitle) => {
    state.listTitle = listTitle
  },
}
export const actions = {
  setListType(state, listType) {
    state.commit('SET_LIST_TYPE', listType)
    if (listType == 'all') {
      state.commit('SET_LIST_TITLE', 'All')
    } else if (listType == 'movie') {
      state.commit('SET_LIST_TITLE', 'Movies')
    } else if (listType == 'tv') {
      state.commit('SET_LIST_TITLE', 'TV Shows')
    }
  },
}
