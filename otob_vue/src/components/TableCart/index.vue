<template> 
  <div name="TableCart">
      <table width="100%" class="table">
        <tbody>
          <tr v-for="(product, index) in listItemCart" :key="index"  style="display: flex">
            <td class="col-sm-8">{{ product.name }}</td>
            <td class="col-sm-2 color-orange item-price" style="text-align: right">{{ formatCurrency
							(product.offerPrice) }}</td>
            <td class="col-sm-2" style="display: flex;">
              <CustomButton :product="product" :index="index"/>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="row" style="margin-bottom: 0.5em">
        <div class="col-sm-10" style="text-align:right">
          <div style="font-size: 13px">Total Belanja <b> ({{ countOfItem }}) </b></div>
          <span class="color-orange checkout-price"> {{ formatCurrency(sumOfPrice) }}</span>
        </div>
        <div class="col-sm-2" style="text-align:right" >
          <button class="btn btn-orange" @click="onOrder" width="100%" id="btnOrder">Pesan Sekarang</button>
        </div>
      </div>

      <CustomAlert v-if="showModalAlert"
         @close="showModalAlert=false"
         @continue="continueCheckout" >
        <div slot="alert-name" style="text-align: center">
          Lanjutkan proses pemesanan produk ?
        </div>
      </CustomAlert>
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