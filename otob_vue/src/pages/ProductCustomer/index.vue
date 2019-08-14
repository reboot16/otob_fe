<template>
  <div name="ProductCustomer">
    <div class="container">
      <!-- Table Product -->
      <div class="block">
        <div class="row" style="margin-bottom: 0.5em">
          <div class="col-sm-4" >
            <h3>List of Product</h3>
          </div>
          <div class="col-sm-8" style="text-align:right">
            <SearchProduct/>
          </div>
        </div>

        <TableProductCustomer class="tbl"
          :listProduct="listProduct"
          :isLogin="auth.isLogin"
          :totalPage="totalPage"/>
      </div>

      <!-- Table Cart -->
      <div class="block" style="margin-top:2em;" v-if="auth.isLogin==true && listItemCart.length > 0">
        <TableCart class="tbl" :listItemCart="listItemCart"/>
      </div>

      <ProgressBar/>
    </div>
  </div>
      
</template>

<style >
   

</style>

<script src="./productCustomer.js"></script>