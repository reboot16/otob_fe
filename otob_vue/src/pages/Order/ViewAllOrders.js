import FilterOrder from '@/components/FilterOrder'
import SearchOrder from '@/components/SearchOrder'
import moment from 'moment'
import CustomModal from '@/components/CustomComponents/CustomModal.vue'

export default {
    name: "ViewAllOrders",
    props: {
        'auth': ''
    },
    components: {
        FilterOrder,
        SearchOrder,
        CustomModal
    },
    data(){
        return{
            listOrders: [],
            listYears: [],
            format: "dd MM yyyy",
            filters: '',
            showModal: false,
            month: 'disabled',
            year: 'disabled'
        }
    },
    computed: {
        listOfOrder () {
            return this.$store.getters.ORDERS
        },
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
        },
        doShowModal () {
            this.showModal = !this.showModal
        },
        getYear () {
            let dt = new Date()
            let year = dt.getFullYear()
            let diff = year - 2019
            if (diff > 0) {
                for (let i = 0; i<diff; i++) {
                    this.listYears[i] = 2019 + i
                }
            } else {
                this.listYears[0] = 2019
            }
            console.log(this.listYears)
        },
        printExcel () {
            let payload = {
                month: ''+this.month.toString(),
                year: ''+this.year
            }
            this.$store.dispatch('printExcel', payload)
            this.doShowModal()
        }
    },
    mounted() {
        // if(this.auth.isCashier == false){
        //     this.$router.push('/forbidden')
        // }
        this.$store.dispatch('getOrders')
        this.getYear()
    }
}