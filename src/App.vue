<template>
  <v-app>
    <head-bar/>
    <v-main>
      <div id="nav" align="center">
        <router-link :to="{ name: 'Home' }">HOME</router-link> | 
        <router-link :to="{ name: 'About'}">ABOUT</router-link> |
      </div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HeadBar from '@/components/organisms/HeadBar'

export default {
  name: 'App',
  components: {
    HeadBar
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "@/style/main.scss";
</style>
