<template>
	<div>
		<table width="100%" class="table">
			<thead>
			<tr  style="display: flex">
				<td class="col-sm-3">Name</td>
				<td class="col-sm-4">Description</td>
				<td class="col-sm-2">List Price</td>
				<td class="col-sm-2">Offer Price</td>
				<td class="col-sm-1">Stock</td>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(product, index) in listProduct" :key="index" style="display: flex">
				<td class="col-sm-3">{{ product.name }}</td>
				<td class="col-sm-4">{{ product.description }}</td>
				<td class="col-sm-2"> {{ formatCurrency (product.listPrice) }}</td>
				<td class="col-sm-2"> {{ formatCurrency (product.offerPrice) }}</td>
				<td class="col-sm-1">{{ product.stock }}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: "listtabelProductGuest",
		props: {
			listProduct: {}
		}
	}
</script>