<template class="col-sm-10">
    <div class="sec1">
        <div>
            <h2>Order Yang Masuk</h2>
        </div>
        <hr style="border: none;height: 4px;background-color: #166184">

        <div class="filters">
                <b-form-group label-cols-sm="0" class="mb-0">
                    <b-container>
                        <b-row style="margin-bottom: 10px">
                            <b-col tag="b">Filter By Status:</b-col>
                            <b-col tag="b">Filter By Date :</b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-select
                                        v-model="filters.status"
                                        style="width: 150px;"
                                        placeholder="status"
                                >
                                    <option value="waiting">Waiting</option>
                                    <option value="approved">Approved</option>
                                    <option value="rejected">Rejected</option>
                                </b-form-select>
                            </b-col>
                            <b-col>
                                <b-input-group>
                                    <datepicker
                                            placeholder="Select Order date"
                                            v-model="filters.orderdate"
                                            :format="format"
                                    />
                                </b-input-group>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-form-group>
        </div>

        <div class="sec3">
            <b-card
                    header="List Order"
                    header-tag="b"
                    style="color: white;"
                    header-bg-variant="primary"
            >

							<table width="100%" class="table table-hover table-striped table-scroll small-first-col">

								<thead>
								<tr class="col-sm-12">
									<th width="4%">No</th>
									<th width="25%">order Number</th>
									<th width="20%">Order Date</th>
									<th width="6%">Total Items</th>
									<th width="20%"> Total Price</th>
									<th width="25%"> Action</th>
								</tr>
								</thead>

								<tbody class="scrollContentCart">
								<tr ref="listItemCart" class="col-sm-12" v-if="orders.length != 0" v-for="(order, index) in orders" :key="index" >
									<td width="4%"><b>{{ index+1 }}</b></td>
									<td width="30%">{{ order.orderId }}</td>
									<td width="20%">{{ order.ordDate }}</td>
									<td  width="6%" style="text-align: center">{{ order.totItem }}</td>
									<td width="20%">Rp {{ order.totPrice }}</td>
									<td width="15%">
										<b-button
											variant="outline-info"
											size="sm"
											v-on:click="viewDetail(order.ordId)"
											class="mr-2">
											<icon name="eye" scale="1"></icon> View Details
										</b-button>
									</td>
								</tr>

								<tr class="col-sm-12" v-else>
									<td width="4%" class="empty-cart" style="text-align: center"><h5>Empty Order :(</h5></td>
								</tr>
								</tbody>

							</table>


						</b-card>
        </div>

    </div>
</template>

<script>
    import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
    export default {
        name: "ViewAllOrders",
        props: {
            'auth': ''
        },
        components: {Datepicker},
        data(){
            return{
                listOrders: [],
                format: "dd MM yyyy",
                filters: '',
                fields: [
                    {
                        key: 'index',
                        label: 'No.'
                    },
                    {
                        key: 'ordId',
                        label: 'Order Number'
                    },
                    {
                        key: 'userEmail',
                        label: 'Customer'
                    },
                    {
                        key: 'ordDate',
                        label: 'Order date'
                    },
                    {
                        key: 'totItem',
                        label: 'Total Items'
                    },
                    {
                        key: 'totPrice',
                        label: 'Total Price'
                    },
                    {
                        key: 'ordStatus',
                        label: 'Status'
                    },
                    {
                        key: 'action',
                        label: 'Action'
                    }
                ]
            }
        },
        methods:{
            getAllOrders()
            {
                this.listOrders = this.$store.getters.ORDERS;
            },
            viewDetail(id){
                this.$router.push('orders/approvement/'+id)
            }
        },
        mounted() {
            if(this.auth.isCashier == false){
                this.$router.push('/forbidden')
            }

            this.$store.dispatch('getOrders')
            this.getAllOrders()
        },
        computed: {
            orders: function () {
                return this.$store.getters.ORDERS
            },
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
    .sec3{
        margin-top: 30px;
    }
</style>