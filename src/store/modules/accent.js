export default {
  namespaced: true,
  state: {
    accent: 'rgb(13,153,255)'
  },
  mutations: {
    SET_ACCENT (state, payload) {
      state.accent = payload
    }
  },
  getters: {
    GET_ACCENT: (state) => {
      return state.accent
    }
  }
}