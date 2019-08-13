<template>
	<div class="" style="margin-bottom: 3em">
		<div class="container" style="text-align: right">
			<button class="btn btn-primary" @click="print"><li class="fa fa-print"> Print Nota Transaksi</li></button>
		</div>
		<!-- SOURCE -->
		<div ref="transaction" id="transaction">
			<!-- Start pdf content -->
			<div class="container" style="background-color: white; padding:1em; border: 2px dashed #c2c2c2; margin-top: 2em">
				<header style="margin-top: 1em">
					<div class="row col-sm-12" style="justify-content:space-between">
						<div class="com-sm-4 header-nota">
							<b>Blibli Bazaar</b><br>
							PT Global Digital Niaga (Blibli.com)
						</div>
						<div class="com-sm-4">
							<h2> Nota Transaksi </h2>
						</div>
						<div class="com-sm-4 header-nota" style="text-align: right">
							Tgl Waktu Pemesanan    : <b>{{ data.ordDate }}</b> <br>
							Order id Pesanan : <b>{{ data.orderId }}</b><br>
							Status Pesanan : <b>{{ data.ordStatus }}</b>
						</div>
					</div>
					<hr style="border: 1px solid #c2c2c2;">
				</header>

				<div ref="print">
					<b>Hai {{ data.userEmail }}</b>
					<p ref="testing">
						Terimakasih telah berbelanja di Blibli Bazaar. Ini adalah kuitansi sebagai
						bukti transaksi anda. Bawa kuitansi ini ketika hendak melakukan pembayaran pesanan.
					</p>

					<p>
						Berikut daftar pesanan anda:
					</p>

					<table width="100%" class="table table-bordered">
						<tr v-for="product in data.ordItems" style="display: flex">
							<td class="col-sm-7"><span> Nama Produk: </span> {{ product.productName}}</td>
							<td class="col-sm-2"><span> Jumlah: </span> {{ product.qty }}</td>
							<td class="col-sm-3"><span> Harga: </span> {{getFormattedCurrency(product.productPrice)}}</td>
						</tr>
					</table>

					<div style="text-align: right" class="footer-nota">
						Total pembayaran:
						<label style="font-size: 24px; font-weight: bold;">{{ getFormattedCurrency(data.totPrice)}}</label> <br>
						{{ formatDate }}
					</div>
				</div>
			</div>
			<!-- End of pdf content -->
		</div>
		<button @click="print"></button>
	</div>
</template>

<script>
	import jsPDF from 'jspdf'
	import html2canvas from 'html2canvas'

	export default {
		name: "print-note",
		data () {
			return {
				data: {
					"orderId": "ORD1564679880000",
					"userEmail": "nanihutagaol@gmail.com",
					"ordDate": "2019/08/02 00:18",
					"ordItems": [
						{
							"productId": 63,
							"productName": "new product",
							"productPrice": 89,
							"qty": 1
						},
						{
							"productId": 1,
							"productName": "product name ",
							"productPrice": 9000,
							"qty": 1
						}
					],
					"totItem": 2,
					"totPrice": 9089,
					"ordStatus": "Waiting"
				}
			}
		},
		mounted () {
			// let orderId = this.$route.params.id
			// this.$store.dispatch('getOrderByOrderId', orderId)
		},
		computed: {
			// data () {
			// 	// return this.$store.getters.ORDERS
			// }
		},
		methods: {
			print() {
				html2canvas(document.getElementById('transaction')).then(function (canvas) {
					var img = canvas.toDataURL("image/png");
					var doc = new jsPDF();
					doc.addImage(img, 'PNG', 5, 15, 200, 70);

					let source = doc.output('datauristring');
					let embed = "<embed width='100%' height='100%' src='" + source + "'/>";
					let x = window.open();
					x.document.open();
					x.document.write(embed);
					x.document.close();
					doc.save("nota-transaksi.pdf");
				});
			}
		}
	}
</script>

<style scoped>
	.header-nota, .footer-nota {
		font-size: 12px;
	}

	table, tr, td {
		border-color: #919191;
	}


span {
	color: #575656;
}
</style>