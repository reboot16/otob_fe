<template>
	<div id="modal-alert" class="container">
		<CustomModal>
			<div slot="top" style="color: black;">
				Are you sure want to delete this item?
			</div>

			<div slot="body" class="row">
				<div class="col-sm-6" style="padding: 0">
					<button class="btn btn-gray" @click="onClose"> Cancel </button>
				</div>
				<div class="col-sm-6" style="padding: 0; text-align: right;">
					<button class="btn btn-orange" @click="onDelete"> Delete </button>
				</div>
			</div>
		</CustomModal>
	</div>
</template>

<script>
	import CustomModal from '@/components/CustomComponents/CustomModal.vue'

	export default {
		props: {
			deletedProduct: {}
		},
		components: {
			CustomModal
		},
		methods: {
			onClose () {
				this.$emit('close')
			},
			onDelete () {
				this.$store.dispatch('deleteProduct', this.deletedProduct)
				this.onClose()
			}
		}
	}
</script>

<style>
	.modal-container{
		width: 25%;
	}
</style>