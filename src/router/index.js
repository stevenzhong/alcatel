import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Products from '@/components/Products'
import Notices from '@/components/Notices'
import NewsDetails from '@/components/NewsDetails'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      children:[
        {
          path:'/news/:id',
          component:NewsDetails
        }
      ] 
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/notices',
      name: 'Notices',
      component: Notices
    }
  ]
})
