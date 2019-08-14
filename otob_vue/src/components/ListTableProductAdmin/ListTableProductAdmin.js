import CustomModal from '@/components/CustomComponents/CustomModal.vue'
import CustomAlert from '@/components/CustomComponents/CustomAlert.vue'

export default {
	name: 'listTableProductAdmin',
	props: {
		listProduct: {}
	},
	components: {
		CustomModal,
		CustomAlert
	},
	data() {
		return {
			form: {
				name: '',
				description: '',
				listPrice: '',
				offerPrice: '',
				stock: '',
				index: ''
			},
			delProduct: {},
			showModalUpd: false,
			showModalAlert: false
		}
	},
	computed: {
		deletedProduct: {
			get () {
				return this.delProduct
			},
			set (product) {
				this.delProduct = product
			}
		}
	},
	methods: {
		onShowModal (product, index) {
			this.showModalUpd = true
			this.form = product
			this.form.index = index
		},
		onHandleSubmit () {
			let product = this.form
			this.onUpdate(product)
		},
		onUpdate (product) {
			this.showModalUpd = false
			this.$store.dispatch('updateProduct', product)
		},
		onConfirmDelete: function (product, index) {
			this.showModalAlert = true
			
			this.deletedProduct = product
			this.deletedProduct.index = index
		},
		onReset () {
			this.$refs.form.reset()
		},
		resetForm () {
			this.form = ''
		}
	},
	watch: {
	}
	
}