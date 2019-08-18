import Axios from 'axios'

export default {
  state: {
    products: [],
    totalPages: 0
  },
  getters : {
    PRODUCTS  : state => {
      return state.products;
    },
    TOTAL_PAGES : state => {
      return state.totalPages
    }
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
    SET_TOTAL_PAGES : (state, payload) => {
      state.totalPages = payload
    },
  },
  actions : {
    getProducts  ({commit}) {  
      Axios
        .get(config.API_PRODUCT)
        .then(response => {
          let result = response.data.data
          commit('SET_PRODUCT', result.products)
          commit('SET_TOTAL_PAGES', result.totalPage)
        })
        .catch((e) => {
          console.error(e)
        }); 
    },
    getProductsPageable ({commit}, payload) {
      Axios
        .get(config.API_PRODUCT + '?page=' + payload.page + '&size=' + payload.size)
        .then(response => {
          let result = response.data.data
          commit('SET_PRODUCT', result.products)
          commit('SET_TOTAL_PAGES', result.totalPage)
        })
        .catch((e) => {
          console.error(e)
        });
    },
    addProduct ({commit}, payload) {
      Axios
        .post(config.API_PRODUCT,
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          if(response.data.code == 200){
            commit('ADD_PRODUCT', response.data.data)
            // alert('Success add data')
          }else{
            alert('Something wrong')
          }
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
    updateProduct ({commit}, payload) {
      Axios
        .put(config.API_PRODUCT + '/' + payload.productId,
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          if(response.data.code == 200){
            commit('UPDATE_PRODUCT', payload)
            // alert('Success update data')
          }else{
            alert('access denied')
          }
        })
        .catch((e) => {
          console.error(e) 
        }); 
    },
    deleteProduct ({commit}, payload) {  
      Axios
        .delete(config.API_PRODUCT + '/' + payload.productId)
        .then(response => {
          if(response.data.code == 200){
            commit('DELETE_PRODUCT', payload)
            // alert('Success delete data')
          }else{
            alert('access denied')
          }
        })
        .catch((e) => {
          console.error(e) 
        }); 
    },
    searchProduct({commit}, textSearch){
      if(textSearch == ''){
        Axios
          .get(config.API_PRODUCT)
          .then(response => {
            let result = response.data.data
            commit('SET_PRODUCT', result.products)
            commit('SET_TOTAL_PAGES', result.totalPage)
          })
      }else{
        Axios
          .get(config.API_PRODUCT + '/name/' + textSearch)
          .then(response => {
            console.log(response)
            let result = response.data.data
            commit('SET_PRODUCT', result.products)
            commit('SET_TOTAL_PAGES', result.totalPage)
          })
      } 
    },
    searchProductPageable ({commit}, payload){
      Axios
        .get(config.API_PRODUCT + '/name/' + payload.textSearch + '?page=' + payload.page + '&size=' + payload.size)
        .then(response => {
          let result = response.data.data
          commit('SET_PRODUCT', result.products)
          commit('SET_TOTAL_PAGES', result.totalPage)
        })
    },
    uploadProduct({commit}, payload){ 
      Axios
        .post(config.API_PRODUCT + '/batch',
          payload,
          {'headers': {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          if(response.data.code == 200){
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
          }else{
            alert(response.data.message)
          }
        })
        .catch((e) => {
          console.error(e)
        }); 
    },
  }  
}