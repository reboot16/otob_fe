import moment from 'moment'

export default {
    name: "Approvement",
    props: {
        'auth': ''
    },
    data(){
        return{
            orders: [],
        };
    },
    computed: {
        orderDetail () {
            this.dispatchCart()
            return this.$store.getters.getOrderDetail
        }
    },
    methods: {
        acceptOrder(id){
            let orderReq = []
            orderReq = this.$store.getters.getOrderById(id);
            this.$store.dispatch('acceptOrders', orderReq)
        },
        reject(id){
            let orderReq = []
            orderReq = this.$store.getters.getOrderById(id);
            this.$store.dispatch('rejectOrder', orderReq)
            this.dispatchCart()
        },
        formatDate (date) {
            let newDate = ''
            newDate += ''+moment(date).format('DD MMM YYYY (h:mm)')
            return newDate
        },
        dispatchCart () {
            let par = ''
            par = this.$route.params.id
            this.$store.dispatch('getOrderByOrderId', par)
        }
    },
    mounted() {
        this.dispatchCart()
    }
}