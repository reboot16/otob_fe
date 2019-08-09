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
      showModalUpd: false,
      tempFlagSearch: {}
    }
  },
  mounted () {
    if(this.auth.isLogin === false){
      this.$router.push('/')
    }
    if(this.auth.isAdmin === false){
      this.$router.push('/not-found')
    } 

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
    showModals () {
      this.showModal = true
    },
    checkFlagSearch (dataFlag) {
      this.tempFlagSearch = dataFlag
  
      console.log(this.tempFlagSearch)
    }
  },
  
}