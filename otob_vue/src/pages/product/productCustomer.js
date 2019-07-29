import TableCart from '@/components/TableCart'
import TableProductCustomer from '@/components/TableProductCustomer'

export default {
  name: 'ProductCustomer', 
  props: {
    'auth': ''
  },
  components: {
    TableCart, 
    TableProductCustomer
  },
  mounted () { 
    if(this.auth.isCustomer == false){
      this.$router.push('/forbidden')
    }

    this.$store.dispatch('getProducts')
    this.$store.dispatch('getCart')
  },
  computed: {
    listProduct () {
      return this.$store.getters.PRODUCTS
    },
    listItemCart () {
      return this.$store.getters.CARTS
    },
  },
}