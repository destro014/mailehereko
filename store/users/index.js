export const state = () => ({
  user: '',
})
export const getter = {
  user: (state) => {
    return state.user
  },
}
export const mutations = {
  SET_USER: (state, authUser) => {
    state.user = authUser
  },
  ON_AUTH_STATE_CHANGED: (state, { authUser, claims }) => {
    if (!authUser) {
      state.user = null
    } else {
      const { uid, email, emailVerified, displayName } = authUser
      state.user = { uid, email, emailVerified, displayName }
    }
  },
}
export const actions = {
  async setUser(state, userData) {
    state.commit('SET_USER', {
      email: userData.email,
      displayName: userData.displayName,
    })
  },
  async onAuthStateChanged(state, { authUser, claims }) {
    if (!authUser) {
      state.commit('SET_USER', null)
      this.$router.push({
        path: '/',
      })
    } else {
      const { uid, email, emailVerified, displayName } = authUser
      state.commit('SET_USER', {
        uid,
        email,
        emailVerified,
        displayName,
      })
      if (!emailVerified) {
        this.$router.push({
          path: '/account/verify/',
        })
      }
    }
  },
}
