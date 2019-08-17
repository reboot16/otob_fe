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
  methods: {
    onHandleSubmit () {
      this.showModalAdd = false
      this.$store.dispatch('addProduct', this.form)
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
    resetForm () {
      this.form = {
        name: '',
        description: '',
        listPrice: '',
        offerPrice: '',
        stock: ''
      }
    }
  }

}