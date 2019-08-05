import Axios from 'axios'
const API = 'http://localhost:9000/api/orders'

export default{

  state: {
    orders: [],
  },
  getters : {

    ORDERS : state => {
      return state.orders;
    },
    getOrderById : (state) => (id) => {
      return state.orders.find(order => order.ordId === id)
    },
    getProductsByOrderId :  (state) => (id) => {
      var orders =  state.orders.find(order=>order.orders_id === id);
      return orders.products;
    }
  },
  mutations: {
    UPDATE_PRODUCT_STATUS : (state,product) => {
      state.orders[0].products[0] = product
    },
    SET_ORDERS : (state, payload) => {
      state.orders = payload;
    },
    ACCEPT_ORDER : (state,payload) => {
      state.orders[payload.index] = payload
    }
  },
  actions : {
    updateStatusProduct({commit}, product) {
      commit("UPDATE_PRODUCT_STATUS", product);
    },

    getOrders ({commit}) {
      Axios
          .get(API+'/')
          .then(response => {
            commit('SET_ORDERS',response.data.data)
          }).catch((e) => {
            console.error(e);
      })
    },

    acceptOrders ({commit}, payload) {
      Axios
          .get(API+'/acc/'+ payload.ordId)
          .then(response => {
            commit('ACCEPT_ORDER', payload)
            alert('Succes to Accept Order'+ payload.ordId)
          })
          .catch((e) => {
            console.error(e)
          });
    },
    rejectOrder ({commit}, payload) {
      Axios
          .get(API+'/rej/'+ payload.ordId)
          .then(response => {
            commit('ACCEPT_ORDER', payload)
            alert('Succes to Reject Order'+ payload.ordId)
          })
          .catch((e) => {
            console.error(e)
          });
    },
    searchOrderById ({commit}, payload) {
      Axios
          .get(API +'/',
              JSON.stringify(payload))
          .then(response => {
            commit('SET_ORDERS', response.data.data)
      }).catch((e) => {
        console.error(e)
      })
    }
  }
}