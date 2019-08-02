import Axios from 'axios'

const API = 'http://localhost:9000/api/auth'
export default {
  state: {
    isAuthorized: {
      isLogin: true,
      userId: 'nanihutagaol@gmail.com',
      userRole: 'ROLE_ADMIN'
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
      payload.userId = $cookies.get('user-id')
      payload.role = $cookies.get('user-role')
      
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
          console.log(response.data.data)
          // commit('SET_AUTH', response.data.data)
          alert('Logout success')
        }).catch((e) => {
          console.log(e)
          // commit('SET_AUTH', response.data.data)
          alert('Logout gagal')
        })
    },
    doRegister({commit}, payload) {
      Axios
        .post('http://localhost:9000/api/users/admin/register', payload)
        .then(response => {
          console.log(response)
          alert('Register success')
        }).catch((e) => {
          console.error(e)
        })
    }
  }
}