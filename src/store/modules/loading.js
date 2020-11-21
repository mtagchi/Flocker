export default {
  namespaced: true,
  state: {
    loading: false
  },
  getters: {
    get (state) {
      return state.loading
    }
  },
  mutations: {
    start (state) {
      state.loading = true
    },
    end (state) {
      state.loading = false
    }
  },
  actions: {
    start ({ commit }) {
      commit('start')
    },
    end ({ commit }) {
      setTimeout(() => {
        commit('end')
      }, 360)
    }
  }
}
