<template>
  <event-form
    :loading="loading"
    :event="event"
    :errors="errors"
    :formType="formType"
    @submit="createEvent"
  />
</template>

<script>
import firebase from 'firebase'
import EventForm from '@/components/templates/EventForm'

export default {
  name: 'EventNewPage',
  components: {
    EventForm
  },
  data: () => ({
    loading: false,
    event: {
      date: '',
      time: '',
      name: '',
      place: '',
      text: ''
    },
    errors: '',
    formType: '作成'
  }),
  mounted () {
    this.$nextTick(function () {
      this.$store.dispatch('loading/end')
    })
  },
  methods: {
    createEvent: function () {
      this.loading = true
      const db = firebase.firestore()
      const events = db.collection('events')
      events.add(this.event).then(event => {
        this.loading = false
        const flash = {
          status: 'success',
          message: 'イベントを作成しました'
        }
        this.$router.push(
          { path: `events/${event.id}` },
          () => this.$store.dispatch('flash/create', { flash: flash })
        )
      })
    }
  }
}
</script>
