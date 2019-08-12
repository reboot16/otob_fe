<template>
  <div name="product">
    <div class="container">
      <div class="block">

        <div class="col-sm-12" style="padding: 0">
          <h3>Manage Product</h3>
        </div>

        <div class="row" v-if="auth.isLogin == true && auth.isAdmin == true" style="margin-bottom: 0.5em;">
          <div class="col-sm-9">
            <SearchProduct/>
          </div>
          <div class="col-sm-1">
            <ProductHeaderDropdown @showModalForm="showModal = true" />
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
        <TableCart class="tbl" :listItemCart="listItemCart"/>
      </div>

    </div>
  </div>
</template>

<style >

</style>

<script src="./product.js"></script>