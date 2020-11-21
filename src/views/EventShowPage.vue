<template>
  <v-container>event show page</v-container>
</template>

<script>
export default {
  name: 'EventShowPage',
  mounted () {
    this.$nextTick(function () {
      this.$store.dispatch('loading/end')
    })
  }
}
</script>
