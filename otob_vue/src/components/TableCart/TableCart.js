export default {
  name: 'TableCart', 
  props: {
    listItemCart: ''
  },
  computed: {
    countOfItem () {
      return this.listItemCart.length
    },
    sumOfPrice () {
      let sum = 0
      this.listItemCart.map(function(product) {
        sum += product.productPrice
      })
      return sum
    }
  },
  methods: {
    decrement: function(product, index) {
      if( product.qty == 1) {
        this.onDelete(product, index)
      }
      else{
        product.qty--
        product.index = index
        product.type = false
  
        this.$store.dispatch('updateItemCart', product)
      }
    },
    increment: function(product, index) {
      product.qty++
      product.index = index
      product.type = true

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
      const confirmOrder= confirm("Are you sure want to Order all item on cart?");

      if (confirmOrder) {
        this.$store.dispatch('orderItemCart')
      }
    },
  },
  
}