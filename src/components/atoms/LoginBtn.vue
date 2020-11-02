<template>
  <v-btn
    color="twitter"
    class="white--text"
    @click="login"
  >
    <span class="mr-1">Twitterでログイン</span>
    <v-icon>login</v-icon>
  </v-btn>
</template>

<script>
import firebase from 'firebase'
import store from '@/plugins/store/'

export default {
  name: 'LoginBtn',
  computed: {
    user() {
      return store.state.user
    }
  },
  methods: {
    login() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider).then((userCredential) => {
        store.commit('setUsername', userCredential.additionalUserInfo.username)
      })
    }
  }
}
</script>
