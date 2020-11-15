<template>
  <v-btn
    color="primary"
    class="white--text"
    @click="$emit('login')"
  >
    <span class="mr-1">Twitterでログイン</span>
    <v-icon>login</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'LoginBtn',
  props: {
    user: {}
  }
}
</script>
