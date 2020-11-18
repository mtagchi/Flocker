<template>
  <event-form
    :errors="errors"
    :event="event"
    @submit="createEvent"
  />
</template>

<script>
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
      // this.$store.dispatch
    }
  }
}
</script>
