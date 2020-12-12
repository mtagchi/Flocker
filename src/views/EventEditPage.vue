<template>
  <event-form
    :loading="loading"
    :event="event"
    :errors="errors"
    :formType="formType"
    @submit="updateEvent"
  />
</template>

<script>
import EventForm from '@/components/templates/EventForm'

export default {
  name: 'EventEditPage',
  components: {
    EventForm
  },
  data: () => ({
    loading: true,
    event: {},
    errors: '',
    formType: '更新'
  }),
  mounted () {
    this.getEvent()
  },
  methods: {
    updateEvent: function () {
      this.loading = true
    },
    getEvent: function () {
      this.loading = false
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
