<template>
  <v-btn v-if="user.uid" @click="logout">
    {{ user.uid }}
  </v-btn>
  <v-btn
    v-else
    href="#"
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
        // .then(
        //   result => {
        //     var user = result.user
        //     if (user) {
        //       const currentUser = {
        //         displayName: user.displayName,
        //         photoURL: user.photoURL
        //       }
        //       this.$store.commit("setUser", currentUser)
        //       this.$router.push("/")
        //     } else {
        //       alert('有効なアカウントではありません')
        //     }
        //   },
        //   err => {
        //     alert(err.message)
        //   }
        // )
    },
    logout() {
      firebase.auth().signOut()
    }
  }
}
</script>
