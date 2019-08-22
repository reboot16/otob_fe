<template>
	<div class="orders">
		<div class="container header-body">
			<div class="block">
				<div>
					<h3>Riwayat Pesanan Saya</h3>
				</div>
				<div>
					<search-order userType="customer"></search-order>
				</div>
				<div class="filter">
					<table width="100%" class="table table-hover table-striped table-scroll small-first-col">

						<thead>
						<tr class="col-sm-12">
							<th width="4%">No</th>
							<th width="20%">Nomor Pesanan</th>
							<th width="17%">Tanggal Pesanan</th>
							<th width="11%">Total Produk</th>
							<th width="20%">Total Harga</th>
							<th width="8%">Status</th>
							<th width="10%"></th>
						</tr>
						</thead>

						<tbody class="scrollContentCart">
						<tr ref="listItemCart" class="col-sm-12" v-if="orders.length != 0" v-for="(order, index) in orders" :key="index" >
							<td width="4%"><b>{{ index+1 }}</b></td>
							<td width="20%">{{ order.ordId }}</td>
							<td width="17%">{{ formatDate (order.ordDate) }}</td>
							<td  width="11%" style="text-align: center">{{ order.totItem }}</td>
							<td width="20%">Rp {{ order.totPrice }}</td>
							<td width="8%" class="status-waiting" v-if="order.ordStatus === 'Waiting'">{{ order.ordStatus }}</td>
							<td width="8%" class="status-acc" v-if="order.ordStatus === 'Accepted'">{{ order.ordStatus }}</td>
							<td width="8%" class="status-rej" v-if="order.ordStatus === 'Rejected'">{{ order.ordStatus }}</td>
							<td width="10%">
								<b-button
									variant="outline-info"
									size="sm"
									v-on:click="viewDetail(order.ordId)"
									class="mr-2">Detail
								</b-button>
							</td>
						</tr>

						<tr class="col-sm-12" v-else>
							<td width="4%" class="empty-cart" style="text-align: center"><h5>Empty Order :(</h5></td>
						</tr>
						</tbody>
					</table>
				</div>

				<div style="text-align: center">
					<order-pagination :totalPage="totalPage" type="customer"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Orders.js"></script>
<style scoped>
	.content-header {
		margin: auto;
		max-width: 90%;
		font-size: 1.8rem;
		font-weight: bold;
	}
	.table {
		margin: auto;
		margin-top: 10px;
		padding: 10px;
	}
	.search {
		margin: auto;
		max-width: 90%;
	}
	.status-acc {
		color: forestgreen;
		font-size: 0.8rem;
		font-weight: bold;
	}
	.status-waiting {
		color: dodgerblue;
		font-size: 0.8rem;
		font-weight: bold;
	}
	.status-rej {
		color: red;
		font-size: 0.8rem;
		font-weight: bold;
	}
</style>