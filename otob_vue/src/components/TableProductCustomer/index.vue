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
        <table width="100%" class="table table-hover table-striped table-scroll small-first-col" style="table-layout: fixed;">

        <thead class="fixedHeader"  style="background-color:white">
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

          <tbody class="scrollContentProduct" style="background-color:white;">
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

<style>
  .table-scroll{
    /*width:100%; */
    display: block;
    empty-cells: show;

    /* Decoration */
    border-spacing: 0;
    border: 1px solid;
  }

  .table-scroll thead{
    /*background-color: #f1f1f1;*/
    position:relative;
    display: block;
    width:100%;
    overflow-y: scroll;
  }

  .table-scroll tbody{
    /* Position */
    display: block; position:relative;
    width:100%; overflow-y:scroll;
    /* Decoration */
    border-top: 1px solid rgba(0,0,0,0.2);
  }

  .table-scroll tr{
    width: 100%;
    display:flex;
  }

  .table-scroll td,.table-scroll th{
    flex-basis:100%;
    flex-grow:2;
    display: block;
    padding: 1rem;
    text-align:left;
  }

  /* Other options */

  .table-scroll.small-first-col td:first-child,
  .table-scroll.small-first-col th:first-child{
    flex-basis:20%;
    flex-grow:1;
  }

  .table-scroll tbody tr:nth-child(2n){
    /*background-color: rgba(130,130,170,0.1);*/
  }
  thead.fixedHeader {
    display: table;
    width: 100%; 
  }

  tbody.scrollContentProduct{
    display: block;
    height: 350px;
    overflow: auto;
  }

  tbody.scrollContentCart{
    display: block;
    height: 200px;
    overflow: auto;
  }

  tbody.scrollContentProduct tr td{
    word-break: break-all;
  }

  .quantity-toggle {
    display: flex;
  }

  .quantity-toggle input {
    border: 0;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    width: 2em;
    text-align: center;
    padding: 0.1em;
  }
  .quantity-toggle button {
    /*border: 2px solid #ddd;*/
    padding: .1em .5em .1em .5em;
    font-size: 0.75em;
    cursor: pointer;
  } 

  #bookBtn{
    padding:0 0.5em 0 0.5em;
    margin-left:0.5em;
  }
</style>
