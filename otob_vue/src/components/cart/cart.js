'use strict';

let sessionstorage = require('session-storage');

export default {
  name: 'Cart', 
  data() {
    return { 
      email : this.$store.getters.USER_LOGIN.email,
      form: {
        productName : '',
        productPrice: '',
        qty: ''
      },
      total: ''
    }
  },
  mounted () {
    this.$store.dispatch('getCart', this.email)
    this.$store.dispatch('getProducts')

    this.setStockSession()
  },
  computed: {
    listItemCart: function () {
      return this.$store.getters.CARTS
    },
  },
  watch: {

  },
  methods: {
    setStockSession: function () {
      let products = this.$store.getters.PRODUCTS

      products.map(function(product, index) {
        sessionStorage.setItem(product.name, product.stock);
      });

      alert(sessionstorage.getItem(""))
    },
    decDisable(product) {
      if (product.qty == 1) {
        return true
      } else {
        return false
      }
    },
    incDisable(product) {
      // alert(sessionstorage.getItem(product.productName))

      // if (product.qty == stock) {
      //   return true
      // } else {
      //   return false
      // }
    },
    decrement: function(product, index) {
      product.qty--
      product.email = this.email
      product.index = index

      this.$store.dispatch('updateItemCart', product)
    },
    increment: function(product, index) {
      product.qty++
      product.email = this.email
      product.index = index

      this.$store.dispatch('updateItemCart', product)
    },
    onDelete: function (product, index) {
      const confirmDelete = confirm("Are you sure to remove from cart?");

      if (confirmDelete) {
        product.email = this.email
        product.index = index
        this.$store.dispatch('deleteItemCart', product) 
      }
    },
    onOrder: function () {
      const confirmOrder= confirm("Are you sure want to order all item on cart?");

      if (confirmOrder) {
        this.$store.dispatch('orderItemCart', this.email) 
      }
    },
  },
  
}