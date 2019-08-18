import moment from 'moment';

export default {
    name: "CheckOrder",
    data () {
        return{
            textSearch: '',
            isResult: false
        }
    },
    computed: {
        orderDetail() {
            return this.$store.getters.getOrderDetail
        }
    },
    methods: {
        doSearch: function() {
            if (this.textSearch !== '') {
                this.isResult = !this.isResult
                this.$store.dispatch('getOrderByOrderId', this.textSearch)
            } else {
                this.isResult = false
            }
        },
        formatDate (date) {
            let newDate = ''
            newDate += ''+moment(date).format('DD MMM YYYY, HH:mm')
            return newDate
        },
    },
    watch: {
        textSearch () {
            if (this.textSearch === '') {
                this.isResult = false
            }
        }
    }
}