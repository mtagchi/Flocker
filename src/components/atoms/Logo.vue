<template>
  <div class="d-flex align-center mr-3">
    <v-img
      alt="Vuetify Logo"
      class="shrink mr-1 d-none d-sm-flex"
      contain
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
      transition="scale-transition"
      width="40"
    />
    <span class="logo unselectable font-weight-bold headline brown--text text--darken-4">Flocker</span>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

span.logo {
  font-family: "Roboto Slab", "Roboto", sans-serif !important;
}
</style>
