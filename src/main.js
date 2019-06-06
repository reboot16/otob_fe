import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/ProductStore'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
