<template>
  <div name="TableProduct" class="">
    <div class="tbl-admin" v-if="isLogin == true && isAdmin == true">
      <TableAdmin :listProduct="listProduct"/>
    </div>

    <div class="tbl-customer" v-if="isLogin == true && isCustomer == true">
      <TableCustomer :listProduct="listProduct"/>
    </div>

    <div class="tbl-guest" v-if="isLogin == false">
      <TableGuest :listProduct="listProduct"/>
    </div>
  </div>
</template>

<script src="./TableProduct.js"></script>