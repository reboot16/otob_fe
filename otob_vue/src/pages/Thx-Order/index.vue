<template>
  <div>
    <div class="thx container col-sm-6">
      <p style="text-align: center">
        Hai <b>{{ dataOrder.userEmail }},</b><br>
        Terimakasih telah berbelanja di Blibli Bazaar.<br>
        Jangan lupa menyelesaikan pembayaran pesanannya ya...
        <br>
      </p>
      <div style="border: 2px dashed rgb(38, 164, 218); padding: 0.5em; text-align: center; background-color: white">
        Id pesanan saat ini:
        <h2 class="order-now" @click="viewDetail(ordId)">{{ ordId }}</h2>
      </div>
      <div>
        <br>
        <u><b>Langkah - langkah pembayaran: </b></u><br>
        <ol style="text-align:left">
          <li>Download nota transaksi anda</li>
          <li>Kunjungi lokasi bazaar</li>
          <li>Tunjukkan nota pada cashier</li>
          <li>Bayarkan sesuai jumlah tertera pada nota</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style>
  #ordr_detail{
    color: #0096D9;
    font-size: 13px;
  }
  .thx {
    border-radius: 1em;
    margin-top:3em;
  }
  .order-now:hover{
    cursor: pointer;
  }
</style>

<script>
export default {
  name: 'ThanksOrder',
  props: {
    auth: {}
  },
  computed: {
    ordId () {
      return this.$route.params.id
    },
    dataOrder () {
      return this.$store.getters.getOrderDetail
    }
  },
  mounted (){
    if(this.auth.isLogin == true && this.auth.isCustomer == true){
      this.$store.dispatch('getOrderByOrderId', this.ordId)
    } else{
      this.$router.push('/products')
    }

  },
  methods: {
    viewDetail(id){
      this.$router.push('/orders/customer/'+id+'/detail')
    },
  }
}
</script>


