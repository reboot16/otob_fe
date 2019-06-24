import Axios from 'axios'
const API = 'http://localhost:9000/api/users'

export default {
  state: {
    users : [], 
  },
  getters : {
    USERS : state => {
      return state.users
    },
  },
  mutations: { 
    SET_USER : (state, payload) => {
      state.users = payload
    },
    ADD_USER : (state, payload) => {
      state.users.push(payload)
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
          commit('SET_USER', response.data.data)
        })
        .catch((e) => {
          console.error(e)
          alert(e) 
        }); 
    },
    registerCustomer ({commit}, payload) {
      Axios
        .post(API + '/register/customer',
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          alert('Success add new user')
          commit('ADD_USER', payload)
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
    registerCashier ({commit}, payload) {
      Axios
        .post(API + '/register/cashier',
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          alert('Success add new user')
          commit('ADD_USER', payload)
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
    registerAdmin ({commit}, payload) {
      Axios
        .post(API + '/register/admin',
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          alert('Success add new user')
          commit('ADD_USER', payload)
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
    deleteUser({commit}, payload) {  
      Axios
        .delete(API + '/delete/' + payload.email)
        .then(response => { 
          commit('DELETE_USER', payload) 
          alert('Success delete user')
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
  }  

}