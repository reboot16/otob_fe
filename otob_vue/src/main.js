import Vue from 'vue'
import App from './components/App/App.vue'
import {router} from "./router/index.js"
import store from './store'
import './registerServiceWorker'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import FontAwesome from 'font-awesome/css/font-awesome.css'
import Axios from 'axios'
import VueCookies from 'vue-cookies'
import config from '../config'

Vue.use(Bootstrap)
Vue.use(BootstrapVue)
Vue.use(FontAwesome)
Vue.use(VueCookies)
window.config = config

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

Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export { vm }

// const vm = new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })
//
// export { vm }
