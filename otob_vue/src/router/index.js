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
      component: () => import('@/components/main/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/main/Register')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/pages/user/User')
    },
    {
      path: '/thx',
      name: 'Thanks',
      component: () => import('@/pages/order/Thanks')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/pages/product/Product')
    },
    {
      path: '/product_cust',
      name: 'ProductCustomer',
      component: () => import('@/pages/product/ProductCustomer')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/pages/cart/Cart')
    },
  ]
})
