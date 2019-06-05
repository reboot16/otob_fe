import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

const API = 'http://localhost:9000/api/products'

export default new Vuex.Store({
  state: {
      products: [],
      newProduct: ''
  },
  getters : {
      PRODUCTS  : state =>{
          return state.products;
      }
  },
  mutations: {
      SET_PRODUCT (state, payload) {
          state.products = payload
      },
    //   SET_PRODUCT : (state, payload) => {
    //     state.products = payload
    //   },
      ADD_PRODUCT : (state, payload) => {
          state.products.push(payload)
      }
  },
  actions : {
      GET_PRODUCT  ( context ) {
        //   let { data } = await Axios.get(API + '/getAll')
        //   context.commit('SET_PRODUCT', data)
          Axios
            .get(API + '/getAll') 
            .then(response => {
                context.commit('SET_PRODUCT', response.data.data)
          })
      },
      SAVE_PRODUCT : async (context, payload) => {
          let { data } = await Axios.post(API + '/create')
          context.commit('ADD_PRODUCT', payload)
      }
  }  
})