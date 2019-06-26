import Vue from 'vue'
import App from './App.vue'

import VueSessionStorage from 'session-storage'
Vue.use(VueSessionStorage)

import VueLocalStorage from 'local-storage'
Vue.use(VueLocalStorage)


import router from './router'
import store from './store'
import './registerServiceWorker'

import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Bootstrap)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
