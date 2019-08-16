import SearchOrder from '@/components/SearchOrder'

export default {
	name: 'Orders',
	components: {
		SearchOrder
	},
	data () {
		return {
			listOrders: [],
			filters: '',
		}
	},
	props: {
		auth: ''
	},
	methods: {
		getOrders () {
			this.listOrders =  this.$store.getters.ORDERS
		},
		viewDetail(id){
			this.$router.push('customer/'+id+'/detail')
		},
		doSearch (value) {
			this.filters = value
		},
		
	},
	mounted() {
		// if(this.auth.userId != )
		this.$store.dispatch('searchOrderByUserId', this.auth.userId)
		this.getOrders()
	},
	computed: {
		orders: function () {
			return this.$store.getters.ORDERS
		}
	}
	
}