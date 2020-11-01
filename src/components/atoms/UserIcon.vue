<template>
  <v-avatar size="40">
    <v-img
      :src="user.photoURL"
      :alt="user.displayName"
    ></v-img>
  </v-avatar>
</template>

<script>
export default {
  name: 'UserIcon',
  props: {
    user: {}
  }
}
</script>
