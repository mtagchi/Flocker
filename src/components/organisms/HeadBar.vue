<template>
  <v-app-bar
    app
    color="#F5F4F1"
  >
    <logo/>
    <v-spacer/>
    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import Logo from '@/components/atoms/Logo'

export default {
  name: 'HeadBar',
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
header {
  box-shadow: 0px 2px 4px -1px rgba(62, 39, 35, 0.2), 0px 4px 5px 0px rgba(62, 39, 35, 0.14), 0px 1px 10px 0px rgba(62, 39, 35, 0.12) !important;
}
</style>
