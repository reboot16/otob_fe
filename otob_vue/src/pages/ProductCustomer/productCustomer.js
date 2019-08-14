import SearchProduct from '@/components/SearchProduct'
import TableCart from '@/components/TableCart'
import TableProductCustomer from '@/components/TableProductCustomer'
import ProgressBar from '@/components/ProgressBar'

export default {
  name: 'ProductCustomer',
  props: {
    auth: {
      type: Object,
      required: true,
      default: ''
    }
  },
  components: {
    SearchProduct,
    TableCart, 
    TableProductCustomer,
    ProgressBar
  },
  mounted () {
    this.$store.dispatch('getProducts')
    
    if(this.auth.isLogin == true) {
      this.$store.dispatch('getCart')
    }
  },
  computed: {
    listProduct () {
      return this.$store.getters.PRODUCTS
    },
    listItemCart () {
      if (this.auth.isLogin == true)
        return this.$store.getters.CARTS
      else
        return ''
    },
    totalPage () {
      return this.$store.getters.TOTAL_PAGES
    }
  }
}