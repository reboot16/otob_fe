import CustomAlert from '@/components/CustomComponents/CustomAlert.vue'
import CustomButton from '@/components/CustomButtons/CartModify'

export default {
  name: 'TableCart',
  components: {
    CustomAlert,
    CustomButton
  },
  data () {
    return {
      showModalAlert: false
    }
  },
  mounted () {
    this.dispatchCart()
  },
  computed: {
    listItemCart () {
      this.dispatchCart()
      return this.$store.getters.CARTS
    },
    countOfItem () {
      return this.listItemCart.length
    },
    sumOfPrice () {
      let sum = 0
      this.listItemCart.map(function(product) {
        sum += product.offerPrice
      })
      return sum
    },
    currentOrder () {
      return this.$store.getters.getCurrentOrder
    },
  },
  methods: {
    dispatchCart() {
      this.$store.dispatch('getCart')
    },
    onOrder: function () {
      this.showModalAlert = true
    },
    async continueCheckout () {
      await this.$store.dispatch('checkout')
      let currentOrder = this.$store.getters.getCurrentOrder
      this.$router.push('/orders/thank-you/'+currentOrder.ordId)
    }
  },
  
}