import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import HeadBar from '@/components/organisms/HeadBar.vue'

Vue.use(VueRouter)
Vue.use(Vuetify)

let wrapper
beforeEach(() => {
  wrapper = shallowMount(App, {
    stubs: ['router-link', 'router-view']
  })
})

describe('App.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('contains HeadBar', () => {
    expect(wrapper.findComponent(HeadBar)).toBeTruthy()
  })
})
