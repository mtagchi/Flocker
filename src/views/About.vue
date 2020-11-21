<template>
  <div class="about" align="center">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
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
