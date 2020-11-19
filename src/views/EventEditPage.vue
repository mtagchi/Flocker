<template>
  <event-form
    :errors="errors"
    :event="event"
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
  data: () => {
    return {
      event: {},
      errors: ''
    }
  },
  mounted () {
    this.getEvent()
  },
  methods: {
    updateEvent: () => {
      // this.$store.dispatch
    },
    getEvent: () => {
      
    }
  }
}
</script>
