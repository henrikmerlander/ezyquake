import Vue from 'vue'
import Router from 'vue-router'
import RandomMap from '@/views/RandomMap.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/randomizer',
    },
    {
      path: '/randomizer',
      name: 'randomizer',
      component: RandomMap,
    },
    {
      path: '/maps',
      name: 'maps',
      component: () =>
        import(/* webpackChunkName: "maps" */ '@/views/Maps.vue'),
    },
  ],
})
