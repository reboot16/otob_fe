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
                                <td v-show="orders.ordStatus === 'Accepted'">
                                    <button class="print-nota" v-on:click="printNota(orders.orderId)">
                                        <i class="fa fa-print"></i>
                                        Print Nota
                                    </button>
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
            getOrders(){
                let par = ''
                par = this.$route.params.id
                this.orders = this.$store.getters.getOrderById(par);
            },
            printNota (id) {
                this.$router.push('/orders/'+id+'/print-note')
            }
        },
        mounted() {
            this.$store.dispatch('getOrders')
            this.getOrders();
        }
    }
</script>

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
    .label {
        color: dimgrey;
        font-size: 0.8rem;
    }
    .value {
        color: black;
        font-size: 1rem;
    }
    .status-acc {
        color: lawngreen;
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
    .print-nota {
        border: 1px solid;
        background: #F7931E;
        color: #fff;
        height: 48px;
        width: 100%;
        font-size: 1rem;
    }
    .print-nota:hover {
        background: #F9a94b;
    }
</style>
© 2019 GitHub, Inc.