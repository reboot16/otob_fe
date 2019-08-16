<template>
	<div class="orders">
		<div class="container header-body">
			<div class="block">

				<div class="col-sm-12" style="padding: 0">
					<h3>Riwayat Pesanan Anda</h3>
				</div>
				<div>
					<search-order></search-order>
				</div>

				<div class="filter">
					<table width="100%" class="table table-hover table-striped">
						<thead>
						<tr >
							<th class="col-sm-1">No</th>
							<th class="col-sm-3">Order Number</th>
							<th class="col-sm-3">Order Date</th>
							<th class="col-sm-1">Quantity</th>
							<th class="col-sm-2"> Total Price</th>
							<th class="col-sm-2"> Action</th>
						</tr>
						</thead>

						<tbody>
						<tr ref="listItemCart" class="col-sm-12" v-if="orders.length != 0" v-for="(order, index) in orders" :key="index" >
							<td class="col-sm-1"><b>{{ index+1 }}</b></td>
							<td class="col-sm-3">{{ order.orderId }}</td>
							<td class="col-sm-3">{{ order.ordDate }}</td>
							<td class="col-sm-1" style="text-align: center">{{ order.totItem }}</td>
							<td class="col-sm-2">Rp {{ order.totPrice }}</td>
							<td class="col-sm-2">
								<b-button variant="outline-info" size="sm" v-on:click="viewDetail(order.orderId)" class="mr-2">
									Details
								</b-button>
							</td>
						</tr>

						<tr class="col-sm-12" v-else>
							<td width="4%" class="empty-cart" style="text-align: center"><h5>Empty Order :(</h5></td>
						</tr>
						</tbody>

					</table>
				</div>

			</div>
		</div>
	</div>
</template>

<script src="./Orders.js"></script>
<style scoped>

	.table {
		margin-top: 10px;
	}

	tr{
		display: flex;
	}
</style>