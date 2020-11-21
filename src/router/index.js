import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from '@/plugins/firebase'
import store from '@/store/index'
import Home from '@/views/Home'
import EventNewPage from '@/views/EventNewPage'
import EventEditPage from '@/views/EventEditPage'
import EventShowPage from '@/views/EventShowPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/events/new',
    name: 'EventNewPage',
    component: EventNewPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/events/:id/edit',
    name: 'EventEditPage',
    component: EventEditPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/events/:id',
    name: 'EventShowPage',
    component: EventShowPage
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('loading/start')
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLoggedIn = store.getters['user/isLoggedIn']
  if (requiresAuth) {
    if (isLoggedIn) {
      next()
    } else {
      firebase.login(() => {
        next({
          path: to.fullPath
        })
      })
    }
  } else {
    next()
  }
})

export default router
