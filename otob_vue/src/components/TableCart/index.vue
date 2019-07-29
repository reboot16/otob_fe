<template> 
  <div name="TableCart">  
    <div class="row" style="margin-bottom: 0.5em">
      <div class="col-sm-6">
        <h3>My Cart</h3>
      </div>
      <div class="col-sm-6" style="text-align:right">
        <button class="btn btn-primary" @click="onOrder">Order Now</button>
      </div>
    </div>

    <div class="tableContainer">
      <table width="100%" class="table table-hover table-striped table-scroll small-first-col">

      <thead>
          <tr class="col-sm-12">
            <th width="4%">#</th>
            <th width="25%">Name</th>
            <th width="25%">Price</th>
            <th width="25%">Quantity</th>
            <th width="20%"> Action</th>
          </tr>
        </thead>

        <tbody class="scrollContentCart">
          <tr class="col-sm-12" v-if="listItemCart.length == 0">
            <td width="4%" class="empty-cart" style="text-align: center"><h5>Empty cart :(</h5></td>
          </tr>
          <tr class="col-sm-12" v-else v-for="(product, index) in listItemCart" :key="index" >
            <td width="4%"><b>{{ index+1 }}</b></td>
            <td width="25%">{{ product.productName }}</td>
            <td width="25%">{{ product.productPrice }}</td>
            <td  width="25%">
              <div class="quantity-toggle">
                <button @click="decrement(product, index)" class="btn btn-primary">&mdash;</button>
                <input type="text" :value="product.qty" readonly>
                <button @click="increment(product, index)" class="btn btn-primary">&#xff0b;</button>
              </div>
            </td>
            <td width="20%">
              <b-link @click="onDelete(product, index)" style="color:red" >Delete</b-link>
            </td>
          </tr>
        </tbody>

      </table> 
    </div>

  </div> 
 
</template>

<script src="./TableCart.js"></script>

<style scoped> </style>