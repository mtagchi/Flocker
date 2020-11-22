<template>
  <v-container>event show page {{ event }}</v-container>
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
    }
  }
}
</script>
