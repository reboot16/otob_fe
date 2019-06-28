<template>
  <div name="ProductCustomer">
    <div class="container">
      <div class="col-sm-12 row">

        <!-- ================== List of product ==================== -->
        <div class="col-sm-9">
          
          <div class="row" style="margin-bottom: 1em">
            <div class="col-sm-4" >
              <h3>List of Product</h3>
            </div>
            <div class="col-sm-8" style="text-align:right">
              <div class="input-group">
                <input type="search" class="form-control" placeholder="Search by Name" 
                  v-model="textSearch" v-on:keyup.enter="onSearch">
                <div class="input-group-append">
                  <button class="btn btn-success" type="button" @click="onSearch" style="margin-left:0;padding:0.25em">Search</button>
                </div>
              </div>
            </div>
          </div>

          <table class="table table-bordered table-hover table-striped table-xs-block table-scrollY">
            <thead>
              <tr style="color:white; background-color:#0096D9">
                <th width="50">#</th>
                <th>Name</th>
                <th>Description</th>
                <th>List Price</th>
                <th>Offer Price</th>
                <th>Stock</th>
                <th width="105" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody style="background-color:white">
              <tr v-for="(product, index) in listProduct" :key="index">
                <td align="center"><b>{{ index+1 }}</b></td>
                <td v-text="product.name"></td>
                <td v-text="product.description"></td>
                <td v-text="product.listPrice"></td>
                <td v-text="product.offerPrice"></td>
                <td v-text="product.stock"></td>
                <td>
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

        <!-- ====================== User Cart ======================= -->
        <div class="col-sm-3" style="padding:0">
          <cart/>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>
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

  .quantity-toggle button{
      border: 2px solid #ddd;
      padding: 0 .55em 0 .55em;
      /*background: #f5f5f5;*/
      /*color: #888;*/
      font-size: 0.75em;
      cursor: pointer;
  }

  #bookBtn{
    padding:0 0.5em 0 0.5em;
    margin-left:0.5em;
  }

  .tabel td{
    font-size: 5px;
  }

</style>

<script src="./productCustomer.js"></script>