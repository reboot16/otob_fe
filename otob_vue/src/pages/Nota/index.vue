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
							Tgl Waktu Pemesanan    : <b>{{ formatDate(data.ordDate) }}</b> <br>
							Order id Pesanan : <b>{{ data.ordId }}</b><br>
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
							<td class="col-sm-7"><span> Nama Produk: </span> <b>{{ product.name}}</b> </td>
							<td class="col-sm-2"><span> Jumlah: </span> {{ product.qty }}</td>
							<td class="col-sm-3"><span> Harga: </span> {{formatCurrency(parseInt(product.offerPrice))}}</td>
						</tr>
					</table>

					<div style="text-align: right" class="footer-nota">
						Total pembayaran:
						<label style="font-size: 24px; font-weight: bold;">{{ formatCurrency(data.totPrice)}}</label> <br>
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
	import moment from 'moment'

	export default {
		name: "print-note",
		mounted () {
			this.getOrders();
		},
		computed: {
			data () {
				return this.$store.getters.getOrderDetail
			}
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
			},
			getOrders(){
				let ordId = ''
				ordId = this.$route.params.id
				this.$store.dispatch('getOrderByOrderId', ordId)
			},
			formatDate (date) {
				let newDate = ''
				newDate += ''+moment(date).format('DD MMM YYYY, HH:mm')
				return newDate
			},
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