<template>
  <v-container fluid>
    <v-row wrap align="center" class="cta">
      <v-col cols="6" align="center" class="cta-left">
        <v-row justify="center">
          <h1>Online to Offline</h1>
          <p>FlockerはTwitterユーザーのための飲み会企画サービスです</p>
          <v-btn width="168" color="primary">飲み会を開く</v-btn>
        </v-row>
      </v-col>
      <v-col cols="6" align="center" class="cta-right">
        <v-img
          src="/img/main-image.svg"
          width="400"
        />
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
  .cta-left, .cta-right {
    max-width: 500px;
  }
}
</style>
