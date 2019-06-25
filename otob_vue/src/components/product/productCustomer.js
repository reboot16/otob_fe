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
      let btn = document.getElementById("btnDec")
      btn.disabled = true
      // alert(btn.disabled)
      if(this.quantity === 1) {
        alert('Pembelian minimal 1')
      } else {
        this.quantity-- 
      }
    },

    isDisable(product) {
      if (product.stock == 1) {
        // for (let x in listProduct) {
        //   if (listProduct[x].name === basket.name && listProduct[x].size === basket.size) {
        //     return true
        //   }
        // }
        return true

      } else {
        return false
      }
    },
    onSearch: function(){ 
      this.$store.dispatch('searchProduct', this.textSearch)   
    },    
  },
  
}