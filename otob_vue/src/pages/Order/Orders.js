import SearchOrder from '@/components/SearchOrder'
import moment from 'moment'
import OrderPagination from '@/components/CustomComponents/OrderPagination.vue'

export default {
    name: 'Orders',
    components: {
        SearchOrder,
        OrderPagination
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
        formatDate (date) {
            let newDate = ''
            newDate += ''+moment(date).format('DD MMM YYYY (h:mm)')
            return newDate
        }
        
    },
    mounted() {
        this.$store.dispatch('searchOrderByUserId', this.auth.userId)
    },
    computed: {
        orders: function () {
            return this.$store.getters.ORDERS
        },
        totalPage () {s
            return this.$store.getters.TOTAL_ORDER_PAGES
        }
    }
    
}