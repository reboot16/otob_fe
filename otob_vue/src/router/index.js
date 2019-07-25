import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// const initProject = (to, from, next) => {
//   // jika project id dari url sebelum dan sesudah berbeda, maka fetch ulang datanya
//   if(from.params.projectId !== to.params.projectId){
//     store.dispatch('project/fetchProjectData',to.params.projectId)
//   }
//   next()
// }


export const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
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
    },
    {
      path: '/test',
      name: 'ProdCust',
      component: () => import('@/components/TableProductCustomer')
    },
    {
      path: '/button',
      name: 'ProdCustHeader',
      component: () => import('@/components/ProductModifyDropdown')
    },
    {
      path: '/orders/approvement/:id',
      name: 'order-approvement',
      component: () => import('@/components/order/Approvement.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/components/order/ViewAllOrders.vue')
    },
  ]
})

// redirect to login if not logged in
router.beforeEach((to, from, next) => {
  //redirect to login if not logged in and trying to access restricted page
  // http://jasonwatmore.com/post/2018/07/14/vue-vuex-user-registration-and-login-tutorial-example#loginpage-vue
  
  next();
})
