<template>
		<div  style="display: flex" class="row">
			<div  style="display: flex">
				<div class="qty">
					<button @click="decrement(product, index)" class="btn btn-gray btn-left">&mdash;</button>
					<input type="text" :value="product.qty" readonly class="input-gray">
					<button @click="increment(product, index)"class="btn btn-gray btn-right">&#xff0b;</button>
				</div>
			</div>
			<button @click="onDelete(product)"
				style="padding:0.1em 0.5em; color:white; font-size: 18px; margin-left: 3px"
				class="btn btn-red" id="btnDelete">
				<i class="fa fa-trash"></i>
			</button>
		</div>
</template>

<script>
	import CustomAlert from '@/components/CustomComponents/CustomAlert.vue'

	export default {
		name: 'ModifyCart',
		props: {
			product: {},
			index: 0
		},
		components: {
			CustomAlert
		},
		methods: {
			decrement: function(product) {
				let index = this.index
				if( product.qty == 1) {
					this.onDelete(product, index)
				}
				else{
					product.qty--
					product.index = index
					product.type = false

					this.$store.dispatch('updateItemCart', product)
				}
			},
			increment: function(product, index) {
				product.qty++
				product.index = index
				product.type = true

				this.$store.dispatch('updateItemCart', product)
			},
			onDelete: function (product) {
				let index = this.index
				product.index = index
				this.$store.dispatch('deleteItemCart', product)
			},
			onOrder: function () {
				this.showModalAlert = true
			},
			async continueCheckout () {
				await this.$store.dispatch('checkout')
				let currentOrder = this.$store.getters.getCurrentOrderId
				console.log('tbl cart')
				console.log(currentOrder)
				this.$router.push('/orders/thank-you/'+currentOrder)
			}
		}
	}
</script>

<style scoped>

</style>