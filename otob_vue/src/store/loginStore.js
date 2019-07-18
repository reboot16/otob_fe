import Axios from 'axios'
const API = 'http://localhost:9000/api/users'

export default {
  state: {
    userLogin: {
      email : 'nanihutagaol@gmail.com',
      role : 'ROLE_CUSTOMER'
    },
    isLogin: false
  },
  getters : {
    USER_LOGIN: state => {
      return state.userLogin
    },
    IS_LOGIN: state => {
      return state.isLogin
    }
  },
  mutations: { 
    SET_LOGIN : (state, payload) => {
      state.users = payload
    },
    DELETE_USER: (state, payload) => { 
      state.users.splice(payload.index, 1) 
    },
  },
  actions : { 
    getUser  ({commit}) {  
      Axios
        .get(API) 
        .then(response => {
          commit('SET_LOGIN', response.data.data)
        })
        .catch((e) => {
          console.error(e)
          alert(e) 
        }); 
    },
  }  

}