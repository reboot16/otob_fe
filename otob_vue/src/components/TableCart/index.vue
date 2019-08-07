<template> 
  <div name="TableCart">

    <div class="tableContainer">
      <table width="100%" class="table table-scroll small-first-col" style="border-radius: 1em">
        <tbody class="scrollContentCart">
          <tr ref="listItemCart" class="col-sm-12" v-if="listItemCart.length != 0"
              v-for="(product, index) in listItemCart" :key="index" >
            <td class="col-sm-7">{{ product.productName }}slkdlskdjs;ds;ldjsdsdsdslkdslknaskjcfnbckjbdkjblvdvbkdjvld</td>
            <td class="col-sm-2 item-price" width="25%">Rp {{ product.productPrice }}</td>
            <td class="col-sm-2" style="text-align: center;">
              <div class="quantity-toggle">
                <button @click="decrement(product, index)" class="btn btn-cart btn-left">&mdash;</button>
                <input type="text" :value="product.qty" readonly class="input-cart">
                <button @click="increment(product, index)" class="btn btn-cart btn-right">&#xff0b;</button>
              </div>
            </td>
            <td class="col-sm-1" style="text-align: right;">
              <button @click="onDelete(product, index)"
                style="color:red; padding:0.3em 0.5em; color:white; font-size: 18px"
                class="btn btn-danger">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>

          <tr class="col-sm-12" v-else>
            <td width="4%" class="empty-cart" style="text-align: center"><h5>Empty cart :(</h5></td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="row" style="margin-bottom: 0.5em">
      <div class="col-sm-10" style="text-align:right">
        <div style="font-size: 13px">Total Belanja <b> ({{ countOfItem }}) </b></div>
        <span class="price-checkout">Rp {{ sumOfPrice }}</span>
      </div>
      <div class="col-sm-2" style="text-align:right">
        <button class="btn btn-checkout" @click="onOrder">Order Now</button>
      </div>
    </div>

  </div> 
 
</template>

<script src="./TableCart.js"></script>

<style scoped>
  .price-checkout{
    font-size: 22px;
    color: #f37021;
    font-weight: bold;
  }

  span {
    color: #929292;
  }
  .input-cart {
    background-color: #e4e4e4;
    border: 1px solid #c2c2c2;
  }

  .btn-cart {
    color: #fff;
    background-color: #a7a7a7;
  }

  .btn-checkout {
    height: 50px;
    color: #fff;
    background-color: #f37021;
  }
</style>