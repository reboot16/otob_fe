import { mapGetters } from 'vuex'
import SearchProduct from '@/components/SearchProduct'

export default {
  name: 'TableProductCustomer',
  components: {
    SearchProduct
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
        listPrice: '',
        offerPrice: '',
        stock: ''
      },
      filterByName: [],
      sortByName: false,
      quantity: 1,
      bookData: '',
    }
  },
  mounted () {
    this.$store.dispatch('getProducts')
  },
  computed: {
    ...mapGetters('product', ['PRODUCTS']),

    listProduct: function () {
      return this.$store.getters.PRODUCTS
    },
  },
  watch: {

  },
  methods: {
    isStockAvailable(stock){
      if(stock <= 0){
        return false;
      }
      return true;
    },
    book: function (product, index) {
      this.bookData = this.$store.getters.USER_LOGIN
      this.bookData.productId = product.productId
      this.bookData.qty = this.quantity
      this.bookData.index = index

      this.$store.dispatch('addToCart', this.bookData)
    },
    decDisable: function (product) {
      if (product.stock === 0 || product.qty === 1) {
        return true
      } else {
        return false
      }
    },
    incDisable: function (product) {
      if (product.stock === 0 || product.stock === product.qty) {
        return true
      } else {
        return false
      }
    },
    bookDisable: function (product) {
      if (product.stock === 0) {
        return true
      } else {
        return false
      }
    },
    increment: function(product) {
      product.qty++
    },
    decrement: function (product) {
      product.qty--
    },
    isDisable(product) {
      if (product.stock == 1) {
        return true

      } else {
        return false
      }
    },
  },

}