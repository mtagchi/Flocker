<template>
  <v-container>event show page</v-container>
</template>

<script>
export default {
  name: 'EventShowPage',
  data: () => {
    return {
      loading: true
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.loading = false
    })
  }
}
</script>
