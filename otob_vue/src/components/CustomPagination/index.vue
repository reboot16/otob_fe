<template>
	<div class="group-pagination" >
		<div class="pagination" v-for="index in totalPage">
			<button class="btn-pagination" @click="onClickPaging(index)" :disabled="pagingDisable(index)">{{ index }}</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			totalPage: 0,
			itemPerPages: 5,
			tempFlagSearch: {
				textSearch: '',
				flagSearch: false
			},
		},
		data () {
			return  {
				currentPage: 1,
			}
		},
		methods: {
			onClickPaging (index, size) {
				this.currentPage = index
				if(size == undefined){
					size = 5
				}
				// let textSearch = this.tempFlagSearch.textSearch
				// let flagSearch = this.tempFlagSearch.flagSearch
				//
				// alert(textSearch)
				let payload = {
					page: index,
					size: size
				}
				//
				// if(flagSearch == false) {
				// 	this.$store.dispatch('getProductsPageable', payload)
				// }else{
				// 	this.$store.dispatch('searchProductPageable', payload)
				// }

				this.$store.dispatch('getProductsPageable', payload)
			},
			pagingDisable (index) {
				if (this.currentPage == index) {
					return true
				} else {
					return false
				}
			}
		}
	}
</script>

<style>
	.group-pagination {
		display: flex;
	}

	.group-pagination button {
		background-color: #17a1e0;
		border: 1px solid #9bc4d8;
		width: 2.5em;
		height: 1.75em;
		text-align: center;
		padding: 0.1em;
		color: white;
	}

	.group-pagination button:hover{
		background-color: #0b8ecc;
	}
</style>
