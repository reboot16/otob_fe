'use strict';

let ls = require('local-storage');

export default {
  name: 'TableCart', 
  props: {
    'listItemCart': '',
    'listProduct': ''
  },
  data() {
    return {  
      form: {
        productName : '',
        productPrice: '',
        qty: ''
      },
      total: ''
    }
  },
  mounted () {
    this.$store.dispatch('getProducts')

    this.setStockSession()
  },
  computed: {
    
     
  },
  watch: {

  },
  methods: {
    setStockSession: function () {
      this.listProduct.map(function(product, index) {
        ls.set(product.name, product.stock);
      });
    },
    decDisable: function (product) {
      if (product.qty === 1) {
        return true
      } else {
        return false
      }
    },
    incDisable: function (product) {
      if (product.qty === ls.get(product.productName)) {
        return true
      } else {
        return false
      }
    },
    decrement: function(product, index) {
      product.qty--
      // product.email = this.email
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
        product.index = index
        this.$store.dispatch('deleteItemCart', product)
      }
    },
    onOrder: function () {
      const confirmOrder= confirm("Are you sure want to order all item on cart?");

      if (confirmOrder) {
        this.$store.dispatch('orderItemCart')
      }
    },
  },
  
}