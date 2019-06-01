import Vue from 'vue'
import Router from 'vue-router'
import List from '@/views/page/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
