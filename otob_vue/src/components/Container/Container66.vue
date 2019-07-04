<template>
    <div class="container">
        <div class="row" >
            <div class="col-sm-6">
                <h3>Product</h3>
            </div>
            <div class="col-sm-6" style="text-align:right;">
                <b-dropdown right variant="success" size="sm" >
                    <template slot="button-content"> Tambah </template>
                    <b-dropdown-item @click="showModal('modal-add')">Tambah Data Baru</b-dropdown-item>
                    <b-dropdown-item @click="showModal('modal-upload')">Upload Data Excel</b-dropdown-item>
                    <b-dropdown-item >Download Template Excel</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Container66"
    }
</script>

<style scoped>

</style>