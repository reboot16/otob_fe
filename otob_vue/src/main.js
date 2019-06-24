import Vue from 'vue'
import App from './App.vue'
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
