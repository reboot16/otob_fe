import ProductModifyDropdown from '@/components/ProductModifyDropdown'

export default {
  name: 'TableProductCustomer',
  components: {
    ProductModifyDropdown
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
      quantity: 1,
      bookData: '',
      index: ''
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
    showModalUpdate (product, index) {
      this.$bvModal.show('modalProductForm')
      this.onUpdate(product, index)
    },
    onUpdate: function (product, index) {
      this.$refs.form = product
    },
    resetForm : function () {
      this.form = ''
    }
  },

}