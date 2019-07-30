export default {
  name: 'TableCart', 
  props: {
    listItemCart: ''
  },
  methods: {
    decrement: function(product, index) {
      product.qty--
      product.index = index
      product.type = false

      this.$store.dispatch('updateItemCart', product)
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
      const confirmOrder= confirm("Are you sure want to order all item on cart?");

      if (confirmOrder) {
        this.$store.dispatch('orderItemCart')
      }
    },
  },
  
}