<template>
  <div name="TableProduct" class="">
    <div class="tbl-admin" v-if="auth.isLogin == true && auth.isAdmin == true">
      <TableAdmin :listProduct="listProduct"/>
    </div>

    <div class="tbl-customer" v-if="auth.isLogin == true && auth.isCustomer == true">
      <TableCustomer :listProduct="listProduct"/>
    </div>

    <div class="tbl-guest" v-if="auth.isLogin == false || auth.isCashier == true">
      <TableGuest :listProduct="listProduct"/>
    </div>
  </div>
</template>

<script src="./TableProduct.js"></script>