<template>
  <v-app>
    <head-bar/>
    <v-main>
      <router-view/>
    </v-main>
    <foot-bar/>
  </v-app>
</template>

<script>
import HeadBar from '@/components/organisms/HeadBar'
import FootBar from '@/components/molecules/FootBar'

export default {
  name: 'App',
  components: {
    HeadBar,
    FootBar
  }
}
</script>

<style lang="scss">
@import "@/style/main.scss";
</style>
