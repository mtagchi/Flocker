<template>
  <v-container fluid>
    <v-row wrap class="cta">
      <v-col align="center">
        <h1>Online to Offline</h1>
        <p>FlockerはTwitterユーザーのための飲み会企画サービスです</p>
        <v-btn color="primary">飲み会を開く</v-btn>
      </v-col>
      <v-col align="center">
        <span>aaa</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .cta {
    flex-direction: column;
  }
}
</style>
