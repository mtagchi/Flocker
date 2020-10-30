import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
  theme: {
    themes: {
      light: {
        primary: colors.brown,
        secondary: "#F5F4F1",
        twitter: colors.blue,
        accent: colors.shades.black,
        error: colors.red.accent3
      }
    }
  }
})
