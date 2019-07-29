import CustomModal from '@/components/CustomModal/CustomModal.vue'

export default {
  name: 'TableProduct',
  props: {
    listProduct: ''
  },
  components: {
    CustomModal
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
      index: '',
      showModal: false
    }
  },
  mounted () { 
  },
  computed: {
 
  },
  watch: {

  },
  methods: {
    onShowModal (product, index) {
      this.showModal = true
      this.form = product
      this.form.index = index

    },
    onHandleSubmit () {
      let product = this.form
      this.onUpdate(product)
    },
    onUpdate (product) {
      this.$store.dispatch('updateProduct', product)
    },
    onConfirmDelete: function (product, index) {
      const confirmDelete = confirm("Are you sure to delete this?");

      if (confirmDelete) {
          product.index = index
          this.$store.dispatch('deleteProduct', product)
      }
    },
    resetForm : function () {
      this.form = ''
    }
  },

}