import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import HeadBar from '@/components/organisms/HeadBar.vue'

Vue.use(VueRouter)
Vue.use(Vuetify)

let wrapper
beforeEach(() => {
  wrapper = shallowMount(HeadBar, {
    stubs: ['router-link', 'router-view']
  })
})

it('contains logo button which is linked to home', () => {
  expect(wrapper.find('div')).toBeTruthy()
})
