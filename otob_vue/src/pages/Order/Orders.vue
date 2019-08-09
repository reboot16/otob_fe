<template>
	<div class="orders">
		<div class="container header-body">
			<div class="block">
				<div class="row content-header">
					<div class="col-sm-12">
						<span>Pesanan Anda</span>
					</div>
				</div>
				<div class="col-sm-12">
					<search-order v-on:doSearch="doFilter"></search-order>
				</div>
				<div class="col-sm-12">
					<div class="filter">

						<table width="100%" class="table table-hover table-striped table-scroll small-first-col">

							<thead>
							<tr class="col-sm-12">
								<th width="4%">No</th>
								<th width="25%">Order Number</th>
								<th width="20%">Order Date</th>
								<th width="11%">Total Items</th>
								<th width="20%"> Total Price</th>
								<th width="10%"> Action</th>
							</tr>
							</thead>

							<tbody class="scrollContentCart">
							<tr ref="listItemCart" class="col-sm-12" v-if="orders.length != 0" v-for="(order, index) in orders" :key="index" >
								<td width="4%"><b>{{ index+1 }}</b></td>
								<td width="30%">{{ order.orderId }}</td>
								<td width="20%">{{ order.ordDate }}</td>
								<td  width="11%" style="text-align: center">{{ order.totItem }}</td>
								<td width="20%">Rp {{ order.totPrice }}</td>
								<td width="10%">
									<b-button
											variant="outline-info"
											size="sm"
											v-on:click="viewDetail(order.orderId)"
											class="mr-2">
										<icon name="eye" scale="1"></icon> View Details
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
	</div>
</template>

<scrispt src="./Orders.js"></scrispt>
<style scoped>
	.block{
		font-family: 'Glegoo', Helvetica, Arial, serif !important;
		background-color:white;
		padding: 1em;
		border-radius:0.5em;
		-webkit-box-shadow: 0 8px 6px -6px #999;
		-moz-box-shadow: 0 8px 6px -6px #999;
		box-shadow: 0 8px 6px -6px #999;
		transition: transform 0.3s;
	}

	.block:hover {
		box-shadow: 0 1px 10px #999;
	}
	.content-header {
		margin: auto;
		max-width: 90%;
		font-size: 1.8rem;
		font-weight: bold;
	}
	.table {
		margin: auto;
		margin-top: 10px;
		max-width: 90%;
		padding: 10px;
	}
</style>