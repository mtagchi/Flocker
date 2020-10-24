<template>
  <v-app>
    <app-bar/>
    <v-main>
      <hello-world/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/organisms/AppBar'
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  components: {
    AppBar,
    HelloWorld
  },

  data: () => ({
    //
  }),
};
</script>
