import moment from 'moment';

export default {
	name: "Approvement",
	props: {
		'auth': ''
	},
	data(){
		return{
			orders: [],
			products: {
				products_id: 0,
				products_name: '',
				jumlah: 0,
				harga: 0,
				status: '',
			},
		};
	},
	computed: {
		orderDetail () {
			return this.$store.getters.getOrderDetail
		}
	},
	methods: {
		getOrders(){
			let par = ''
			par = this.$route.params.id
			this.orders = this.$store.getters.getOrderById(par);
		},
		printNota (id) {
			this.$router.push('/orders/'+id+'/print-note')
		},
		formatDate (date) {
			let newDate = ''
			newDate += ''+moment(date).format('DD MMM YYYY, HH:mm')
			return newDate
		},
	},
	mounted() {
		let par = ''
		par = this.$route.params.id
		this.$store.dispatch('getOrderByOrderId', par)
	}
}
