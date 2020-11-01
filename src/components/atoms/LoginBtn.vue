<template>
  <v-btn
    v-if="user.uid"
    @click="logout"
  >
    <span class="mr-1">ログアウト</span>
    <v-icon>logout</v-icon>
  </v-btn>
  <v-btn
    v-else
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
  data() {
    return {
      user: {}
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {}
    })
  },
  methods: {
    login() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider)
    },
    logout() {
      firebase.auth().signOut()
    }
  }
}
</script>
