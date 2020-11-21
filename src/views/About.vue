<template>
  <div class="about" align="center">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(function () {
      this.$store.dispatch('loading/end')
    })
  }
}
</script>
