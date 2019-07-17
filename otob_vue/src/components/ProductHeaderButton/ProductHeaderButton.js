import ModalProductForm from '@/components/ModalProduct'

export default {
    name: 'product-header-button',
    components: {
        ModalProductForm
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
            event.preventDefault()
            this.onSubmit(data)
        },
        onSubmit (data) {
            this.$store.dispatch('addProduct', data)
            this.$refs.modalProductForm.hide()
        },
        close () {
            this.close();
        },
        onReset () {
            this.$refs.form.reset()
        }
    }

}