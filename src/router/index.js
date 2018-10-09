import Vue from 'vue'
import Router from 'vue-router'
import Subscription from '@/components/Subscription'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Subscription',
      component: Subscription
    }
  ]
})
