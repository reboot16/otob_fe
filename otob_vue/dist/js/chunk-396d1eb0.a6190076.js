(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396d1eb0"],{2983:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"thx container col-sm-6"},[e("p",{staticStyle:{"text-align":"center"}},[a._v("\n      Hai "),e("b",[a._v(a._s(a.dataOrder.userEmail)+",")]),e("br"),a._v("\n      Terimakasih telah berbelanja di Blibli Bazaar."),e("br"),a._v("\n      Jangan lupa menyelesaikan pembayaran pesanannya ya...\n      "),e("br")]),e("div",{staticStyle:{border:"2px dashed rgb(38, 164, 218)",padding:"0.5em","text-align":"center","background-color":"white"}},[a._v("\n      Id pesanan saat ini:\n      "),e("h2",{staticClass:"order-now",on:{click:function(t){return a.viewDetail(a.ordId)}}},[a._v(a._s(a.ordId))])]),a._m(0)])])},r=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("br"),e("u",[e("b",[a._v("Langkah - langkah pembayaran: ")])]),e("br"),e("ol",{staticStyle:{"text-align":"left"}},[e("li",[a._v("Download nota transaksi anda")]),e("li",[a._v("Kunjungi lokasi bazaar")]),e("li",[a._v("Tunjukkan nota pada cashier")]),e("li",[a._v("Bayarkan sesuai jumlah tertera pada nota")])])])}],i={name:"ThanksOrder",props:{auth:{}},computed:{ordId:function(){return this.$route.params.id},dataOrder:function(){return this.$store.getters.getOrderDetail}},mounted:function(){1==this.auth.isLogin&&1==this.auth.isCustomer?this.$store.dispatch("getOrderByOrderId",this.ordId):this.$router.push("/products")},methods:{viewDetail:function(a){this.$router.push("/orders/customer/"+a+"/detail")}}},s=i,o=(e("84af"),e("2877")),d=Object(o["a"])(s,n,r,!1,null,null,null);t["default"]=d.exports},"3d1b":function(a,t,e){},"84af":function(a,t,e){"use strict";var n=e("3d1b"),r=e.n(n);r.a}}]);
//# sourceMappingURL=chunk-396d1eb0.a6190076.js.map