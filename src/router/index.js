import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/table',
    	name:'table',
    	component:resolve=>require(['@/page/table.vue'],resolve)
    }
  ]
})
