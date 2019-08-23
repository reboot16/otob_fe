<template>
	<div>
		<div  style="display: flex" class="row">
			<div class=" qty">
				<button @click="decrement(product)" :disabled="decDisable(product)" class="btn btn-gray btn-left">&mdash;</button>
				<input type="text" :value="qty" readonly class="input-gray">
				<button @click="increment(product)" :disabled="incDisable(product)" class="btn btn-gray btn-right">&#xff0b;</button>
			</div>
			<div class="">
				<button @click="addToCart(product)" class="btn btn-blue btn-book" style="font-size: 13px">Tambah</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ButtonAdd',
		props: {
			product: {},
		},
		data () {
			return {
				qty: 1
			}
		},
		methods: {
			isStockAvailable(stock){
				if(stock <= 0){
					return false;
				}
				return true;
			},
			addToCart: function (product) {
				let data = product
				data.qty = this.qty

				// let productExist = this.isProductExist(data)
				//
				// console.log(productExist.productId)
				// if(productExist == ''){
					this.$store.dispatch('addToCart', data)
				// }
				// else{
				// 	this.$store.dispatch('updateItemCart', productExist)
				// }
			},
			isProductExist (product) {
				let cartItems = this.$store.getters.CARTS
				let productExist = ''

				cartItems.forEach(function (cart, index) {
					if(cart.productId == product.productId) {
						cart.index = index
						productExist = cart
					}
				})

				return productExist
			},
			decDisable: function (product) {
				if (this.qty === 1) {
					return true
				} else {
					return false
				}
			},
			incDisable: function (product) {
				if (product.stock === this.qty) {
					return true
				} else {
					return false
				}
			},
			increment: function(product) {
				this.qty++
				product.type = true
			},
			decrement: function (product) {
				this.qty--
				product.type = false
			}
		}
	}
</script>

<style scoped>

</style>