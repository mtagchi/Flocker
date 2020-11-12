<template>
  <v-container fluid>
    <v-row wrap align="center" class="cta">
      <v-col cols="6" align="center" class="cta-left">
        <h1>ようこそ、新しい広場へ</h1>
        <p>FlockerはTwitterユーザーのための飲み会企画サービスです</p>
        <v-btn width="168" color="primary">飲み会を開く</v-btn>
      </v-col>
      <v-col cols="6" align="center" class="cta-right">
        <v-img
          src="/img/main-image.svg"
          width="400"
        />
      </v-col>
    </v-row>
    <h2 class="latest-events-title px-5 d-flex align-center justify-space-between">新着イベント</h2>
  </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  components: {
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    events() {
      const database = firebase.firestore()
      return database.collection('events')
    },
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
.latest-events-title {
  &:before, &:after {
    content: "";
    width: min(100px, 18%);
    height: 1px;
    background: rgb(0, 0, 0, 0.87);
  }
}
</style>
