import Vue from 'vue'
import App from '@/App.vue'
import VueProgressBar from 'vue-progressbar'
import router from '@/router'
import store from '@/store/index'
import vuetify from '@/plugins/vuetify'
import firebase from '@/plugins/firebase'

Vue.config.productionTip = false

const ProgressBarOptions = {
  color: '#795548',
  thickness: '3px'
}

Vue.use(VueProgressBar, ProgressBarOptions)

firebase.init()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
