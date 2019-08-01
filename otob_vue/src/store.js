import Vue from 'vue'
import Vuex from 'vuex' 

import login from '@/store/loginStore'
import user from '@/store/userStore'
import product from '@/store/productStore'
import cart from '@/store/cartStore'
import order from '@/store/orderStore'

Vue.use(Vuex)

const vueConfig = require('vue-config')
const configs = {
  CONF: 'http://localhost:9000/api' // It's better to require a config file
}

Vue.use(vueConfig, configs)

export default new Vuex.Store({
  modules: {
    login,
    user,
    product,
    cart,
    order
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
