import Axios from 'axios'

export default {
  state: {
    isAuthorized: {
      isLogin: false,
      userId: '',
      userRole: ''
    },
    isValid: false
  },
  getters : {
    isAuthorized: state => {
      return state.isAuthorized
    },
    isValid: state => {
      return state.isValid
    }
  },
  mutations: { 
    SET_AUTH : (state, payload) => {
      state.isAuthorized = payload
    },
    SET_IS_VALID: (state, payload) => {
      state.isValid = payload
    }
  },
  actions : {
    async checkAuthorized({commit, dispatch}){
      let isLoginExist = $cookies.isKey(config.key_login)
      let isIdExist = $cookies.isKey(config.key_id)
      let isRoleExist = $cookies.isKey(config.key_role)
      
      let payload = {}
      if(isLoginExist && isIdExist && isRoleExist){
        dispatch('getCookie', payload)
        console.log('cookie found' + payload)
      }else {
        dispatch('removeCookie')
        // dispatch('doLogout')
        // console.log('cookie remove')
      }
      await commit('SET_AUTH', payload)
    },
    getCookie({commit}, payload) {
      payload.isLogin = $cookies.get(config.key_login)
      payload.userId = $cookies.get(config.key_id)
      payload.userRole = $cookies.get(config.key_role)
      return payload
    },
    removeCookie({commit}) {
      $cookies.remove(config.key_login)
      $cookies.remove(config.key_id)
      $cookies.remove(config.key_role)
    },
    async doLogin({commit, dispatch}, payload) {
      await Axios
        .post(config.API_AUTH + '/login', payload)
        .then(response => {
          console.log(response)
          if(response.data.data !== 'Accepted'){
            alert('Sorry your username/password is unauthorized')
          }else{
            // commit('SET_AUTH', response.data.data)
            dispatch('checkAuthorized')
            // alert('Login success')
          }
        }).catch((e) => {
          console.log(e)
        })
    },
    async doLogout({commit, dispatch}) {
      await Axios
        .post(config.API_AUTH + '/logout')
        .then(response => {
          if(response.data.code == 200){
            let isAuthorized = {}
            commit('SET_AUTH', isAuthorized)
          }
        }).catch((e) => {
          console.log(e)
        })
    },
    validateCookie ({commit, dispatch}) {
      console.log('check is valid')
      Axios
        .post(config.API_PRODUCT)
        .then(response => {
          console.log('is valid true' + response.data.code)
          
          if(response.data.code == 400) {
            // $cookies.remove(config.key_login)
            // $cookies.remove(config.key_id)
            // $cookies.remove(config.key_role)
            // console.log('cookie deleted')
            // dispatch('doLogout')
          }
        }).catch((e) => {
          console.log('is valid false')
          let isAuthorized = {}
          commit('SET_AUTH', isAuthorized)
        })
    }
  }
}