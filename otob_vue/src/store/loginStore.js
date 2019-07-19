import Axios from 'axios'
const API = 'http://localhost:9000/api/auth'

export default {
  state: {
    isAuthorized: []
  },
  getters : {
    IS_AUTH: state => {
      return state.isAuthorized
    }
  },
  mutations: { 
    SET_AUTH : (state, payload) => {
      state.isLogin = payload
      $cookies.set('bazaar-isLogin', payload.login)
      $cookies.set('bazaar-userId', payload.userId)
      $cookies.set('bazaar-role', payload.role)
    }
  },
  actions : {
    doLogin({commit}, payload) {
      Axios
        .post(API + '/login', payload)
        .then(response => {
          commit('SET_AUTH', response.data.data)
          alert('Login success')
        }).catch((e) => {
        commit('SET_AUTH', response.data.data)
        alert('Login gagal')
      })
    },
    doLogout({commit}, payload) {
      Axios
        .post(API + '/logout', payload)
        .then(response => {
          commit('SET_AUTH', response.data.data)
          alert('Logout success')
        }).catch((e) => {
        commit('SET_AUTH', response.data.data)
        alert('Logout gagal')
      })
    },
  }
}