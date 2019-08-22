<template>
    <div class="checkOrder">
        <div class="container header-body">
            <div class="block">
                <div class="row">
                    <div class="col-sm-9">
                        <h3>Periksa Pesanan Anda</h3>
                    </div>
                </div>
                <div class="search">
                    <div class="input-group col-sm-12">
                        <input type="search"
                               class="form-control"
                               placeholder="Masukkan Order Id Anda Disini"
                               v-model="textSearch">
                        <div class="input-group-append">
                            <button class="button-search" v-on:click="doSearch">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="filter" v-if="isResult === true && orderDetail !== null">

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
                                    <span class="value"> {{ formatCurrency (orderDetail.totPrice) }}</span>
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
                                <th width="25%"> Harga Keseluruhan</th>
                            </tr>
                            </thead>

                            <tbody class="scrollContentCart">
                            <tr ref="listItemCart" class="col-sm-12" v-if="orderDetail.ordItems.length != 0" v-for="(item, index) in orderDetail.ordItems" :key="index" >
                                <td width="5%"><b>{{ index+1 }}</b></td>
                                <td width="30%">{{ item.name }}</td>
                                <td width="15%">{{ item.qty }}</td>
                                <td width="25%"> {{ formatCurrency (item.offerPrice) }}</td>
                                <td width="25%"> {{ formatCurrency (item.qty * item.offerPrice) }}</td>
                            </tr>

                            <tr class="col-sm-12" v-else>
                                <td width="4%" class="empty-cart" style="text-align: center"><h5>Empty Order :(</h5></td>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                <div class="notFound" v-if="isResult === true && orderDetail === null">
                    <span>Maaf, Pesanan Anda Tidak Ditemukan </span>
                    <i class="fa fa-frown-o"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./CheckOrder.js"></script>

<style scoped>
    .table {
        margin: auto;
        margin-top: 10px;
        padding: 0px;
    }
    .input-group-append button{
        margin-left: 0px;
        width: 100%;
    }
    .button-search {
        width: 60px;
    }
    input {
        max-width: 100%;
    }
    .search {
        margin: 10px 0px 20px 0px;
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
    th, td {
        text-align: center;
    }
    .notFound {
        text-align: center;
        font-size: 2rem;
        margin-top: 60px;
        color: gray;
    }
</style>