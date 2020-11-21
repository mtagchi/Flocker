<template>
  <v-container fluid :loading="loading">
    <v-row wrap align="center" class="cta">
      <v-col cols="6" align="center" class="cta-left">
        <h1>ようこそ、新しい広場へ</h1>
        <p>FlockerはTwitterユーザーのための飲み会企画サービスです</p>
        <div class="d-flex justify-center">
          <v-btn
            width="144"
            color="primary"
            class="mx-2"
            :to="{ name: 'EventNewPage' }"
          >飲み会を開く</v-btn>
          <v-btn
            width="144"
            color="secondary"
            class="mx-2 black--text"
            :to="{ name: 'About' }"
          >Flockerについて</v-btn>
        </div>
      </v-col>
      <v-col cols="6" align="center" class="cta-right">
        <v-img
          src="/img/main-image.svg"
          width="400"
        />
      </v-col>
    </v-row>

    <div class="latest-events pt-2 px-5" v-if="events.length">
      <h2 class="latest-events-title pb-2 d-flex align-center justify-space-between">新着イベント</h2>
      <v-card v-for="e in events" :key="e.id">
        <v-card-text>{{ e }}</v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  data: () => {
    return {
      loading: true,
      events: []
    }
  },
  mounted () {
    this.getLatestEvents()
    this.$nextTick(function () {
      this.loading = false
    })
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters['user/isLoggedIn']
    }
  },
  methods: {
    getLatestEvents () {
      const db = firebase.firestore()
      db.collection('events').orderBy('datetime', 'desc').limit(7).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.events.push(doc.data())
        })
      })
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
