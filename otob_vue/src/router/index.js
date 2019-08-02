import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/pages/main/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/main/Register')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/pages/product')
    },
    {
      path: '/product_cust',
      name: 'ProductCustomer',
      component: () => import('@/pages/product')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/pages/user/User.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/pages/order/ViewAllOrders.vue')
    },
    {
      path: '/orders/approvement/:id',
      name: 'order-approvement',
      component: () => import('@/pages/order/Approvement.vue')
    },
    {
      path: '/thx',
      name: 'Thanks',
      component: () => import('@/pages/thx-order')
    },
    {
      path: '/not-found',
      name: 'PageNotFound2',
      component: () => import('@/pages/main/PageNotFound.vue')
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: () => import('@/pages/main/PageNotFound.vue')
    }
  ]
})
