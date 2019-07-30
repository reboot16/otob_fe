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
      console.log(API + '/' + payload.productId + '/' + payload.qty)
      Axios
        .post(API + '/' + payload.productId + '/' + payload.qty)
        .then(response => {
          if(response.data.code == 200) {
            payload.productName = payload.name
            payload.productPrice = payload.offerPrice
            
            commit('ADD_TO_CART', payload)
            alert('Success add to cart')
          }
          else{
            console.log(payload.name)
            alert(response.data.message)
          }
        })
        .catch((e) => {
          alert(e)
          console.error(e) 
        }); 
    },
    updateItemCart ({commit}, payload) {
      console.log(API + '/' + payload.productId + '/' + payload.qty)
  
      Axios
        .put(API + '/' + payload.productId + '/' + payload.qty)
        .then(response => {
          if(response.data.code == 200) {
            alert('Success update cart')
          }
          else{
            alert(response.data.message)
            if(payload.type == true){
              payload.qty--
            }else{
              payload.qty++
            }
          }
          commit('UPDATE_ITEM_CART', payload)
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
    orderItemCart ({commit}) {
      Axios
        .get(API + '/checkout') 
        .then(response => {
          alert('okk')
          commit('SET_CART', response.data.data.cartItems)
        }).catch((e) => {
          alert(e)
        });
    },
  }  
}