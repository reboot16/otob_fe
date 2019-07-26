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
    },
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