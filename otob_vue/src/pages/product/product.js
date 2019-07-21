import SearchProduct from '@/components/SearchProduct'
import ProductHeaderDropdown from '@/components/ProductHeaderDropdown'
import TableProduct from '@/components/TableProduct'

export default {
  name: 'Product',  
  components: {
    SearchProduct,
    ProductHeaderDropdown,
    TableProduct
  }, 
  data() {
    return { 

    }
  },
  mounted () { 
    this.$store.dispatch('getProducts')   
  },
  computed: {
    listProduct: function () {
      return this.$store.getters.PRODUCTS
    },
  },
  watch: {

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
  },
  
}