import moment from 'moment'

export default {
	name: "Approvement",
	props: {
		'auth': ''
	},
	data() {
		return {
			orders: [],
		};
	},
	computed: {
		orderDetail() {
			return this.$store.getters.getOrderDetail
		}
	},
	methods: {
		confirm(id) {
			let orderReq = []
			orderReq = this.$store.getters.getOrderById(id);
			return this.$store.dispatch('acceptOrders', orderReq)
		},
		reject(id) {
			let orderReq = []
			orderReq = this.$store.getters.getOrderById(id);
			return this.$store.dispatch('rejectOrder', orderReq)
		},
		formatDate(date) {
			let newDate = ''
			newDate += '' + moment(date).format('DD MMM YYYY (h:mm)')
			return newDate
		}
	},
	mounted() {
		let par = ''
		par = this.$route.params.id
		this.$store.dispatch('getOrderByOrderId', par)
	}
}