<template>
	<div class="input-group">
		<input  v-model="textSearch" type="search" class="form-control" placeholder="Enter Product Name Here">

		<div class="input-group-append">
			<button class="btn btn-green" type="button" @click="onSearch"><li class="fa fa-search"></li></button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SearchProduct",
		data() {
			return {
				textSearch: ''
			}
		},
		mounted () {
		},
		methods: {
			onSearch: function(){
				this.$store.dispatch('searchProduct', this.textSearch)
			}
		},
		watch: {
			textSearch () {
				this.onSearch()
			}
		}
	}
</script>

<style>
	.input-group-append button{
		margin-left:0;padding: 0 1em
	}
	.form-control {
		border-color: #9ebdae;
	}
</style>

