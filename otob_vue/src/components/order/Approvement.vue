<template>
    <div class="sec1">
        <div>
            <h2>Status Pesanan</h2>
        </div>
        <hr style="border: none;height: 4px;background-color: #166184">

        <div id="sec2">
            <b-row>
                <b-col md="3">
                    Tanggal Transaksi
                </b-col>
                <b-col md="3">
                    : {{orders.ordDate}}
                </b-col>
                <b-col md="3">
                    Total Pembayaran
                </b-col>

                <b-col md="3">
                    : Rp {{orders.totPrice}}
                </b-col>
            </b-row>
            <b-row>
                <b-col md="3">
                    Nomor Pesanan
                </b-col>
                <b-col md="3">
                    : {{orders.ordId}}
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
                        :items="orders.ordItems"
                        :fields="fields"
                        bordered hover stripped responsive
                        class="table"
                >
                    <template slot="index" slot-scope="data"> {{data.index + 1}}</template>
                    <template slot="hargaTotal" slot-scope="data">Rp {{data.item.qty * data.item.productPrice}}</template>
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
                        key : 'productName',
                        label : 'Nama Produk'
                    },
                    {
                        key : 'qty',
                        label : 'Jumlah'
                    },
                    {
                        key : 'productPrice',
                        label : 'Harga Per Item'
                    },
                    {
                        key : 'hargaTotal',
                        label : 'Harga Total'
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
            confirm(){
                location.reload();
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