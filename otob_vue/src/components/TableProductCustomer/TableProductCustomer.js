export default {
  name: 'TabelProductCustomer', 
  components: {
  },
  data() {
    return { 
    }
  },
  mounted () { 
    this.$store.dispatch('getProducts')
    alert('yes')
  },
  computed: {
    listProduct: function () { 
      return this.$store.getters.PRODUCTS
    },  
  },
  watch: {

  },
  methods: {
    
  },
  
}