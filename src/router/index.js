import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/page/login/login.vue'],resolve)
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        auth: true
      },
      component: resolve => require(['@/page/index/index.vue'],resolve)
    },
    {
    	path:'/table',
    	name:'table',
    	component:resolve=>require(['@/page/table.vue'],resolve)
    }
  ]
})
