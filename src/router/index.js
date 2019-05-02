import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Product from '@/components/product/Product'
import ProductCustomer from '@/components/product/ProductCustomer'
import Register from '@/components/main/Register'
import Login from '@/components/main/Login'
import Header from '@/components/main/Header'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/product_cust',
      name: 'ProductCustomer',
      component: ProductCustomer
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header, 
    },
  ]
})
