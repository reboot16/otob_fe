import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/products',
      name: 'ProductCustomer',
      component: () => import('@/pages/Product')
    },
    {
      path: '/',
      name: 'DirectProductCustomer',
      component: () => import('@/pages/Product')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/CustomPages/LoginPage')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/CustomPages/RegisterPage')
    },
    {
      path: '/users',
      name: 'User',
      component: () => import('@/pages/User/User.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/pages/Order/ViewAllOrders.vue')
    },
    {
      path: '/orders/:id/detail',
      name: 'orderAprovement',
      component: () => import('@/pages/Order/Approvement.vue')
    },
    {
      path: '/orders/customer',
      name: 'customerOrder',
      component: () => import('@/pages/Order/Orders.vue')
    },
    {
      path: '/orders/customer/:id/detail',
      name: 'customer-order-detail',
      component: () => import('@/pages/Order/CustomerDetail.vue')
    },
    {
      path: '/orders/thank-you/:id',
      name: 'Thanks',
      component: () => import('@/pages/Thx-Order')
    },
    {
      path: '/orders/:id/print-note',
      name: 'PrintNote',
      component: () => import('@/pages/Nota')
    },
    {
      path: '/not-found',
      name: 'PageNotFound',
      component: () => import('@/pages/CustomPages/NotFoundPage.vue')
    },
    {
      path: '*',
      name: 'DirectPageNotFound',
      component: () => import('@/pages/CustomPages/NotFoundPage.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = "Blibli Bazaar"
  next()
})