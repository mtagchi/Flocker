import Vue from 'vue'
import Vuex from 'vuex'
import flash from './modules/flash'
import user from './modules/user'
import event from './modules/event'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    flash,
    user,
    event
  }
})
