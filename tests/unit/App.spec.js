import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import HeadBar from '@/components/organisms/HeadBar.vue'

Vue.use(VueRouter)
Vue.use(Vuetify)

describe('App.vue', () => {
  const wrapper = shallowMount(App, {
    stubs: ['router-link', 'router-view']
  })
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('contains HeadBar', () => {
    expect(wrapper.findComponent(HeadBar)).toBeTruthy()
  })
})

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
