<template> 
  <div id="Cart">  
    <div class="container">  
      <b-row>
        <div class="col-sm-3">
          <b-button to="/product_cust">Back to Product</b-button>
        </div>
        <div class="col-sm-6" style="text-align:center">
          <h3>List Items on Cart</h3>
        </div>
        <div class="col-sm-3" style="text-align:right">
           <b-button @click="onOrder" variant="success">Order Now</b-button>
        </div>
      </b-row>
      <table class="table table-hover table-striped " >
        <thead>
        <tr style="color:white; background-color:#0096D9">
            <th width="50">#</th>
            <th>Name</th>
            <th>Price</th>
            <th width="200">Quantity</th> 
            <th width="100">Action</th>
        </tr>
        </thead>
        <tbody style="background-color:white">
        <tr v-for="(product, index) in listItemCart" :key="index" >
            <td align="center"><b>{{ index+1 }}</b></td>
            <td v-text="product.productName"></td>
            <td v-text="product.productPrice"></td>
            <td> 
              <div class="quantity-toggle">
                <button @click="decrement(product, index)" :disabled="decDisable(product)" class="btn btn-primary">&mdash;</button>
                <input type="text" :value="product.qty" readonly>
                <button @click="increment(product, index)" :disabled="incDisable(product)" class="btn btn-primary">&#xff0b;</button>
              </div>
            </td>
            <td>
              <b-link @click="onDelete(product, index)">Delete</b-link>
            </td>
        </tr>
        </tbody>
      </table> 
    </div> 
 
  </div> 
</template>

<style scoped>
h5 {
  text-align: center;
}
img{
  height:30px; 
  border-radius:50%; 
  border:1px solid #999999; 
  padding:0.1em;
}
tr td a{
  font-size: 14px;
  color:#0096D9;
}
.btn{
  font-size: 14px;
  margin-left:0;
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
    /*background: #f5f5f5; */
    font-size: 0.75em;
    cursor: pointer;
} 
</style>

<script src="./cart.js"></script>