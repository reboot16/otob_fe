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
      component: () => import('@/pages/Main/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/Main/Register')
    },
    {
      path: '/Product',
      name: 'Product',
      component: () => import('@/pages/Product')
    },
    {
      path: '/product_cust',
      name: 'ProductCustomer',
      component: () => import('@/pages/ProductCustomer')
    },
    {
      path: '/User',
      name: 'User',
      component: () => import('@/pages/User/User.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/pages/Order/ViewAllOrders.vue')
    },
    {
      path: '/orders/approvement/:id',
      name: 'Order-approvement',
      component: () => import('@/pages/Order/Approvement.vue')
    },
    {
      path: '/thx',
      name: 'Thanks',
      component: () => import('@/pages/Thx-Order')
    },
    {
      path: '/not-found',
      name: 'PageNotFound2',
      component: () => import('@/pages/Main/PageNotFound.vue')
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: () => import('@/pages/Main/PageNotFound.vue')
    }
  ]
})