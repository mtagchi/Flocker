<template>
  <v-avatar size="40">
    <v-img
      :src="user.photoURL"
      :alt="user.displayName"
    ></v-img>
  </v-avatar>
</template>

<script>
import store from '@/plugins/store/'

export default {
  name: 'UserIcon',
  computed: {
    user() {
      return store.state.user
    }
  }
}
</script>
