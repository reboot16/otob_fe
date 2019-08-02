<template>
  <div id="Thanks" class="container col-sm-6" style="text-align:center;border:1px solid #6c757d;margin-top:3em">
      <h3>Thank you, {{username}}</h3>
      <p>
        Terimakasih, karena telah berbelanja melalui Aplikasi OTOB (Offline to Online Bazaar).<br>
        Semoga anda senang dengan layanan yang kami berikan. <br>
        Segera selesaikan pembayaran pesanan anda.
        <br><br>
        <div class="container col-sm-6" >
            <u><b>Langkah - Langkah Pembayaran: </b></u><br>
            <ol style="text-align:left">
                <li>Pergi ke atm terdekat</li>
                <li>Pilih menu transaksi online</li>
                <li>Masukkan nomor rekening</li>
                <li>Masukkan nominal pembayaran</li>
                <li>Selesaikan traksaksi</li>
            </ol>
            <b-link href="/" id="ordr_detail">Order Detail</b-link>
        </div>
      </p>
  </div>
</template>

<style>
  #ordr_detail{
    color: #0096D9;
    font-size: 13px;
  }
</style>

<script>
export default {
  name: 'Product', 
  data() {
    return{
      username : 'My Name'
    }
  }
}
</script>


