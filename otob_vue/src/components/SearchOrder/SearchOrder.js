import moment from 'moment'

export default {
    name: "searchOrder",
    data () {
        return {
            searchText: '',
            status: '',
            date: new Date()
        }
    },
    methods: {
        doSearch () {
            this.$store.dispatch('searchOrder', this.searchText)
        },
        doFilter () {
            let payload = {
                date: moment(this.date).format('YYYY/MM/DD'),
                status: this.status
            }
            this.$store.dispatch('filterOrder', payload)
        }
    },
    watch: {
        searchText () {
            this.doSearch()
        },
        filter () {
            this.doFilter()
        }
    }
}