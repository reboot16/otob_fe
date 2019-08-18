import Axios from 'axios'

export default {
  state: {
    orders: {},
    currentOrder: {},
    orderDetail: {},
    totalPages: 0
  },
  getters : {
    ORDERS : state => {
      return state.orders.orders;
    },
    TOTAL_ORDER_PAGES: state => {
      return state.totalPages
    },
    getOrderById : (state) => (id) => {
      return state.orders.orders.find(order => order.ordId === id)
    },
    getOrderByStatus: (state) => (status) => {
      return state.orders.find(order => order.status === status)
    },
    getCurrentOrder: (state) => {
      return state.currentOrder
    },
    getOrderDetail: (state) => {
      return state.orderDetail
    }
  },
  mutations: {
    SET_ORDERS : (state, payload) => {
      state.orders = payload;
    },
    SET_TOTAL_PAGES: (state, payload) => {
      state.totalPages = payload
    },
    ACCEPT_ORDER : (state,payload) => {
      state.orders[payload.index] = payload
    },
    GET_ORDER_BY_ID : (state, payload) => {
      state.orderDetail = payload
    },
    SET_CURRENT_ORDER: (state, payload) => [
      state.currentOrder = payload
    ],
    SET_ORDERS_SEARCH: (state, payload) => {
      state.orders.orders = {}
      state.orders.orders[''] = payload;
    }
  },
  actions : {
    getOrders ({commit}) {
      Axios
        .get(config.API_ORDER)
        .then(response => {
          commit('SET_ORDERS',response.data.data)
          commit('SET_TOTAL_PAGES', response.data.data.totalPage)
        }).catch((e) => {
        console.error(e);
      })
    },
    getOrderByPage ({commit}, payload) {
      Axios
          .get(config.API_ORDER+'?page='+payload.page+'&size='+payload.size)
          .then(response => {
            commit('SET_ORDERS',response.data.data)
            commit('SET_TOTAL_PAGES', response.data.data.totalPage)
          }).catch((e) => {
            console.log(e)
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
          commit('GET_ORDER_BY_ID', response.data.data)
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
    setCurrentOrder ({commit}, payload) {
      commit('SET_CURRENT_ORDER', payload)
    },
    searchOrder ({commit}, textSearch) {
      if (textSearch === '' || textSearch == null) {
        Axios
          .get(config.API_ORDER+'/user')
          .then(response => {
            commit('SET_ORDERS', response.data.data)
          })
      } else {
        Axios
          .get(config.API_ORDER+'/'+textSearch+'/search')
          .then(response => {
            console.log(response.data.data)
            commit('SET_ORDERS_SEARCH', response.data.data)
          })
      }
    },
    printExcel ({commit}, payload) {
      Axios({
        url: config.API_ORDER+'/export?month='+payload.month+'&year='+payload.year,
        method: 'GET',
        responseType: 'blob',
      }).then( response => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'Laporan Pesanan '+payload.month+' '+payload.year+'.xlsx')
        document.body.appendChild(link)
        link.click()
      })
    },
    filterOrder ({commit}, payload) {
      if ((payload.status === '' || payload.status === null) && (payload.date === '' || payload.date === null)) {
        // alert('ehm')
        Axios
          .get(config.API_ORDER)
          .then(response => {
            commit('SET_ORDERS', response.data.data)
          })
      }  else {
        // alert('uhuk')
        Axios
          .get(config.API_ORDER+'/filter?date='+payload.date+'&status='+payload.status)
          .then(response => {
            commit('SET_ORDERS', response.data.data)
          })
      }
    }
  }
}