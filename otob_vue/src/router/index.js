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
      path: '/product',
      name: 'Product',
      component: () => import('@/pages/Product')
    },
    {
      path: '/product_cust',
      name: 'ProductCustomer',
      component: () => import('@/pages/ProductCustomer')
    },
    {
      path: '/user',
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
      name: 'order_approvement',
      component: () => import('@/pages/Order/Approvement.vue')
    },
    {
      path: '/orders/customer',
      name: 'customerOrder',
      component: () => import('@/pages/Order/Orders.vue')
    },
    {
      path: '/thx',
      name: 'Thanks',
      component: () => import('@/pages/Thx-Order')
    },
    {
      path: '/nota',
      name: 'Nota',
      component: () => import('@/components/Nota')
    },
    {
      path: '/not-found',
      name: 'PageNotFound2',
      component: () => import('@/pages/Main/PageNotFound.vue')
    }
  ]
})