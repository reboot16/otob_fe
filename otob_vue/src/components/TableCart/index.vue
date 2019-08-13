<template> 
  <div name="TableCart">
      <table width="100%" class="table">
        <tbody>
          <tr v-for="(product, index) in listItemCart" :key="index"  style="display: flex">
            <td class="col-sm-8">{{ product.productName }}</td>
            <td class="col-sm-2 color-orange item-price" style="text-align: right">{{ getFormattedCurrency (product.productPrice) }}</td>
            <td class="col-sm-2" style="display: flex;">
              <div  style="display: flex">
                <div class=" qty">
                  <button @click="decrement(product, index)" class="btn btn-gray btn-left">&mdash;</button>
                  <input type="text" :value="product.qty" readonly class="input-gray">
                  <button @click="increment(product, index)"class="btn btn-gray btn-right">&#xff0b;</button>
                </div>
              </div>
              <button @click="onDelete(product, index)"
                style="padding:0.1em 0.5em; color:white; font-size: 18px; margin-left: 3px"
                class="btn btn-red">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row" style="margin-bottom: 0.5em">
        <div class="col-sm-10" style="text-align:right">
          <div style="font-size: 13px">Total Belanja <b> ({{ countOfItem }}) </b></div>
          <span class="color-orange checkout-price"> {{ getFormattedCurrency(sumOfPrice) }}</span>
        </div>
        <div class="col-sm-2" style="text-align:right" >
          <button class="btn btn-orange" @click="onOrder" :disabled="bookDisable(countOfItem)" width="100%">Order Now</button>
        </div>
      </div>
  </div> 
 
</template>

<script src="./TableCart.js"></script>

<style scoped>
  .checkout-price{
    font-size: 22px;
    font-weight: bold;
  }

  .item-price{
    font-size: 18px;
    font-weight: bold;
  }

  .cart-price{
    font-size: 18px;
  }

  span {
    color: #929292;
  }

  .btn-orange {
    height: 50px;
    border-radius: 0.5em;
  }
</style>