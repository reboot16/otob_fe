import Axios from 'axios'
const API = 'http://localhost:9000/api/products'

export default {
  state: {
    products: [],
  },
  getters : {
    PRODUCTS  : state => {
      return state.products;
    },
  },
  mutations: { 
    SET_PRODUCT : (state, payload) => {
      state.products = payload
    },
    ADD_PRODUCT : (state, payload) => {
      state.products.push(payload)
    },
    UPDATE_PRODUCT : (state, payload) => {
      state.products[payload.index] = payload
    },
    UPDATE_PRODUCT_BY_NAME : (state, payload) => {
      state.products[payload.name] = payload
    },
    DELETE_PRODUCT : (state, payload) => { 
      state.products.splice(payload.index, 1) 
    },
    UPLOAD_PRODUCT : (state, payload) => {
      state.products.push(payload)
    },
  },
  actions : {
    getProducts  ({commit}) {  
      Axios
        .get(API + '/') 
        .then(response => {
          commit('SET_PRODUCT', response.data.data)
        })
        .catch((e) => {
          console.error(e)
          alert(e) 
        }); 
    },
    addProduct ({commit}, payload) {
      Axios
        .post(API + '/',
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          alert('Success add data')
          commit('ADD_PRODUCT', payload)
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
    updateProduct ({commit}, payload) {
      Axios
        .put(API + '/updateById/' + payload.productId,
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          commit('UPDATE_PRODUCT', payload)
          alert('Success update data')
        })
        .catch((e) => {
          console.error(e) 
        }); 
    },
    deleteProduct ({commit}, payload) {  
      Axios
        .delete(API + '/deleteById/' + payload.productId)
        .then(response => { 
          commit('DELETE_PRODUCT', payload) 
          alert('Success delete data')
        })
        .catch((e) => {
          console.error(e) 
        }); 
    },
    searchProduct({commit}, textSearch){
      if(textSearch == ''){
        Axios
          .get(API + '/') 
          .then(response => {
            commit('SET_PRODUCT', response.data.data)
          })
      }else{
        Axios
          .get(API + '/getByName/' + textSearch) 
          .then(response => {
            commit('SET_PRODUCT', response.data.data)
          })
      } 
    },
    uploadProduct({commit}, payload){ 
      Axios
        .post(API + '/import',
          payload,
          {'headers': {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          var length = response.data.data.length 
          var i = 0

          for(i=0; i<length; i++){ 
            if(response.data.data[i].productId == 0){ 
              //belum bisa auto update
              commit('UPDATE_PRODUCT_BY_NAME', response.data.data[i])
            }else{
              commit('ADD_PRODUCT', response.data.data[i])
            }
          }
          alert('Success upload data')
        })
        .catch((e) => {
          console.error(e)
        }); 
    },
  }  
}