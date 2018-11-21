import Vue from 'vue'
import Router from 'vue-router'
import Randomizer from '@/views/Randomizer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'randomizer',
      component: Randomizer,
    },
    {
      path: '/maps',
      name: 'maps',
      component: () =>
        import(/* webpackChunkName: "maps" */ '@/views/Maps.vue'),
    },
  ],
})
