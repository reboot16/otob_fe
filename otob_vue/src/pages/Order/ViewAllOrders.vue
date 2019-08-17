<template>
    <div class="orders">
        <div class="container header-body">
					<div class="block">
						<div class="row content-header">
							<div class="col-sm-12">
								<span>Daftar Pesanan</span>
							</div>

							<div class="col-sm-2 print">
								<button class="print-excel" v-on:click="doShowModal">
									<i class="fa fa-file-excel-o"></i>
									Cetak Laporan
								</button>
							</div>
						</div>
						<div class="row content-header">
							<div class="col-sm-12">
									<search-order></search-order>
							</div>
						</div>
							<div class="col-sm-12">
							<div class="filter">
								<table width="100%" class="table table-hover table-striped table-scroll small-first-col">

									<thead>
										<tr class="col-sm-12">
											<th width="4%">No</th>
											<th width="20%">Order Number</th>
											<th width="17%">Order Date</th>
											<th width="11%">Total Items</th>
											<th width="20%"> Total Price</th>
											<th width="8%">Status</th>
											<th width="10%"> Action</th>
										</tr>
									</thead>

									<tbody class="scrollContentCart">
										<tr ref="listItemCart" class="col-sm-12" v-if="listOfOrder.length != 0" v-for="(order, index) in listOfOrder" :key="index" >
												<td width="4%"><b>{{ index+1 }}</b></td>
												<td width="20%">{{ order.ordId }}</td>
												<td width="17%">{{ formatDate (order.ordDate) }}</td>
												<td  width="11%" style="text-align: center">{{ order.totItem }}</td>
												<td width="20%">{{ getFormattedCurrency (order.totPrice) }}</td>
												<td width="8%" class="status-waiting" v-if="order.ordStatus === 'Waiting'">{{ order.ordStatus }}</td>
												<td width="8%" class="status-acc" v-if="order.ordStatus === 'Accepted'">{{ order.ordStatus }}</td>
												<td width="8%" class="status-rej" v-if="order.ordStatus === 'Rejected'">{{ order.ordStatus }}</td>
												<td width="10%">
														<b-button
																		variant="outline-info"
																		size="sm"
																		v-on:click="viewDetail(order.ordId)"
																		class="mr-2">
															Detail
														</b-button>
												</td>
										</tr>

										<tr class="col-sm-12" v-if="listOfOrder.length === 0">
												<td width="4%" class="empty-cart" style="text-align: center"><h5>Empty Order :(</h5></td>
										</tr>
									</tbody>

								</table>
							</div>
						</div>

					</div>
			</div>

		<custom-modal v-if="showModal" @close="doShowModal">
			<div slot="header">
				Cetak Laporan
			</div>
			<div slot="body">
				<div class="input-group">
					<b-form-select
							v-model="month"
							class="select"
							placeholder="Cari berdasarkan status">
						<option value="disabled" disabled>-- Silahkan Pilih Bulan --</option>
						<option value="">Semua</option>
						<option value="01">Januari</option>
						<option value="02">Februari</option>
						<option value="03">Maret</option>
						<option value="04">April</option>
						<option value="05">Mei</option>
						<option value="06">Juni</option>
						<option value="07">Juli</option>
						<option value="08">Agustus</option>
						<option value="09">September</option>
						<option value="10">Oktober</option>
						<option value="11">November</option>
						<option value="12">Desember</option>
					</b-form-select>

					<b-form-select
							v-model="year"
							class="select"
							placeholder="Cari berdasarkan status">
						<option value="disabled" disabled>-- Silahkan Pilih Tahun --</option>
						<option v-for="year in listYears" :value="year">{{year}}</option>
					</b-form-select>

					<button v-on:click="printExcel" class="print-excel" v-if="year !== 'disabled' && month !== 'disbaled'">Cetak</button>
				</div>
			</div>
		</custom-modal>
    </div>
</template>

<script src="./ViewAllOrders.js"></script>

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
	.print-excel {
		border: 1px solid;
		background: #18ad1b;
		color: #fff;
		height: 40px;
		border-radius: 5px;
		width: 100%;
		font-size: 1rem;
	}
	.print-excel:hover {
		background: #17c21b;
	}
	.select {
		margin: 10px;
	}
	.print{
		float: right;
	}
</style>