<template>
  <div name="ProductCustomer">
    <div class="container">
      <!-- Table Product -->
      <div class="block">
        <TableProductCustomer class="tbl"
          :listProduct="listProduct"
        />
      </div>

      <!-- Table Cart -->
      <div class="block" style="margin-top:2em;">
        <TableCart class="tbl"
          :listItemCart="listItemCart"
          :listProduct="listProduct"
        />
      </div>
    </div>
  </div>
      
</template>

<style >
   /* =============================== CSS FOR BLOCK CONTAINER ======================== */
  .block{
    font-family: 'Glegoo', Helvetica, Arial, serif !important;
    background-color:white; 
    padding: 1em; 
    border-radius:0.5em;
    -webkit-box-shadow: 0 8px 6px -6px #999;
    -moz-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 8px 6px -6px #999;
    transition: transform 0.3s;
    border: 1px solid #dee2e6;
  }
 
  .block:hover {
    box-shadow: 0 1px 10px #999;
  }
   /* ======================== END OF CSS FOR BLOCK CONTAINER ======================== */

   /* =============================== CSS FOR SCROLL TABLE =========================== */
  .table-scroll {
    table-layout: fixed;
  }

  thead {
    background-color: rgb(38, 164, 218);
    color: white;
    font-weight: bold;
  }

  tbody{
    display: block;
    height: 350px;
    overflow: auto;
    background-color:white;
  }

  tbody.scrollContentCart{
    display: block;
    height: 200px;
    overflow: auto;
  }

  tbody tr td{
   word-break: break-all;
  }
  
  .table-scroll tr{
    width: 100%;
    display:flex;
  }

  .table-scroll td,.table-scroll th{
    flex-basis:100%;
    flex-grow:2;
    display: block;
    padding: 1rem;
    text-align:left;
  }

  .table-scroll.small-first-col td:first-child,
  .table-scroll.small-first-col th:first-child{
    flex-basis:20%;
    flex-grow:1;
  }
   /* ======================== END OF CSS FOR SCROLL TABLE =========================== */

   /* ============================== CSS FOR BUTTON MODIFY =========================== */
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

  #bookBtn{
    padding:0 0.5em 0 0.5em;
    margin-left:0.5em;
  }
   /* ======================== END OF CSS FOR BUTTON MODIFY =========================== */

</style>

<script src="./productCustomer.js"></script>