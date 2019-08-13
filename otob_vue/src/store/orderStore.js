import Axios from 'axios'

export default {
  state: {
    orders: [],
    currentOrder: {}
  },
  getters : {
    ORDERS : state => {
      return state.orders.orders;
    },
    getOrderById : (state) => (id) => {
      return state.orders.orders.find(order => order.orderId === id)
    },
    getOrderByStatus: (state) => (status) => {
      return state.orders.find(order => order.status === status)
    },
    getProductsByOrderId :  (state) => (id) => {
      var orders =  state.orders.find(order=>order.orders_id === id);
      return orders.products;
    },
    getCurrentOrder: (state) => {
      return state.currentOrder
    },
    getCurrentOrderId: (state) => {
      return state.currentOrder.orderId
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
    },
    GET_ORDER_BY_ID : (state, payload) => {
      state.orders = payload
    },
    SET_CURRENT_ORDER: (state, payload) => [
      state.currentOrder = payload
    ]
  },
  actions : {
    updateStatusProduct({commit}, product) {
      commit("UPDATE_PRODUCT_STATUS", product);
    },
    getOrders ({commit}) {
      Axios
          .get(config.API_ORDER)
          .then(response => {
            commit('SET_ORDERS',response.data.data)
          }).catch((e) => {
            console.error(e);
      })
    },
    acceptOrders ({commit}, payload) {
      Axios
          .get(config.API_ORDER + '/' + payload.ordId + '/accept')
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
          .get(config.API_ORDER + '/' + payload.ordId + '/reject')
          .then(response => {
            commit('ACCEPT_ORDER', payload)
            alert('Succes to Reject Order'+ payload.ordId)
          })
          .catch((e) => {
            console.error(e)
          });
    },
    getOrderByOrderId ({commit}, orderId) {
      Axios
          .get(config.API_ORDER+'/'+ orderId + '/search')
          .then(response => {
            commit('GET_ORDER_BY_ID', orderId)
          })
          .catch((e) => {
            console.log(e)
          })
    },
    searchOrderByUserId ({commit}, payload) {
      Axios
          .get(config.API_ORDER+'/user')
          .then(response => {
            commit('SET_ORDERS', response.data.data)
      }).catch((e) => {
        console.error(e)
      })
    },
    async setCurrentOrder ({commit}, payload) {
      await commit('SET_CURRENT_ORDER', payload)
    }
  }
}