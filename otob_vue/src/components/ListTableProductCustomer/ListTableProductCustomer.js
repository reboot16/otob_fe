export default {
	name: 'listTableProductCustomer',
	props: {
		listProduct: {}
	},
	components: {
	},
	mounted() {
		// console.log('tbl' + this.totalPage)
	},
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
			quantity: 1,
			bookData: {},
		}
	},
	computed: {
	
	},
	watch: {
	
	},
	methods: {
		isStockAvailable(stock){
			if(stock <= 0){
				return false;
			}
			return true;
		},
		addToCart: function (product, index) {
			product.index = index
      let productExist = this.isProductExist(product)

      if(productExist) {
        productExist.qty = productExist.qty + product.qty
        this.$store.dispatch('updateItemCart', product)
      }else {
        this.$store.dispatch('addToCart', product)
      }
		},
    isProductExist (product) {
		  let cartItems = this.$store.getters.CARTS
      let productExist = ''
      
      cartItems.forEach(function (cart) {
        if(cart.productId == product.productId) {
          productExist = cart
        }
      })
      
      return productExist
    },
		decDisable: function (product) {
			if (product.stock === 0 || product.qty === 1) {
				return true
			} else {
				return false
			}
		},
		incDisable: function (product) {
			if (product.stock === 0 || product.stock === product.qty) {
				return true
			} else {
				return false
			}
		},
		increment: function(product) {
		  console.log('testing')
			product.qty++
			product.type = true
		},
		decrement: function (product) {
			product.qty--
			product.type = false
		}
	},
	
}