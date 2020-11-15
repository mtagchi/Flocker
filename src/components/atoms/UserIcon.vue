<template>
  <v-avatar size="40">
    <v-img
      :src="user.photoURL"
      :alt="user.displayName"
    ></v-img>
  </v-avatar>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  name: 'UserIcon',
  created: () => {
    firebase.onAuth();
  },
  computed: {
    user () {
      return this.$store.getters['user/get']
    }
  }
}
</script>
