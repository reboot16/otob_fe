import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const initProject = (to, from, next) => {
  // jika project id dari url sebelum dan sesudah berbeda, maka fetch ulang datanya
  if(from.params.projectId !== to.params.projectId){
    // store.dispatch('project/fetchProjectData',to.params.projectId)
    alert('a')
  }
  next()
}


export const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/pages/main/Login'),
      meta: {
        requiredAuth: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/main/Register')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/pages/user/User.vue'),
      meta: {
        requiredAuth: true, adminAuth: true, cashierAuth: false, customerAuth: false
      }
    },
    {
      path: '/thx',
      name: 'Thanks',
      component: () => import('@/pages/order/Thanks')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/pages/product/Product.vue'),
      meta: {
        requiredAuth: true, adminAuth: true, cashierAuth: false, customerAuth: false
      }
    },
    {
      path: '/product_cust',
      name: 'ProductCustomer',
      component: () => import('@/pages/product/ProductCustomer.vue'),
      meta: {
        requiredAuth: true, adminAuth: false, cashierAuth: false, customerAuth: true
      }
    },
    {
      path: '/orders/approvement/:id',
      name: 'order-approvement',
      component: () => import('@/components/order/Approvement.vue'),
      meta: {
        requiredAuth: true, adminAuth: false, cashierAuth: true, customerAuth: false
      }
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/components/order/ViewAllOrders.vue'),
      meta: {
        requiredAuth: true, adminAuth: false, cashierAuth: true, customerAuth: false
      }
    },
    {
      path: '/forbidden',
      name: 'ForbiddenAccess',
      component: () => import('@/pages/main/ForbiddenAccess.vue')
    },
    {
      path: '/page-not-found',
      name: 'PageNotFound',
      component: () => import('@/pages/main/PageNotFound.vue')
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: () => import('@/pages/main/PageNotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // const userType = $cookies.get('bazaar-role')  
  const userType = 'ROLE_ADMIN'
  const admin = 'ROLE_ADMIN'
  const cashier = 'ROLE_CASHIER'
  const customer = 'ROLE_CUSTOMER'

  if(!to.meta.requiredAuth){
    
  }
  if(to.meta.requiredAuth && to.meta.adminAuth && userType == admin) {
    next()
  }
  if(to.meta.requiredAuth && to.meta.cashierAuth && userType == cashier){
    next()
  }
  if(to.meta.requiredAuth && to.meta.customerAuth && userType == customer){
    next()
  }
  if(userType != admin && userType != cashier && userType != customer){
     
  }
  next();
})
