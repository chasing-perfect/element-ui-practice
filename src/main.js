// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'
import { Table,Breadcrumb,Input } from 'element-ui';
Vue.component(Table.name, Table);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(Input.name, Input);
//引入axios
import axios from 'axios'
Vue.prototype.$http=axios;


Vue.config.productionTip = false



router.beforeEach((to,from,next) => {
  if(to.meta.auth) {
    if(localStorage.getItem('userId')) {
        next();
    }else {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  }else {
    next();
  }
})

/* eslint-disable no-new */
Vue.use(Element)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
