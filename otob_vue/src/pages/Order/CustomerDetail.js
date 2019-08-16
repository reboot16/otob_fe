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
		getOrders () {
			let par = ''
			par = this.$route.params.id
			this.orders = this.$store.getters.getOrderById(par);
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
		}
	},
	mounted() {
		this.$store.dispatch('searchOrderByUserId')
		this.getOrders();
	}
}