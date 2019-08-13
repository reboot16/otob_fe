import CustomAlert from '@/components/CustomComponents/CustomAlert.vue'

export default {
  name: 'TableCart', 
  props: {
    listItemCart: ''
  },
  components: {
    CustomAlert
  },
  data () {
    return {
      showModalAlert: false
    }
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
    },
    currentOrder () {
      return this.$store.getters.getCurrentOrder
    },
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
      product.index = index
      this.$store.dispatch('deleteItemCart', product)
    },
    onOrder: function () {
      this.showModalAlert = true
    },
    async continueCheckout () {
      await this.$store.dispatch('checkout')
      let currentOrder = this.$store.getters.getCurrentOrderId
      console.log('tbl cart')
      console.log(currentOrder)
      this.$router.push('/orders/thank-you/'+currentOrder)
    },
    bookDisable (sum) {
      return sum === 0;
    }
  },
  
}