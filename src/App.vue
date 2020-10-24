<template>
  <v-app>
    <app-bar/>
    <v-main>
      <div id="nav" align="center">
        <router-link :to="{ name: 'Home' }">HOME</router-link> | 
        <router-link :to="{ name: 'About'}">ABOUT</router-link>
      </div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/organisms/AppBar'

export default {
  name: 'App',
  components: {
    AppBar
  },

  data: () => ({
    //
  }),
};
</script>
