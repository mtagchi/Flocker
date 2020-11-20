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
  data: () => {
    return {
      loading: true,
      event: {},
      errors: '',
      formType: '更新'
    }
  },
  mounted () {
    this.getEvent()
  },
  methods: {
    updateEvent: function () {
      this.loading = true
    },
    getEvent: function () {
      this.loading = false
    }
  }
}
</script>
