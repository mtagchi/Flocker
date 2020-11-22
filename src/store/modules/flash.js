export default {
  namespaced: true,
  state: {
    status: null,
    message: null
  },
  getters: {
    getStatus (state) {
      return state.status
    },
    getMessage (state) {
      return state.message
    }
  },
  mutations: {
    create (state, payload) {
      state.status = payload.status
      state.message = payload.message
    },
    destroy (state) {
      state.status = null
      state.message = null
    }
  },
  actions: {
    create ({ commit }, { flash }) {
      commit('create', {
        status: flash.status,
        message: flash.message
      })
      setTimeout(() => commit('destroy'), 3000)
    }
  }
}
