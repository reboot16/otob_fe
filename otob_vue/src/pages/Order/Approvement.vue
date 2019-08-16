<template>
	<div class="orders">
		<div class="container header-body">
			<div class="block">

				<div>
					<h3>Detail Pesanan</h3>
				</div>

				<div class="filter">
					<table width="100%" class="table table-striped">
						<tr class="col-sm-12">
							<td>
								<span class="label">Nomor Pesanan:</span><br>
								<span class="value">{{orders.orderId}}</span>
							</td>
							<td>
								<span class="label">Tanggal Transaksi:</span><br>
								<span class="value">{{orders.ordDate}}</span>
							</td>
							<td>
								<span class="label">Jumlah Pesanan:</span><br>
								<span class="value">{{orders.totItem}}</span>
							</td>
							<td>
								<span class="label">Total Harga:</span><br>
								<span class="value">Rp {{orders.totPrice}}</span>
							</td>
							<td>
								<span class="label">Status:</span><br>
								<span class="status-waiting" v-show="orders.ordStatus === 'Waiting'">{{orders.ordStatus}}</span>
								<span class="status-rej" v-show="orders.ordStatus === 'Rejected'">{{orders.ordStatus}}</span>
								<span class="status-acc" v-show="orders.ordStatus === 'Accepted'">{{orders.ordStatus}}</span>
							</td>
						</tr>
					</table>
				</div>

				<div class="filter">
					<table width="100%" class="table table-hover table-striped">
						<thead>
						<tr class="col-sm-12">
							<th width="5%">No</th>
							<th width="30%">Nama Produk</th>
							<th width="15%">Jumlah</th>
							<th width="25%">Harga Satuan</th>
							<th width="25%"> Harga Total</th>
						</tr>
						</thead>

						<tbody>
						<tr ref="listItemCart" class="col-sm-12" v-if="orders.ordItems.length != 0" v-for="(item, index) in orders.ordItems" :key="index" >
							<td width="5%"><b>{{ index+1 }}</b></td>
							<td width="30%">{{ item.productName }}</td>
							<td width="15%">{{ item.qty }}</td>
							<td width="25%">Rp {{ item.productPrice }}</td>
							<td width="25%">Rp {{item.qty * item.productPrice}}</td>
						</tr>

						<tr class="col-sm-12" v-else>
							<td width="4%" class="empty-cart" style="text-align: center"><h5>Empty Order :(</h5></td>
						</tr>
						</tbody>

					</table>
				</div>

					<div class="col-sm-12 row" style="margin-top: 20px;">
						<div v-if="orders.ordStatus === 'Waiting'">
							<b-button
								variant="success"
								class="mr-2"
								v-on:click="confirm(orders.orderId)"
							>
								Accepted
							</b-button>
						</div>
						<div v-if="orders.ordStatus === 'Waiting'">
							<b-button
								variant="danger"
								class="mr-2"
								v-on:click="reject(orders.orderId)"
							>
								Reject
							</b-button>
						</div>
					</div>

				</div>
			</div>
		</div>
</template>

<script>
	export default {
		name: "Approvement",
		props: {
			'auth': ''
		},
		data(){
			return{
				orders: [],
				products: {
					products_id: 0,
					products_name: '',
					jumlah: 0,
					harga: 0,
					status: '',
				},
			};
		},
		computed: {
			getOrders () {
				let par = ''
				par = this.$route.params.id
				this.orders = this.$store.getters.getOrderById(par);
			}
		},
		methods: {
			updateProductStatus(status, index){
				this.products = this.orders.ordItem[index-1];
				this.products.status = status;
				try {
					this.$store.dispatch('updateStatusProduct',this.products);
				}
				catch(e)
				{
					alert(e);
				}
			},
			confirm(id){
				let orderReq = []
				orderReq = this.$store.getters.getOrderById(id);
				return this.$store.dispatch('acceptOrders', orderReq)
			},
			reject(id){
				let orderReq = []
				orderReq = this.$store.getters.getOrderById(id);
				return this.$store.dispatch('rejectOrder', orderReq)
			},
			getOrders(){
				let par = ''
				par = this.$route.params.id
				this.orders = this.$store.getters.getOrderById(par);
			}
		},
		mounted() {
			this.$store.dispatch('getOrders')
			this.getOrders();
		}
	}
</script>

<style scoped>

	.table {
		margin-top: 10px;
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
© 2019 GitHub, Inc.