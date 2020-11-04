import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      uid: "",
      displayName: "",
      username: "",
      photoURL: ""
    },
    status: false
  },
  getters: {
    user(state) {
      return state.user
    },
    isLoggedIn(state) {
      return state.status
    }
  },
  mutations: {
    setUser(state, user) {
      state.user.uid = user.uid
      state.user.displayName = user.displayName
      // state.user.username = user.username
      state.user.photoURL = user.photoURL
      state.status = user.uid ? true : false
    },
    setUsername(state, username) {
      state.user.username = username
    },
    isLoggedIn(state, status) {
      state.status = status
    }
  },
  actions: {
    setUser({ commit }, { user }) {
      commit('setUser', user)
      commit('setUsername', user.username)
    }
  }
})
