// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import stores from './store/store'

Vue.use(MintUI);


Vue.config.productionTip = false
require('./assets/css/base.css')
/* eslint-disable no-new */
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
