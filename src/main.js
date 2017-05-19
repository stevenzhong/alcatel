// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import store from './store/store'
import filters from './filters'
import Loading from '@/components/Loading'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.use(MintUI);
Vue.use(Loading);
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

Vue.config.productionTip = false
require('./assets/css/base.css')
/* eslint-disable no-new */
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
