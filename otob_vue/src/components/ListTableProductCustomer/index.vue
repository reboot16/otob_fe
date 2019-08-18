<template>
	<div>
		<table width="100%" class="table">
			<thead>
			<tr  style="display: flex">
				<td class="col-sm-2">Nama Produk</td>
				<td class="col-sm-3">Deskripsi Produk</td>
				<td class="col-sm-2">Harga Awal</td>
				<td class="col-sm-2">Harga Akhir</td>
				<td class="col-sm-1">Stok</td>
				<td class="col-sm-2"></td>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(product, index) in listProduct" :key="index" style="display: flex">
				<td class="col-sm-2">{{ product.name }}</td>
				<td class="col-sm-3">{{ product.description }}</td>
				<td class="col-sm-2"> {{ formatCurrency (product.listPrice) }}</td>
				<td class="col-sm-2"> {{ formatCurrency (product.offerPrice) }}</td>
				<td class="col-sm-1">{{ product.stock }}</td>
				<td class="col-sm-2">
					<div v-if="isStockAvailable(product.stock)">
						<CustomButton :product="product"/>
					</div>
					<div v-else style="text-align: center; color: red; font-style: italic">Stock Habis</div>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script src="./ListTableProductCustomer.js"></script>

<style scoped>

</style>