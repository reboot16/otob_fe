import CustomPagination from '@/components/CustomComponents/CustomPagination.vue'

export default {
  name: 'TableProductCustomer',
  props: {
    listProduct: '',
    isLogin: false,
    totalPage: 0
  },
  components: {
    CustomPagination
  },
  mounted() {
    console.log('tbl' + this.totalPage)
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
      bookData: {},
    }
  },
  computed: {
 
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
    addToCart: function (product, index) {
      product.index = index  
      this.$store.dispatch('addToCart', product)
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
    increment: function(product) {
      product.qty++
      product.type = true
    },
    decrement: function (product) {
      product.qty--
      product.type = false
    }
  },

}