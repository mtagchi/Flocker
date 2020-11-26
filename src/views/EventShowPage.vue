<template>
  <v-container>
    <transition>
      <v-card v-if="event.isTweeted === false" class="mb-3">
        <v-card-text class="d-flex pt-1 pb-0">
          <v-row justify="center" align="center">作成したイベントをツイートしてフォロワーに告知しませんか？</v-row>
          <v-btn fab small elevation="0" color="white" @click="getTweeted">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-actions class="pb-3">
          <v-row justify="center">
            <v-btn color="twitter" class="white--text">
              <v-icon>mdi-twitter</v-icon>
              <span class="pl-1">ツイートする</span>
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </transition>

    <v-card>event show page {{ event }}</v-card>
  </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'EventShowPage',
  data: () => ({
    event: {}
  }),
  mounted () {
    this.getEvent()
    this.$nextTick(function () {
      this.$store.dispatch('loading/end')
    })
  },
  methods: {
    getEvent: function () {
      const db = firebase.firestore()
      db.collection('events').doc(this.$route.params.id).get().then(doc => {
        if (doc.exists) {
          this.event = doc.data()
        } else {
          const flash = {
            status: 'warning',
            message: 'イベントは存在しません'
          }
          this.$router.push(
            { name: 'Home' },
            () => this.$store.dispatch('flash/create', { flash: flash })
          )
        }
      })
    },
    getTweeted: function () {
      const db = firebase.firestore()
      db.collection('events').doc(this.$route.params.id).update({
        isTweeted: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-leave-active {
    transition: opacity 1s
}

.v-enter, .v-leave-to{
    opacity: 0;
}
</style>
