import Axios from 'axios'

const API = 'http://localhost:9000/api/auth'
export default {
  state: {
    isAuthorized: []
  },
  getters : {
    isAuth: state => {
      return state.isAuthorized
    }
  },
  mutations: { 
    SET_AUTH : (state, payload) => {
      state.isAuthorized = payload
      $cookies.set('bazaar-isLogin', payload.login)
      $cookies.set('bazaar-userId', payload.userId)
      $cookies.set('bazaar-role', payload.role)
    },
    SET_AUTH_AUTO : (state, payload) => {
      state.isAuthorized = payload
    },
  },
  actions : {
    autoSetAuth({commit}){
      let payload = []
      payload.login = $cookies.get('bazaar-isLogin')
      payload.userId = $cookies.get('bazaar-userId')
      payload.role = $cookies.get('bazaar-role')
      
      commit('SET_AUTH_AUTO', payload)
    },
    doLogin({commit}, payload) {
      Axios
        .post(API + '/login', payload)
        .then(response => {
          console.log($cookies)
          console.log(response.data.data)
          commit('SET_AUTH', response.data.data)
          alert('Login success')
        }).catch((e) => {
          console.log(e)
          commit('SET_AUTH', response.data.data)
          alert('Login gagal')
        })
    },
    doLogout({commit}, payload) {
      Axios
        .post(API + '/logout', payload)
        .then(response => {
          console.log(response.data.data)
          commit('SET_AUTH', response.data.data)
          alert('Logout success')
        }).catch((e) => {
          console.log(e)
          commit('SET_AUTH', response.data.data)
          alert('Logout gagal')
        })
    },
  }
}