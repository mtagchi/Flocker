<template>
  <form @submit.prevent="$emit('submit')">
    
  </form>
</template>

<script>
export default {
  name: 'EventForm',
  props: {
    event: {},
    errors: {}
  }
}
</script>
