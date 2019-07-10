import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/pages/main/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/main/Register')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/pages/user/User.vue')
    },
    {
      path: '/thx',
      name: 'Thanks',
      component: () => import('@/pages/order/Thanks')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/pages/product/Product.vue')
    },
    {
      path: '/product_cust',
      name: 'ProductCustomer',
      component: () => import('@/pages/product/ProductCustomer.vue')
    }
  ]
})
