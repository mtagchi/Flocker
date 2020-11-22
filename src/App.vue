<template>
  <v-app>
    <head-bar/>
    <v-main>
      <transition mode="out-in">
        <router-view/>
      </transition>
      <flash/>
    </v-main>
    <foot-bar/>
  </v-app>
</template>

<script>
import HeadBar from '@/components/organisms/HeadBar'
import Flash from '@/components/atoms/Flash'
import FootBar from '@/components/molecules/FootBar'

export default {
  name: 'App',
  components: {
    HeadBar,
    Flash,
    FootBar
  }
}
</script>

<style lang="scss">
@import "@/styles/main.scss";

.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
