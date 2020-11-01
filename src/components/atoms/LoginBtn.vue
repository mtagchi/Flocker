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

export default {
  name: 'LoginBtn',
  props: {
    user: {}
  },
  methods: {
    login() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider)
    }
  }
}
</script>
