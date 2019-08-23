<template>
	<div class="orders">
		<div class="container header-body">
			<div class="block">
				<div>
					<h3>Detail Pesanan</h3>
				</div>
				<div class="">
					<table width="100%" class="table table-striped">
						<tr>
							<td>
								<span class="label">Nomor Pesanan:</span><br>
								<span class="value">{{orderDetail.ordId}}</span>
							</td>
							<td>
								<span class="label">Tanggal Transaksi:</span><br>
								<span class="value">{{ formatDate (orderDetail.ordDate) }}</span>
							</td>
							<td>
								<span class="label">Jumlah Pesanan:</span><br>
								<span class="value">{{orderDetail.totItem}}</span>
							</td>
							<td>
								<span class="label">Total Harga:</span><br>
								<span class="value">{{ formatCurrency (orderDetail.totPrice) }}</span>
							</td>
							<td>
								<span class="label">Status:</span><br>
								<span class="status-waiting" v-show="orderDetail.ordStatus === 'Waiting'">{{orderDetail.ordStatus}}</span>
								<span class="status-rej" v-show="orderDetail.ordStatus === 'Rejected'">{{orderDetail.ordStatus}}</span>
								<span class="status-acc" v-show="orderDetail.ordStatus === 'Accepted'">{{orderDetail.ordStatus}}</span>
							</td>
						</tr>
					</table>
				</div>

				<div class="filter">
					<table width="100%" class="table table-hover table-striped table-scroll small-first-col">
						<thead>
						<tr class="col-sm-12">
							<th width="5%">No</th>
							<th width="30%">Nama Produk</th>
							<th width="15%">Jumlah</th>
							<th width="25%">Harga Satuan</th>
							<th width="25%"> Harga Total</th>
						</tr>
						</thead>

						<tbody class="scrollContentCart">
						<tr ref="listItemCart" class="col-sm-12" v-if="orderDetail.ordItems.length != 0" v-for="(item, index) in orderDetail.ordItems" :key="index" >
							<td width="5%"><b>{{ index+1 }}</b></td>
							<td width="30%">{{ item.name }}</td>
							<td width="15%">{{ item.qty }}</td>
							<td width="25%">{{ formatCurrency (item.offerPrice) }}</td>
							<td width="25%">{{ formatCurrency (item.qty * item.offerPrice)}}</td>
						</tr>

						<tr class="col-sm-12" v-else>
							<td width="4%" class="empty-cart" style="text-align: center"><h5>Empty Order :(</h5></td>
						</tr>
						</tbody>

					</table>
				</div>

				<div class="col-sm-12 row" style="margin-top: 20px;" v-if="checkCashier">
					<div v-if="orderDetail.ordStatus === 'Waiting'">
						<b-button
							variant="success"
							class="mr-2"
							v-on:click="acceptOrder(orderDetail.ordId)"
						>
							Accepted
						</b-button>
					</div>
					<div v-if="orderDetail.ordStatus === 'Waiting'">
						<b-button
							variant="danger"
							class="mr-2"
							v-on:click="reject(orderDetail.ordId)"
						>
							Reject
						</b-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Approvement.js"></script>

<style scoped>
	.table {
		margin: auto;
		margin-top: 10px;
		padding: 10px;
	}
	th, td {
		text-align: center;
	}
	#sec4{
		text-align: right;
		float: right;
	}
	.label {
		color: dimgrey;
		font-size: 0.8rem;
	}
	.value {
		color: black;
		font-size: 1rem;
		font-weight: bold;
	}
	.status-acc {
		color: forestgreen;
		font-size: 1rem;
		font-weight: bold;
	}
	.status-waiting {
		color: dodgerblue;
		font-size: 1rem;
		font-weight: bold;
	}
	.status-rej {
		color: red;
		font-size: 1rem;
		font-weight: bold;
	}
</style>