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
      const newEvent = {
        date: this.event.date,
        time: this.event.time,
        name: this.event.name,
        place: this.event.place,
        text: this.event.text,
        createdAt: new Date(),
        isTweeted: false
      }
      const db = firebase.firestore()
      const event = db.collection('events').doc()
      event.get().then(doc => {
        event.set(newEvent).then(() => {
          this.loading = false
          const flash = {
            status: 'success',
            message: 'イベントを作成しました'
          }
          this.$router.push(
            { name: 'EventShowPage', params: { id: doc.id } },
            () => this.$store.dispatch('flash/create', { flash: flash })
          )
        })
      })
    }
  }
}
</script>
