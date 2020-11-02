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
    }

  },
  mutations: {
    setUser(state, currentUser) {
      state.user.uid = currentUser.uid
      state.user.displayName = currentUser.displayName
      state.user.photoURL = currentUser.photoURL
    },
    setUsername(state, username) {
      state.user.username = username
    }
  }
})
