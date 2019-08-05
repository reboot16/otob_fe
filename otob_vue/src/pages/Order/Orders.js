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
            fields: [
                {
                    key: 'index',
                    label: 'No.'
                },
                {
                    key: 'ordId',
                    label: 'Order Number'
                },
                {
                    key: 'ordDate',
                    label: 'Order date'
                },
                {
                    key: 'totItem',
                    label: 'Total Items'
                },
                {
                    key: 'totPrice',
                    label: 'Total Price'
                },
                {
                    key: 'ordStatus',
                    label: 'Status'
                }
            ]
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
            this.$router.push('orders/approvement/'+id)
        },
        doFilter (value) {
            this.filters = value
        }

    },
    mounted() {
        this.$store.dispatch('searchOrderById', this.auth.userId)
        this.getOrders()
    },
    computed: {
        orders: function () {
            return this.$store.getters.ORDERS
        }
    }

}