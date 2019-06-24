import Axios from 'axios'
const API = 'http://localhost:9000/api/orders/'

export default{

  state: {
    orders: [
      {
        orders_id : 1,
        orders_number : '1231232',
        orders_date: '22 May 2019',
        products: [
          {
            products_id: 1,
            products_name: 'Tipe-X',
            jumlah: 2,
            harga: 10000,
            status: '',
          },
          {
            products_id: 2,
            products_name: 'Penghapus',
            jumlah: 1,
            harga: 15000,
            status: '',
          }
        ],
        total: 0
      },
      {
        orders_id : 2,
        orders_number : '12331213',
        orders_date: '24 April 2019',
        products: [
          {
            products_id: 3,
            products_name: 'Pensil 2B',
            jumlah: 1,
            harga: 6000,
            status: 'Pending',
          },
          {
            products_id: 4,
            products_name: 'Penggaris',
            jumlah: 5,
            harga: 20000,
            status: 'Pending',
          }
        ],
        total: 0
      }
    ],
  },
  getters : {
    ORDERS : state => {
      return state.orders;
    },
    getOrderById : (state) => (id) => {
      return state.orders.find(order => order.orders_id === id)
    },
    getProductsByOrderId :  (state) => (id) => {
      var orders =  state.orders.find(order=>order.orders_id === id);
      return orders.products;
    }
  },
  mutations: {
    UPDATE_PRODUCT_STATUS : (state,product) => {
      state.orders[0].products[0] = product
    }
  },
  actions : {
    updateStatusProduct({commit}, product) {
      commit("UPDATE_PRODUCT_STATUS", product);
    }
  }
}