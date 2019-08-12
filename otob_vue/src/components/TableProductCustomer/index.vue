<template>
  <div name="TableProductCustomer">

    <table width="100%" class="table">
      <thead>
      <tr  style="display: flex">
        <td class="col-sm-2">Name</td>
        <td class="col-sm-3">Description</td>
        <td class="col-sm-2">List Price</td>
        <td class="col-sm-2">Offer Price</td>
        <td class="col-sm-1">Stock</td>
        <td class="col-sm-2">Action</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, index) in listProduct" :key="index" style="display: flex">
        <td class="col-sm-2">{{ product.name }}</td>
        <td class="col-sm-3">{{ product.description }}</td>
        <td class="col-sm-2"> {{ getFormattedCurrency (product.listPrice) }}</td>
        <td class="col-sm-2"> {{ getFormattedCurrency (product.offerPrice) }}</td>
        <td class="col-sm-1">{{ product.stock }}</td>
        <td class="col-sm-2">
          <div v-if="isStockAvailable(product.stock)">
            <div  style="display: flex" class="row">
              <div class=" qty">
                <button @click="decrement(product, index)" :disabled="decDisable(product)" class="btn btn-gray btn-left">&mdash;</button>
                <input type="text" :value="product.qty" readonly class="input-gray">
                <button @click="increment(product, index)" :disabled="incDisable(product)" class="btn btn-gray btn-right">&#xff0b;</button>
              </div>
              <div class="">
                <button @click="addToCart(product, index)" class="btn btn-blue btn-book" style="font-size: 13px">Add</button>
              </div>
            </div>
          </div>
          <div v-else style="text-align: center; color: red; font-style: italic">Stock Habis</div>
        </td>
      </tr>
      </tbody>
    </table>

    <div style="text-align: center">
      <CustomPagination :totalPage="totalPage"/>
    </div>

  </div>
</template>

<script src="./TableProductCustomer.js"></script>

<style></style>
