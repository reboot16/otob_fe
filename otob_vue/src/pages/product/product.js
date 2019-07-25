import SearchProduct from '@/components/SearchProduct'
import ProductHeaderDropdown from '@/components/ProductHeaderDropdown'
import TableProduct from '@/components/TableProduct'

export default {
  name: 'Product',  
  props: {
    'auth': ''
  },
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
    if(this.auth.isAdmin == false){
      this.$router.push('/forbidden')
    } 

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