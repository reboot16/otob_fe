import Axios from 'axios'

const API = 'http://localhost:9000/api/auth'
export default {
  state: {
    isAuthorized: {
      isLogin: false,
      userId: 'nanihutagaol@gmail.com',
      userRole: 'ROLE_CUSTOMER'
    } 
  },
  getters : {
    isAuth: state => {
      return state.isAuthorized
    }
  },
  mutations: { 
    SET_AUTH : (state, payload) => {
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
    checkCookieAuth({commit}) {
      let isSessionExist = window.$cookies.isKey('SESSION')
      let isIdExist = window.$cookies.isKey('user-id')
      let isRoleExist = $cookies.isKey('user-role')
      
      alert(isSessionExist)
      alert(isIdExist)
      alert(isRoleExist)
      if(isSessionExist == true && isIdExist == true && isRoleExist == true) {
        $cookies.set('user-id', "null")
        alert('done')
      }
      else{
        $cookies.remove('SESSION')
        $cookies.remove('user-id')
        $cookies.remove('user-role')
        alert('no')
      }
    },
    doLogin({commit}, payload) {
      Axios
        .post(API + '/login', payload)
        .then(response => {
          console.log($cookies)
          console.log(response.data.data)
          // commit('SET_AUTH', response.data.data)
          alert('Login success')
        }).catch((e) => {
          console.log(e)
          // commit('SET_AUTH', response.data.data)
          alert('Login gagal')
        })
    },
    doLogout({commit}) {
      Axios
        .post(API + '/logout')
        .then(response => {
          console.log(response.data.data)
          // commit('SET_AUTH', response.data.data)
          alert('Logout success')
        }).catch((e) => {
          console.log(e)
          // commit('SET_AUTH', response.data.data)
          alert('Logout gagal')
        })
    },
  }
}