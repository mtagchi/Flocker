<template>
  <event-form
    :errors="errors"
    :event="event"
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
  data: () => {
    return {
      event: {
        datetime: '',
        place: '',
        name: '',
        text: ''
      },
      errors: ''
    }
  },
  methods: {
    createEvent: () => {
      const db = firebase.firestore()
      const events = db.collection('events')
      events.add(this.event)
    }
  }
}
</script>
