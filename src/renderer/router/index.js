import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'to-doo',
      component: require('@/components/ToDoo').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
