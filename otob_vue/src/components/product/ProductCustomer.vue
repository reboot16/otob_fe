<template>
  <div name="ProductCustomer">
    <div class="container">
      <div class="col-sm-12 row">

        <!-- ================== List of product ==================== -->
        <div class="col-sm-9" style="padding:0 1em 0 0">
          
          <div class="row" style="margin-bottom: 0.5em">
            <div class="col-sm-4" >
              <h3>List of Product</h3>
            </div>
            <div class="col-sm-8" style="text-align:right">
              <div class="input-group">
                <input type="search" class="form-control" placeholder="Search by Name" 
                  v-model="textSearch" v-on:keyup.enter="onSearch">
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button" @click="onSearch" style="margin-left:0;padding:0.25em">Search</button>
                </div>
              </div>
            </div>
          </div>

          <div class="tableContainer">
            <table width="100%" class="table table-hover table-striped scrollTable">
              
              <thead class="fixedHeader"  style="background-color:white">
                <tr class="col-sm-12" style=" color:white; background-color:#0096D9">
                  <th class="col-sm-1">#</th>
                  <th class="col-sm-2">Name</th>
                  <th class="col-sm-2">Description</th>
                  <th class="col-sm-2">List Price</th>
                  <th class="col-sm-2">Offer Price</th>
                  <th class="col-sm-1">Stock</th>
                  <th class="col-sm-2">Action</th>
                </tr>
              </thead>

              <tbody class="scrollContentProduct" style="background-color:white">
                <tr class="col-sm-12" v-for="(product, index) in listProduct" :key="index">
                  <td class="col-sm-1" ><b>{{ index+1 }}</b></td>
                  <td class="col-sm-2" >{{ product.name }}</td>
                  <td class="col-sm-2" >{{ product.description }}</td>
                  <td class="col-sm-2" >{{ product.listPrice }}</td>
                  <td class="col-sm-2" >{{ product.offerPrice }}</td>
                  <td class="col-sm-1" >{{ product.stock }}</td>
                  <td class="col-sm-2">
                    <div class="quantity-toggle">
                      <button @click="decrement(product, index)" :disabled="decDisable(product)" class="btn btn-primary">&mdash;</button>
                      <input type="text" :value="product.qty" readonly>
                      <button @click="increment(product, index)" :disabled="incDisable(product)" class="btn btn-primary">&#xff0b;</button>
                      <button @click="book(product, index)" :disabled="bookDisable(product)" class="btn btn-primary" id="bookBtn">Book</button>
                    </div>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>

        </div>

        <!-- ====================== User Cart ======================= -->
        <div class="col-sm-3" style="padding:0 1em 0 0">
          <cart/>
        </div>

      </div>
    </div>
  </div>

</template>

<style >
  thead.fixedHeader {
    display: table;
    width: 100%
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
    border: 2px solid #ddd;
    padding: .25em .5em .25em .5em;
    font-size: 0.75em;
    cursor: pointer;
  } 

  #bookBtn{
    padding:0 0.5em 0 0.5em;
    margin-left:0.5em;
  }

</style>

<script src="./productCustomer.js"></script>