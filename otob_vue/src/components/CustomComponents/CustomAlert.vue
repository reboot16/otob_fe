<template>
	<div id="modal-alert" class="container">
		<CustomModal>
			<div slot="top" style="color: black;">
				<slot name="alert-name"> Are you sure want to delete this item? </slot>
			</div>

			<div slot="body" class="row">
				<div class="col-sm-6" style="padding: 0">
					<button class="btn btn-gray" @click="onCancel"> Cancel </button>
				</div>
				<div class="col-sm-6" style="padding: 0; text-align: right;">
					<button class="btn btn-orange" @click="onContinue"> Continue </button>
				</div>
			</div>
		</CustomModal>
	</div>
</template>

<script>
	import CustomModal from '@/components/CustomComponents/CustomModal.vue'

	export default {
		components: {
			CustomModal
		},
		methods: {
			onCancel () {
				this.$emit('close')
			},
			onContinue () {
				this.$emit('continue')
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