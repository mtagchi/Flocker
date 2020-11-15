<template>
  <v-btn
    color="primary"
    class="white--text"
    @click="login"
  >
    <span class="mr-1">Twitterでログイン</span>
    <v-icon>login</v-icon>
  </v-btn>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  name: 'LoginBtn',
  created: () => {
    firebase.onAuth();
  },
  computed: {
    user () {
      return this.$store.getters['user/get']
    }
  },
  methods: {
    login () {
      firebase.login()
    }
  }
}
</script>
