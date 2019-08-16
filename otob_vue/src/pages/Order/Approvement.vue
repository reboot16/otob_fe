<template>
	<div class="orders">
		<div class="container header-body">
			<div class="block">
				<div class="row content-header">
					<div class="col-sm-12">
						<span>Detail Pesanan</span>
					</div>
				</div>
				<div class="col-sm-12">
					<div class="filter">
						<table width="100%" class="table table-striped">
							<tr class="col-sm-12">
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
									<span class="value">{{ getFormattedCurrency (orderDetail.totPrice) }}</span>
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
				</div>
				<div class="col-sm-12">
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
								<td width="25%">{{ getFormattedCurrency (item.offerPrice) }}</td>
								<td width="25%">{{ getFormattedCurrency (item.qty * item.offerPrice)}}</td>
							</tr>

							<tr class="col-sm-12" v-else>
								<td width="4%" class="empty-cart" style="text-align: center"><h5>Empty Order :(</h5></td>
							</tr>
							</tbody>

						</table>
					</div>
					<div class="col-sm-12 row" style="margin-top: 20px;">
						<div v-if="orderDetail.ordStatus === 'Waiting'">
							<b-button
								variant="success"
								class="mr-2"
								v-on:click="confirm(orderDetail.ordId)"
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
	</div>
</template>

<script src="./Approvement.js"></script>

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
		max-width: 100%;
		font-size: 1.8rem;
		font-weight: bold;
	}
	.table {
		margin: auto;
		margin-top: 10px;
		max-width: 100%;
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