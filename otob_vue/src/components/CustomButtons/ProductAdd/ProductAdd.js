import CustomModal from '@/components/CustomComponents/CustomModal.vue'

export default {
  name: 'header-dropdown',
  components: {
    CustomModal
  },
  data () {
    return {
      form: {
        name: '',
        description: '',
        listPrice: '',
        offerPrice: '',
        stock: ''
      },
      file: '',
      showModalAdd: false,
      showModalBatch: false
    }
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    onHandleSubmit () {
      let product = this.form
      this.onSubmit(product)
    },
    onSubmit (product) {
      this.showModalAdd = false
      this.$store.dispatch('addProduct', product)
      
      this.onReset()
      this.resetForm()
    },
    onHandleUpload (event){
      let formData = new FormData();
      formData.append('file', this.file);
      this.onUpload(formData)
    },
    onChangeFileUpload (){
        this.file = this.$refs.file.files[0];
    },
    onUpload (formData) {
      this.showModalBatch = false
      this.$store.dispatch('uploadProduct', formData)
    },
    onReset () {
      this.$refs.form.reset()
    },
    resetForm () {
      this.form.name = ''
      this.form.description = ''
      this.form.listPrice = ''
      this.form.offerPrice = ''
      this.form.stock = ''
    }
  }

}