<template>
  <v-app-bar
    app
    color="secondary"
  >
    <logo/>
    <v-spacer/>
    <login-btn/>

  </v-app-bar>
</template>

<script>
import Logo from '@/components/atoms/Logo'
import LoginBtn from '@/components/atoms/LoginBtn'

export default {
  name: 'HeadBar',
  components: {
    Logo,
    LoginBtn
  }
}
</script>

<style scoped lang="scss">
header {
  box-shadow: 0px 2px 4px -1px rgba(62, 39, 35, 0.2), 0px 4px 5px 0px rgba(62, 39, 35, 0.14), 0px 1px 10px 0px rgba(62, 39, 35, 0.12) !important;
}
</style>
