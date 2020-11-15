import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index'
import vuetify from '@/plugins/vuetify'
import firebase from '@/plugins/firebase'

Vue.config.productionTip = false

firebase.init()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
