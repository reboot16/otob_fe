<template>
  <div name="product">
    <div class="container">
      <div class="block">

        <div>
          <h3>Daftar Produk</h3>
        </div>

        <div class="row" v-if="auth.isLogin == true && auth.isAdmin == true" style="margin-bottom: 0.5em;">
          <div class="col-sm-11">
            <SearchProduct/>
          </div>
          <div class="col-sm-1" style="text-align: right; padding-left: 0">
            <ButtonAdd />
          </div>
        </div>

        <div v-else style="margin-bottom: 0.5em">
          <SearchProduct/>
        </div>

        <div class="tbl-product">
          <TableProduct :listProduct="listProduct" :auth="auth"/>
        </div>

        <div style="text-align: center">
          <CustomPagination :totalPage="totalPage"/>
        </div>
      </div>

      <!-- Table Cart -->
      <div class="block" style="margin-top:2em;" v-if="auth.isLogin == true && auth.isCustomer == true && listItemCart.length > 0">
        <TableCart class="tbl" />
      </div>

    </div>
  </div>
</template>

<style >

</style>

<script src="./product.js"></script>