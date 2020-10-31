import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/plugins/store/'
import vuetify from '@/plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDnEA_-Gnc-DzQWnGuKaTNg3y0iGtsFj7w",
  authDomain: "flocker-92eff.firebaseapp.com",
  databaseURL: "https://flocker-92eff.firebaseio.com",
  projectId: "flocker-92eff",
  storageBucket: "flocker-92eff.appspot.com",
  messagingSenderId: "963950173250",
  appId: "1:963950173250:web:221432c9ce0a919f8c21db",
  measurementId: "G-GQ5C6M47WT"
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const app = () => {
  firebase.auth().onAuthStateChanged(currentUser => {
    if (currentUser) {
      store.commit("setUser", currentUser)
    } else {
      store.commit("setUser", null)
    }
  }),
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
}
app()
