<template>
  <router-link :to="{ name: 'Home' }" class="text-decoration-none">
    <div class="d-flex align-center mr-3">
      <v-img
        alt="Flocker"
        class="shrink mr-2 d-none d-sm-flex"
        contain
        src="/img/logo.png"
        transition="scale-transition"
        width="40"
        height="40"
      />
      <span class="logo unselectable font-weight-bold headline brown--text text--darken-2">Flocker</span>
    </div>
  </router-link>
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
