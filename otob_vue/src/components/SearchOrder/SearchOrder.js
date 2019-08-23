import moment from 'moment'

export default {
	name: "searchOrder",
	props: [
		'userType'
	],
	data () {
		return {
			searchText: '',
			status: '',
			date: null
		}
	},
	methods: {
		doSearch () {
			this.$store.dispatch('searchOrder', this.searchText)
		},
		doFilter () {
			let payload = {}
			if(this.date === null) {
				payload = {
					date: '',
					status: this.status
				}
			} else {
				payload = {
					date: moment(this.date).format('YYYY/MM/DD'),
					status: this.status
				}
			}
			this.$store.dispatch('filterOrder', payload)
		},
		doReset () {
			this.status = ''
			this.$refs.select.value = ''
		}
	},
	watch: {
		searchText () {
			this.doSearch()
		}
	}
}
