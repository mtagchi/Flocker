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
    <template v-if="events.length">
      <v-card v-for="e in events" :key="e.id">
        <v-card-text>{{ e }}</v-card-text>
      </v-card>
    </template>
    <template v-else>
      <span>No data.</span>
    </template>
  </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  data: () => {
    return {
      events: []
    }
  },
  async mounted () {
    const db = firebase.firestore()
    db.collection('events').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.events.push(doc.data())
      })
    })
  },
  computed: {
    isLoggedIn () {
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
.latest-events-title {
  &:before, &:after {
    content: "";
    width: min(100px, 18%);
    height: 1px;
    background: rgb(0, 0, 0, 0.87);
  }
}
</style>
