import { userInfo } from "os";

export default {
  name: 'Product', 
  data() {
    return { 
      form: {
        name: '',
        description: '',
        listPrice: '',
        offerPrice: '',
        stock: ''
      },
      filterByName: [],
      sortByName: false,

      textSearch : '', 
      quantity: 1, 
      bookData: ''
    }
  },
  mounted () { 
    this.$store.dispatch('getProducts')   
  },
  computed: {
    listProduct: function () { 
      return this.$store.getters.PRODUCTS
    },  
  },
  watch: {
    
  },
  methods: {
    book: function (product, index) {
      this.bookData = this.$store.getters.USER_LOGIN
      this.bookData.productId = product.productId
      this.bookData.qty = this.quantity
      this.bookData.index = index

      this.$store.dispatch('addToCart', this.bookData) 
    },
    increment: function(stock) {
      if(this.quantity === stock){
        alert('Maksimal pembelian adalah ' + stock)
      }else{
        this.quantity++
      }
    },
    decrement: function () {
      if(this.quantity === 1) {
        alert('Pembelian minimal 1')
      } else {
        this.quantity-- 
      }
    },
    onSearch: function(){ 
      this.$store.dispatch('searchProduct', this.textSearch)   
    },    
  },
  
}