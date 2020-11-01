<template>
  <v-app-bar
    app
    color="secondary"
  >
    <logo/>
    <v-spacer/>
    <v-menu
      v-if="user.uid"
      bottom
      min-width="40px"
      rounded
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <user-icon :user="user"/>
        </v-btn>
      </template>
      <v-card width="144">
        <v-list>
          <v-list-item>
            <v-list-item-icon class="mt-1 mb-1 mr-3">
              <user-icon :user="user"/>
            </v-list-item-icon>
            <v-list-item-content>
              <span>{{ user.displayName }}</span>
              <span>{{ user.uid }}</span>
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
    <login-btn v-else :user="user"/>
  </v-app-bar>
</template>

<script>
import firebase from 'firebase'
import Logo from '@/components/atoms/Logo'
import LoginBtn from '@/components/atoms/LoginBtn'
import UserIcon from '@/components/atoms/UserIcon'

export default {
  name: 'HeadBar',
  components: {
    Logo,
    LoginBtn,
    UserIcon
  },
  data: () => ({
    user: {}
  }),
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {}
    })
  },
  methods: {
    logout() {
      firebase.auth().signOut()
    }
  }
}
</script>

<style scoped lang="scss">
header {
  box-shadow: 0px 2px 4px -1px rgba(62, 39, 35, 0.2), 0px 4px 5px 0px rgba(62, 39, 35, 0.14), 0px 1px 10px 0px rgba(62, 39, 35, 0.12) !important;
}
</style>
