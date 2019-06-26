<template>

  <div>
    <main id="main">

      <div class="container">
        <div class="pull-right multiple-action " >
          <div class="search">
            <div class="input-group">
              <input type="search" class="form-control" placeholder="Search by Name" 
                v-model="textSearch" v-on:keyup.enter="onSearch">
              <div class="input-group-append">
                <b-button type="button" variant="primary" @click="onSearch" style="margin-left:0;padding:0.25em">Search</b-button>
              </div>
            </div>
          </div>
        </div> <br>

        <div>
          <table class="table table-bordered table-hover table-striped table-xs-block" >
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
                  <button @click="increment(product.stock)" :disabled="decDisable(product)" class="btn btn-primary">&#xff0b;</button>
                  <button class="btn btn-primary" id="bookBtn" @click="book(product, index)">Book</button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>


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
    font-size: 13px;
    margin-left:0.5em;
  }
  .tabel td{
    font-size: 5px;
  }

</style>

<script src="./productCustomer.js"></script>