import SearchProduct from '@/components/SearchProduct'
import ProductHeaderDropdown from '@/components/ProductHeaderDropdown'
import TableProduct from '@/components/TableProduct'
import CustomPagination from '@/components/CustomComponents/CustomPagination.vue'

export default {
  name: 'ProductPages',
  components: {
    SearchProduct,
    ProductHeaderDropdown,
    TableProduct,
    CustomPagination,
  },  
  data() {
    return {
      showModalUpd: false
    }
  },
  mounted () {
    this.$store.dispatch('getProducts')
  },
  computed: {
    listProduct: function () {
      return this.$store.getters.PRODUCTS
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