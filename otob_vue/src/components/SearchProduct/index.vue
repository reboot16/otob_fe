<template>
	<div class="input-group">
		<input type="search" class="form-control" placeholder="Masukkan nama produk disini"
					 v-model="searchText">

		<div class="input-group-append">
			<button class="btn btn-primary" type="button" @click="onSearch"> Cari </button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SearchProduct",
		data() {
			return {
				searchText: ''
			}
		},
		methods: {
			onSearch: function(){
				this.$store.dispatch('searchProduct', this.searchText)
			},
		},
		watch: {
			searchText () {
				this.onSearch()
			}
		}
	}
</script>

<style>
	.input-group-append button{
		margin-left:0;padding:0.25em
	}
</style>

