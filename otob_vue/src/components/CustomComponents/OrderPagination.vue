<template>
    <div>
        <div class="group-pagination" v-if="type === 'admin'">
            <div class="pagination" v-for="index in totalPage">
                <button class="btn-pagination" @click="onClickPaging(index)" :disabled="pagingDisable(index)">
                    {{ index }}
                </button>
            </div>
        </div>
        <div class="group-pagination" v-if="type === 'customer'">
            <div class="pagination" v-for="index in totalPage">
                <button class="btn-pagination" @click="onClickPagingCustomer(index)" :disabled="pagingDisable(index)">
                    {{ index }}
                </button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "OrderPagination",
        props: {
            totalPage: 0,
            type: ''
        },
        data () {
            return{
                currentPage: 1
            }
        },
        methods: {
            onClickPaging (index, size) {
                this.currentPage = index
                if(size == undefined){
                    size = 5
                }
                let payload = {
                    page: index,
                    size: size
                }
                this.$store.dispatch('getOrderByPage', payload)
            },
            onClickPagingCustomer (index, size) {
                this.currentPage = index
                if(size == undefined){
                    size = 5
                }
                let payload = {
                    page: index,
                    size: size
                }
                this.$store.dispatch('getCustomerOrderByPage', payload)
            },
            pagingDisable (index) {
                if (this.currentPage == index) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>

<style scoped>
    .group-pagination {
        display: flex;
    }
    .group-pagination button {
        background-color: #17a1e0;
        border: 1px solid #9bc4d8;
        width: 2em;
        height: 2.25em;
        text-align: center;
        padding: 0.1em;
        color: white;
        font-size: 12px;
    }
    .group-pagination button:hover{
        background-color: #0b8ecc;
    }
</style>