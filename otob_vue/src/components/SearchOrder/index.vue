<template>
	<div class="input-group">
		<input type="search" class="form-control" placeholder="Enter Your Order Id Here"
					 v-model="searchText" @keyup.enter="doSearch">

		<div class="input-group-append">
			<button class="btn btn-green" type="button" @click="doSearch">Search</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "searchOrder",
		data () {
			return {
				searchText: ''
			}
		},
		methods: {
			doSearch () {
				this.$store.dispatch('searchOrder', this.searchText)
			}
		},
		watch: {
			searchText () {
				this.doSearch
			}
		}
	}
</script>

<style scoped>
	.input-group {
		margin-top: 10px;
	}
	.input-group-append button{
		margin-left:0;padding:0.25em
	}
</style>