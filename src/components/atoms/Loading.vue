<template>
  <v-progress-linear
    :active="loading"
    indeterminate
    value="10"
    absolute
    bottom
    height="2"
    color="primary"
    background-opacity="0"
  />
</template>

<script>
export default {
  name: 'Loading',
  computed: {
    loading () {
      return this.$store.getters['loading/get']
    }
  }
}
</script>
