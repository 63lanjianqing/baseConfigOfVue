// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import ElementUI from 'element-ui'
import Router from 'vue-router'

//样式文件
import '@/assets/css/main.css'
import '@/assets/css/common.css'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Router)

const router = new Router({//懒加载
    routes: [
        { path: '', name: 'login', component: () =>import ('@/components/login') }
        
    ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
