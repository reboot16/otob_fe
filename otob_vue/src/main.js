import Vue from 'vue'
import App from './components/App/App.vue'

import {router} from "./router/index.js"
import store from './store'
import './registerServiceWorker' 

import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import FontAwesome from 'font-awesome/css/font-awesome.css'
import Axios from 'axios'

Axios.interceptors.request.use(
    function (config) {
      config.withCredentials = true
      config.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      return config
    }
)

Vue.use(Bootstrap)
Vue.use(BootstrapVue)
Vue.use(FontAwesome)

import VueCookies from 'vue-cookies'
import VueLocalStorage from 'local-storage'
Vue.use(VueCookies) 
Vue.use(VueLocalStorage)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
