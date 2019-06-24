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
      component: () => import('./components/main/Login.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('./components/product/Product.vue')
    },
    {
      path: '/product_cust',
      name: 'ProductCustomer',
      component: () => import('./components/product/ProductCustomer.vue')
    }, 
    {
      path: '/register',
      name: 'Register',
      component: () => import('./components/main/Register.vue')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('./components/user/User.vue')
    },
    {
      path: '/thx',
      name: 'Thanks',
      component: () => import('./components/order/Thanks.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('./components/cart/Cart.vue')
    },
    {
      path: '/orders/approvement/',
      name: 'order-approvement',
      component: () => import('./components/order/Approvement.vue')
    },
    {
      path: '/orders/',
      name: 'orders',
      component: () => import('./components/order/ViewAllOrders.vue')
    },
  ]
})
