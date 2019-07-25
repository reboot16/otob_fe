<template>
  <div name="TableProductCustomer">
      <div class="row" style="margin-bottom: 0.5em">
        <div class="col-sm-4" >
          <h3>List of Product</h3>
        </div>
        <div class="col-sm-8" style="text-align:right">
          <SearchProduct/>
        </div>
      </div>

      <div class="tableContainer">
        <table width="100%" class="table table-hover table-striped table-scroll small-first-col">

        <thead>
          <tr class="col-sm-12">
            <td width="5%"><b>#</b></td>
            <td width="15%">Name</td>
            <td width="15%">Description</td>
            <td width="15%">List Price</td>
            <td width="15%">Offer Price</td>
            <td width="10%">Stock</td>
            <td width="25%">Action</td>
          </tr>
          </thead>

          <tbody>
          <tr class="col-sm-12" v-for="(product, index) in listProduct" :key="index">
            <td width="5%"><b>{{ index+1 }}</b></td>
            <td width="15%">{{ product.name }}</td>
            <td width="15%">{{ product.description }}</td>
            <td width="15%">{{ product.listPrice }}</td>
            <td width="15%">{{ product.offerPrice }}</td>
            <td width="10%">{{ product.stock }}</td>
            <td width="25%">
              <div class="quantity-toggle" v-if="isStockAvailable(product.stock)">
                <button @click="decrement(product, index)" :disabled="decDisable(product)" class="btn btn-primary">&mdash;</button>
                <input type="text" :value="product.qty" readonly>
                <button @click="increment(product, index)" :disabled="incDisable(product)" class="btn btn-primary">&#xff0b;</button>
                <button @click="book(product, index)" :disabled="bookDisable(product)" class="btn btn-primary" id="bookBtn">Book</button>
              </div>
              <div v-else style="text-align: center; color: red; font-style: italic">Stock Habis</div>
            </td>
          </tr>
          </tbody>

        </table>
    </div>
  </div>
</template>

<script src="./TableProductCustomer.js"></script>

<style></style>
