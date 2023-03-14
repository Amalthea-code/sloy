export default {
  namespaced: true,
  state: {
    cursor: ''
  },
  mutations: {
    SET_CURSOR (state, payload) {
      state.cursor = payload
    }
  },
  actions: {
  },
  getters: {
    GET_CURSOR: (state) => {
      return state.cursor
    }
  }
}
