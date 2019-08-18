<template>
	<div id="modal-alert" class="container">
		<CustomModal>
			<div slot="top" style="color: black; text-align: center">
				<slot name="alert-name"> Yakin ingin menghapus produk? </slot>
			</div>

			<div slot="body" class="row">
				<div class="col-sm-6" style="padding: 0">
					<button class="btn btn-gray" @click="onCancel"> Batal </button>
				</div>
				<div class="col-sm-6" style="padding: 0; text-align: right;">
					<button class="btn btn-orange" @click="onContinue"> Lanjut </button>
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
				this.onCancel()
			}
		}
	}
</script>

<style>
	.modal-container{
		width: 30%;
	}
</style>