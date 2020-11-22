<template>
  <v-app-bar
    app
    color="secondary"
  >
    <logo/>

    <v-spacer/>

    <v-menu
      v-if="isLoggedIn"
      bottom
      min-width="40px"
      rounded
      offset-y
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <user-icon :user="user"/>
        </v-btn>
      </template>
      <v-card width="168">
        <v-list>
          <v-list-item>
            <a :href="'https://twitter.com/' + user.username" target="_blank">
              <v-list-item-icon class="mt-1 mb-1 mr-3">
                <user-icon :user="user"/>
              </v-list-item-icon>
            </a>
            <v-list-item-content class="pt-1 pb-1">
              <span class="text-truncate">{{ user.displayName }}</span>
              <v-hover v-slot="{ hover }">
                <a
                  class="body-2 text-decoration-none text-truncate"
                  :class="{ 'text-decoration-underline': hover }"
                  :href="'https://twitter.com/' + user.username"
                  target="_blank"
                >@{{ user.username }}</a>
              </v-hover>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider/>
        <v-list dense>
          <v-list-item link>
            <v-list-item-icon class="mr-3">
              <v-icon>logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title @click="logout">ログアウト</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>

    <login-btn v-else :user="user" v-on:login="login"/>

    <loading/>
  </v-app-bar>
</template>

<script>
import firebase from '@/plugins/firebase'
import Logo from '@/components/atoms/Logo'
import LoginBtn from '@/components/molecules/LoginBtn'
import UserIcon from '@/components/atoms/UserIcon'
import Loading from '@/components/atoms/Loading'

export default {
  name: 'HeadBar',
  components: {
    Logo,
    LoginBtn,
    UserIcon,
    Loading
  },
  created () {
    firebase.onAuth()
  },
  computed: {
    user () {
      return this.$store.getters['user/get']
    },
    isLoggedIn () {
      return this.$store.getters['user/isLoggedIn']
    }
  },
  methods: {
    login () {
      firebase.login()
    },
    logout () {
      firebase.logout()
    }
  }
}
</script>

<style scoped lang="scss">
header {
  box-shadow: 0px 2px 4px -1px rgba(62, 39, 35, 0.2), 0px 4px 5px 0px rgba(62, 39, 35, 0.14), 0px 1px 10px 0px rgba(62, 39, 35, 0.12) !important;
}
</style>
