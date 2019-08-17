import SearchProduct from '@/components/SearchProduct'
import ButtonAdd from '@/components/CustomButtons/ProductAdd'
import TableProduct from '@/components/TableProduct'
import CustomPagination from '@/components/CustomComponents/CustomPagination.vue'
import TableCart from '@/components/TableCart'

export default {
  name: 'ProductPages',
  props: {
    auth: {
      isLogin: false,
      isAdmin: false,
      isCustomer: false,
      isGuest: true
    }
  },
  components: {
    SearchProduct,
    ButtonAdd,
    TableProduct,
    CustomPagination,
    TableCart
  },
  data() {
    return {
      showModalUpd: false
    }
  },
  mounted () {
    this.$store.dispatch('getProducts')
    this.dispatchCart()
  },
  computed: {
    listProduct: function () {
      return this.$store.getters.PRODUCTS
    },
    listItemCart () {
      return this.$store.getters.CARTS
    },
    totalPage () {
      return this.$store.getters.TOTAL_PAGES
    }
  },
  methods: {
    dispatchCart() {
      let isLogin = this.auth.isLogin
      if(isLogin == true) {
        this.$store.dispatch('getCart')
      }
    }
  },
  
}