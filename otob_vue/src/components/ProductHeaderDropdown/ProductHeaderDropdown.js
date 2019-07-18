 export default {
    name: 'product-header-button',
    components: {
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
        }
    },
    mounted () {

    },
    computed: {

    },
    methods: {
        showModalAdd () { 
            this.$bvModal.show('modalProductForm')
        },
        showModalBatch () { 
            this.$bvModal.show('modalBatchUpload')
        },
        onHandleSubmit (event) {
            let data = this.form
            this.form = ''
            this.onSubmit(data)

            event.preventDefault()
        },
        onSubmit (data) {
            this.$store.dispatch('addProduct', data)
            this.$refs.modalProductForm.hide()
        },
        onUpload: function(event){
            let formData = new FormData();
            formData.append('file', this.file);

            this.$store.dispatch('uploadProduct', formData)
            event.preventDefault()
            this.$refs.modalBatchUpload.hide()
        },
        onChangeFileUpload: function(){
            this.file = this.$refs.file.files[0];
        },
        close () {
            this.close();
        },
        onReset () {
            this.$refs.form.reset()
        }
    }

}