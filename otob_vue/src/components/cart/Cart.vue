<template> 
  <div name="Cart">  

    <div class="row" style="margin-bottom: 0.5em">
      <div class="col-sm-6">
        <h3>My Cart</h3>
      </div>
      <div class="col-sm-6" style="text-align:right">
        <button class="btn btn-info" @click="onOrder">Order Now</button>
      </div>
    </div>

    <div class="tableContainer">
      <table width="100%" class="table table-hover table-striped scrollTable">
        <thead class="fixedHeader"  style="background-color:white">
          <tr class="col-sm-12" style="color:white; background-color: #17a2b8">
            <th class="col-sm-1">#</th>
            <th class="col-sm-3">Name</th>
            <th class="col-sm-3">Price</th>
            <th class="col-sm-3">Quantity</th> 
            <th class="col-sm-2"> Action</th>
          </tr>
        </thead>
        <tbody class="scrollContentCart" style="background-color:white">
          <tr class="col-sm-12" v-for="(product, index) in listItemCart" :key="index" >
            <td class="col-sm-1" align="center"><b>{{ index+1 }}</b></td>
            <td class="col-sm-3">{{ product.productName }}</td>
            <td class="col-sm-3">{{ product.productPrice }}</td>
            <td class="col-sm-3"> 
              <div class="quantity-toggle">
                <button @click="decrement(product, index)" :disabled="decDisable(product)" class="btn btn-info">&mdash;</button>
                <input type="text" :value="product.qty" readonly>
                <button @click="increment(product, index)" :disabled="incDisable(product)" class="btn btn-info">&#xff0b;</button>
              </div>
            </td>
            <td class="col-sm-2">
              <b-link @click="onDelete(product, index)" style="color:red" >Delete</b-link>
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
</style>

<script src="./cart.js"></script>