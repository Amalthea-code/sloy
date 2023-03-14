export default {
  namespaced: true,
  state: {
    zIndex: 10
  },
  mutations: {
    SET_ZINDEX (state, payload) {
      state.zIndex = payload
    }
  },
  actions: {
  },
  getters: {
    GET_ZINDEX: (state) => {
      return state.zIndex
    }
  }
}
