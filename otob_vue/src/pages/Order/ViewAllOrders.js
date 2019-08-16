import FilterOrder from '@/components/FilterOrder'
import SearchOrder from '@/components/SearchOrder'
import moment from 'moment'
export default {
	name: "ViewAllOrders",
	props: {
		'auth': ''
	},
	components: {FilterOrder, SearchOrder},
	data(){
		return{
			listOrders: [],
			format: "dd MM yyyy",
			filters: '',
		}
	},
	computed: {
		listOfOrder () {
			return this.$store.getters.ORDERS
		}
	},
	methods:{
		getAllOrders()
		{
			this.listOrders = this.$store.getters.ORDERS;
		},
		viewDetail(id){
			this.$router.push('orders/'+id+'/detail')
		},
		doFilter(value) {
			this.listOrders =  this.$store.getters.getOrderByStatus(value)
		},
		doSearch(value) {
			this.listOrders =  this.$store.getters.getOrderById(value)
		},
		formatDate (date) {
			let newDate = ''
			newDate += ''+moment(date).format('DD MMM YYYY, HH:mm')
			return newDate
		}
	},
	mounted() {
		// if(this.auth.isCashier == false){
		//     this.$router.push('/forbidden')
		// }
		this.$store.dispatch('getOrders')
	}
}