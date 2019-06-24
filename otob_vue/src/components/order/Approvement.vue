<template>
    <div class="sec1">
        <div>
            <h2>Status Pesanan</h2>
        </div>
        <hr>

        <div id="sec2">
            <b-row>
                <b-col md="3">
                    Tanggal Transaksi
                </b-col>
                <b-col md="3">
                    : {{orders.orders_date}}
                </b-col>
                <b-col md="3">
                    Total Pembayaran
                </b-col>

                <b-col md="3">
                    : Rp {{orders.total}}
                </b-col>
            </b-row>
            <b-row>
                <b-col md="3">
                    Nomor Pesanan
                </b-col>
                <b-col md="3">
                    : {{orders.orders_number}}
                </b-col>
            </b-row>
        </div>

        <div class="sec3">
            <b-card
                    header="Product Yang Dipesan"
                    header-tag="b"
                    style="color: white;margin-bottom: 90px"
                    header-bg-variant="primary"
            >
                <b-table
                        :items="orders.products"
                        :fields="fields"
                        bordered hover stripped responsive
                        class="table"
                >
                    <template slot="index" slot-scope="data"> {{data.index + 1}}</template>
                    <template slot="hargaTotal" slot-scope="data">Rp {{data.item.jumlah * data.item.harga}}</template>
                    <template slot="action" slot-scope="row">
                        <b-button
                                variant="outline-success"
                                size="sm"
                                class="mr-2"
                                v-on:click="updateProductStatus('Approve',1)"
                        >
                            <icon name="eye" scale="1"></icon> Approve
                        </b-button>
                        <b-button
                                variant="outline-danger"
                                size="sm"
                                class="mr-2"
                                v-on:click="updateProductStatus('Reject',data.item.products_id)"
                        >
                            <icon name="trash-alt" scale="1"></icon> Reject
                        </b-button>
                    </template>
                </b-table>


                <div id="sec4">
                    <b-button
                            variant="primary"
                            class="mr-2"
                            v-on:click="confirm"
                    >
                        CONFIRM
                    </b-button>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Approvement",
        data(){
            return{
                fields: [
                    {
                        key : 'index',
                        label : 'No.'
                    },
                    {
                        key : 'products_name',
                        label : 'Nama Produk'
                    },
                    {
                        key : 'jumlah',
                        label : 'Jumlah'
                    },
                    {
                        key : 'harga',
                        label : 'Harga Per Item'
                    },
                    {
                        key : 'hargaTotal',
                        label : 'Harga Total'
                    },
                    {
                        key : 'status',
                        label : 'Status'
                    },
                    {
                        key : 'action',
                        label : 'Action'
                    },
                ],
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
        methods: {
            updateProductStatus(status, index){
                this.products = this.orders.products[index-1];
                this.products.status = status;
                try {
                    this.$store.dispatch('updateStatusProduct',this.products);
                }
                catch(e)
                {
                    alert(e);
                }
            },
            confirm(){
                location.reload();
            },
            getOrders(){
                this.orders = this.$store.getters.getOrderById(1);
            }
        },
        mounted() {
            this.getOrders();
        }
    }
</script>

<style scoped>
    .sec1{
        margin: auto;
        margin-top: 80px;
        max-width: 80%;
        padding: 10px;
    }
    .table{
        margin: auto;
        text-align: center;
    }
    #sec2{
        font-size: larger;
        margin-bottom: 30px;
    }
    #sec4{
        text-align: right;
    }
    hr{
        border-color: #008800;
    }
</style>
© 2019 GitHub, Inc.