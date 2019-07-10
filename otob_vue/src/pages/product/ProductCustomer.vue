<template>
  <div name="ProductCustomer">
    <div class="container"> 

      <div id="block">
        <div class="row" style="margin-bottom: 0.5em">
          <div class="col-sm-4" >
            <h3>List of Product</h3>
          </div>
          <div class="col-sm-8" style="text-align:right">
            <SearchProduct/>
          </div>
        </div>

        <div class="tableContainer">
          <table width="100%" class="table table-hover table-striped scrollTable"  
            style="table-layout: fixed;">
            
            <thead class="fixedHeader"  style="background-color:white">
              <tr class="col-sm-12">
                <th width="col-sm-1">#</th>
                <th width="col-sm-2">Name</th>
                <th width="col-sm-2">Description</th>
                <th width="col-sm-2">List Price</th>
                <th width="col-sm-2">Offer Price</th>
                <th width="col-sm-1">Stock</th>
                <th width="col-sm-2">Action</th>
              </tr>
            </thead>

            <tbody class="scrollContentProduct" style="background-color:white;">
              <tr class="col-sm-12" v-for="(product, index) in listProduct" :key="index">
                <td width="10%"><b>{{ index+1 }}</b></td>
                <td width="20%">{{ product.name }}</td>
                <td width="20%">{{ product.description }}</td>
                <td width="12%">{{ product.listPrice }}</td>
                <td width="13%">{{ product.offerPrice }}</td>
                <td width="20%">{{ product.stock }}</td>
                <td width="15%">
                <!-- <td width="col-sm-1"><b>{{ index+1 }}</b></td>
                <td width="col-sm-2">{{ product.name }}</td>
                <td width="col-sm-2">{{ product.description }}</td>
                <td width="col-sm-2">{{ product.listPrice }}</td>
                <td width="col-sm-2">{{ product.offerPrice }}</td>
                <td width="col-sm-1">{{ product.stock }}</td>
                <td width="col-sm-2"> -->
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

      <!-- <table-product-customer/> -->
      
      <!-- ====================== User Cart ======================= -->
      <div id="block" style="margin-top:2em;"> 
        <TableCart/>
      </div>

      </div> 
  </div>
      
</template>

<style >
  #block{
    font-family: 'Glegoo', Helvetica, Arial, serif !important;
    background-color:white; 
    padding: 1em; 
    border-radius:0.5em;
    -webkit-box-shadow: 0 8px 6px -6px #999;
    -moz-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 8px 6px -6px #999;
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

  /*tbody tr td{*/
  /*  word-break: break-all;*/
  /*}*/

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

<script src="./productCustomer.js"></script>