import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  state: {
    user: {
      uid: "",
      displayName: "",
      photoURL: ""
    }

  },
  getters: {
    getURL(state) {
      return state.user.photoURL
    }
  },
  mutations: {
    setUser(state, currentUser) {
      state.user.uid = currentUser.uid
      state.user.displayName = currentUser.displayName
      state.user.photoURL = currentUser.photoURL
    }
  },
  actions: {

  }
})
