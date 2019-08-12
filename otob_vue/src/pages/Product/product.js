import SearchProduct from '@/components/SearchProduct'
import ProductHeaderDropdown from '@/components/ProductHeaderDropdown'
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
    ProductHeaderDropdown,
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
    this.$store.dispatch('getCart')
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
    onDelete: function (product, index) {
      const confirmDelete = confirm("Are you sure to delete this?");
      
      if (confirmDelete) {
        product.index = index
        this.$store.dispatch('deleteProduct', product)
      }
    },
    onUpdate: function (product, index) {
      // this.$refs['modal-add'].show()
      // this.submitButton = false
      this.isProductVisible = true
      this.$refs.form = product
    },
    showModals () {
      this.showModal = true
    }
  },
  
}