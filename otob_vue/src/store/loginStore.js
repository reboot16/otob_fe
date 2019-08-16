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
    async validateClient({commit, dispatch}){
      await Axios
        .get(config.API_PRODUCT)
        .then(response => {
          if(response.data.data.message == 'Invalid client'){
            dispatch('setValidate', false)
          }
          else{
            dispatch('setValidate', true)
          }
        }).catch((e) => {
          dispatch('setValidate', false)
        })
    },
    async setValidate ({commit}, payload) {
      console.log('set valid')
      console.log(payload)
      await commit('SET_IS_VALID', payload)
    },
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
        console.log('cookie remove')
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
    doLogout({commit, dispatch}) {
      console.log('syudah logout')
      Axios
        .post(config.API_AUTH + '/logout')
        .then(response => {
          let payload = {
            isLogin: false,
            userId: '',
            userRole: ''
          }
          commit('SET_AUTH', payload)
        }).catch((e) => {
          console.log(e)
        })
    }
  }
}