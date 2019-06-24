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
  },
  computed: {
    listProduct: function () { 
      return this.$store.getters.CARTS
    },  
  },
  watch: {
    
  },
  methods: {
    increment: function(product, index) {
      product.qty++
      product.email = this.email
      product.index = index
      var stock = this.$store.dispatch('getItemStock', product.productId) 
      alert(stock)

      // this.$store.dispatch('updateItemCart', product) 
      // alert(product.email + ' - ' + product.productId + ' - ' + product.qty)
    },
    decrement: function(product, index) {
      if(product.qty == 1){
        alert('Minimal qty = 1')
      }else{
        product.qty--
        product.email = this.email
        product.index = index
  
        this.$store.dispatch('updateItemCart', product) 
      }
      // alert(product.email + ' - ' + product.productId + ' - ' + product.qty)
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