import Vue from 'vue'
import App from './App.vue'

import VueLocalStorage from 'local-storage'
Vue.use(VueLocalStorage)

import router from './router'
import store from './store'
import './registerServiceWorker'

import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import FontAwesome from 'font-awesome/css/font-awesome.css'

Vue.use(Bootstrap)
Vue.use(BootstrapVue)
Vue.use(FontAwesome)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
