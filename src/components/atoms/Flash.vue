<template>
  <transition v-if="status" name="fade">
    <v-alert
      :type="status"
      color="rgba(32, 33, 36, .9)"
      class="white--text flash-alert"
      dismissible
      width="300"
    >
      {{ message || "イベントを作成しました" }}
    </v-alert>
  </transition>
</template>

<script>
export default {
  name: 'Flash',
  computed: {
    status () {
      return this.$store.getters['flash/getStatus']
    },
    message () {
      return this.$store.getters['flash/getMessage']
    }
  }
}
</script>

<style lang="scss" scoped>
.flash-alert {
  position: fixed;
  bottom: 12px;
  left: 12px;
  z-index: 10;
}
</style>
