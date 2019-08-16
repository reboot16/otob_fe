import Axios from 'axios'

export default {
  state: {
    isAuthorized: {
      isLogin: false,
      userId: '',
      userRole: ''
    },
    doNeedLogout: false
  },
  getters : {
    isAuthorized: state => {
      return state.isAuthorized
    },
    doNeedLogout: state => {
      return state.doNeedLogout
    }
  },
  mutations: { 
    SET_AUTH : (state, payload) => {
      state.isAuthorized = payload
    },
    SET_DO_NEED_LOGOUT: (state, payload) => {
      state.doNeedLogout = payload
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
      Axios
        .post(config.API_AUTH + '/logout')
        .then(response => {
          
          if(response.data.code == 200){
            console.log('ini logout')
            console.log(response)
  
            let isAuthorized = {
              isLogin: false,
              userId: '',
              userRole: ''
            }
            commit('SET_AUTH', isAuthorized)
          }
          
          // dispatch('checkAuthorized')
          // console.log(response)
          // if(response.data.code ==  200){
          //   dispatch('removeCookie')
          //   // alert('Already logout')
          // }else{
          //   // alert("You're still not login")
          // }
        }).catch((e) => {
          console.log(e)
        })
    }
  }
}