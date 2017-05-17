import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Products from '@/components/Products'
import Notices from '@/components/Notices'
import NewsItems from '@/components/NewsItems'
import newsDetails from '@/components/NewsDetails'
Vue.use(Router)

export default new Router({
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
          path: 'tech',
          component: NewsItems
        },
        {
          path: 'sport',
          component: NewsItems
        },
        {
          path: 'edu',
          component: NewsItems
        },
        {
          path: 'ent',
          component: NewsItems
        },
        {
          path: 'travel',
          component: NewsItems
        },
        {
          path: 'war',
          component: NewsItems
        },
        {
          path: 'money',
          component: NewsItems
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
      component:newsDetails
    }
  ]
})
