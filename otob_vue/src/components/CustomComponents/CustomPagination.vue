<template>
	<div class="group-pagination" >
<!--		<button class="btn-pagination" @click="onClickFirst" :disabled="pagingDisable(index)">-->
<!--			<li class="fa fa-angle-double-left"></li>-->
<!--		</button>-->
<!--		<button class="btn-pagination" @click="onClickPaging(index)" :disabled="pagingDisable(index)">-->
<!--			<li class="fa fa-angle-left"></li>-->
<!--		</button>-->
		<div class="pagination" v-for="index in totalPage">
			<button class="btn-pagination" @click="onClickPaging(index)" :disabled="pagingDisable(index)">
				{{ index }}
			</button>
		</div>
<!--		<button class="btn-pagination" @click="onClickPaging(index)" :disabled="pagingDisable(index)">-->
<!--			<li class="fa fa-angle-right"></li>-->
<!--		</button>-->
<!--		<button class="btn-pagination" @click="onClickPaging(index)" :disabled="pagingDisable(index)">-->
<!--			<li class="fa fa-angle-double-right"></li>-->
<!--		</button>-->
	</div>
</template>

<script>
	export default {
		props: {
			totalPage: 0,
			itemPerPages: 5
		},
		data () {
			return  {
				currentPage: 1,
			}
		},
		mounted () {
		},
		methods: {
			onClickFirst() {

			},
			onClickPaging (index, size) {
				this.currentPage = index
				if(size == undefined){
					size = 5
				}
				let payload = {
					page: index,
					size: size
				}
				this.$store.dispatch('getProductsPageable', payload)
				return size
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
		width: 2em;
		height: 2.25em;
		text-align: center;
		padding: 0.1em;
		color: white;
		font-size: 12px;
	}

	.group-pagination button:hover{
		background-color: #0b8ecc;
	}
</style>
