<template>
	<div>
		<table width="100%" class="table">
			<thead>
			<tr  style="display: flex">
				<td class="col-sm-3">Nama Produk</td>
				<td class="col-sm-4">Deskripsi Produk</td>
				<td class="col-sm-2">harga Awal</td>
				<td class="col-sm-2">Harga Akhir</td>
				<td class="col-sm-1">Stok</td>
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
		name: "listTableProductGuest",
		props: {
			listProduct: {}
		}
	}
</script>