import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

const API = 'http://localhost:9000/api/carts'

export default {
  state: {
    carts: [], 
  },
  getters : {
    CARTS  : state => {
      return state.carts;
    }
  },
  mutations: { 
    SET_CART : (state, payload) => {
      state.carts = payload
    },
    ADD_TO_CART : (state, payload) => {
      state.carts.push(payload)
    },
    UPDATE_ITEM_CART : (state, payload) => {
      state.carts[payload.index] = payload
    },
    DELETE_ITEM_CART : (state, payload) => { 
      state.carts.splice(payload.index, 1) 
    },
  },
  actions : {
    getCart ({commit}) {
      Axios
        .get(API) 
        .then(response => {
          commit('SET_CART', response.data.data.cartItems)
        }).catch((e) => {
          alert(e)
        });
    },
    addToCart ({commit}, payload) { 
      Axios
        .post(API + '/' + payload.productId + '/' + payload.qty)
        .then(response => {
          commit('ADD_TO_CART', payload)
          alert('Success add to cart')
        })
        .catch((e) => {
          alert(e)
          console.error(e) 
        }); 
    },
    updateItemCart ({commit}, payload) { 
      Axios
        .put(API + '/' + payload.productId + '/' + payload.qty)
        .then(response => {
          if(response.data.code == 500){
            alert('stock not available');
          }else{
            commit('UPDATE_ITEM_CART', payload)
          }
        })
        .catch((e) => {
          alert(e)
          console.error(e) 
        }); 
    },
    deleteItemCart ({commit}, payload) {
      Axios
        .delete(API + '/' + payload.productId)
        .then(response => {
          commit('DELETE_ITEM_CART', payload) 
          alert('Success delete from cart')
        })
        .catch((e) => {
          alert(e)
          console.error(e) 
        }); 
    },
    orderItemCart ({commit}, email) {
      Axios
        .get(API + '/checkout') 
        .then(response => {
          alert('okk')
          // commit('SET_CART', response.data.data.cartItems)
        }).catch((e) => {
          alert(e)
        });
    },
  }  
}