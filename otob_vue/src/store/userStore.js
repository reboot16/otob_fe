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
      console.log('masuk')
      Axios
        .post(API + '/customer/register',
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          if(response.data.code == 403) {
            alert(response.data.message)
          }else{
            alert('Success add new User')
            commit('ADD_USER', payload)
          }
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
    registerCashier ({commit}, payload) {
      Axios
        .post(API + '/cashier/register',
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          if(response.data.code == 403) {
            alert(response.data.message)
          }else{
            alert('Success add new User')
            commit('ADD_USER', payload)
          }
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
    registerAdmin ({commit}, payload) {
      Axios
        .post(API + '/admin/register',
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          if(response.data.code == 403) {
            alert(response.data.message)
          }else{
            alert('Success add new User')
            commit('ADD_USER', payload)
          }
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    }
  }  

}