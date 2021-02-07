import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '@/views/Home.vue'
import Image from '@/views/Image.vue'
import Bhwa from '@/views/Bhwa.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

export function createRouter() {
    const routes = [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/:year/:month/:day/:time',
        name: 'Image',
        component: Image
      },
      {
        path: '/bhwa',
        name: 'Bhwa',
        component: Bhwa
      }
    ]

    const router = new VueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes
    })

    return router;
}