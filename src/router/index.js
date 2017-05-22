import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Products from '@/components/Products'
import Notices from '@/components/Notices'
import NewsDetails from '@/components/NewsDetails'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  history:true,
  routes: [
    {
      path: '*',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/news',
      component: News,
      children:[
        {
          path:'/',
          redirect:'tech'
        },
        {
          path: 'tech',
          component: resolve => require(['@/components/NewsItems/Tech.vue'], resolve)
        },
        {
          path: 'sport',
          component: resolve => require(['@/components/NewsItems/Sport.vue'], resolve)
        },
        {
          path: 'edu',
          component: resolve => require(['@/components/NewsItems/Edu.vue'], resolve)
        },
        {
          path: 'ent',
          component: resolve => require(['@/components/NewsItems/Ent.vue'], resolve)
        },
        {
          path: 'travel',
          component: resolve => require(['@/components/NewsItems/Travel.vue'], resolve)
        },
        {
          path: 'war',
          component: resolve => require(['@/components/NewsItems/War.vue'], resolve)
        },
        {
          path: 'money',
          component: resolve => require(['@/components/NewsItems/Money.vue'], resolve)
        }
      ]
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/notices',
      component: Notices
    },
    {
      path:'/newsDetails/:id',
      component:NewsDetails
    }
  ]
})
