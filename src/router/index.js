import Vue from 'vue'
import Router from 'vue-router' 
import Product from '@/components/product/Product'
import ProductCustomer from '@/components/product/ProductCustomer'
import Register from '@/components/main/Register'
import form from '@/components/product/form/Form'
import Login from '@/components/main/Login' 

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(Router)

export default new Router({
  routes: [ 
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
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }, 
    {
      path: '/form',
      component: form
    }
  ]
})
