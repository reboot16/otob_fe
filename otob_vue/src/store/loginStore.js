import Axios from 'axios'

const API = 'http://localhost:9000/api/auth'
export default {
  state: {
    isAuthorized: {
      isLogin: true,
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
      payload.login = $cookies.get('is-login')
      payload.userId = $cookies.get('User-id')
      payload.role = $cookies.get('User-role')
      
      commit('SET_AUTH_AUTO', payload)
    },
    checkCookieAuth({commit}) {
      let isSessionExist = window.$cookies.isKey('SESSION')
      let isIdExist = window.$cookies.isKey('User-id')
      let isRoleExist = $cookies.isKey('User-role')
      
      alert(isSessionExist)
      alert(isIdExist)
      alert(isRoleExist)
      if(isSessionExist == true && isIdExist == true && isRoleExist == true) {
        $cookies.set('User-id', "null")
        alert('done')
      }
      else{
        $cookies.remove('SESSION')
        $cookies.remove('User-id')
        $cookies.remove('User-role')
        alert('no')
      }
    },
    doLogin({commit}, payload) {
      Axios
        .post(API + '/login', payload)
        .then(response => {
          if(response.data.code == 400){
            alert('wrong username/password')
          }else{
            commit('SET_AUTH', response.data.data)
            alert('Login success')
          }
          console.log(response)
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
          console.log(response.data)
          response.data.data.isLogin = false
          // commit('SET_AUTH', response.data.data)
          alert('Logout success')
        }).catch((e) => {
          // console.log(e)
          alert('Logout gagal')
        })
    }
  }
}