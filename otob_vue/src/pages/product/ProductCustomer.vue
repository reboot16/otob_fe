<template>
  <div name="ProductCustomer">
    <div class="container">
      <!-- Table Product -->
      <div class="block">
        <TableProductCustomer/>
      </div>

      <!-- Table Cart -->
      <div class="block" style="margin-top:2em;">
        <TableCart/>
      </div>
    </div>
  </div>
      
</template>

<style >
  .block{
    font-family: 'Glegoo', Helvetica, Arial, serif !important;
    background-color:white; 
    padding: 1em; 
    border-radius:0.5em;
    -webkit-box-shadow: 0 8px 6px -6px #999;
    -moz-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 8px 6px -6px #999;
    transition: transform 0.3s;
  }
 
  .block:hover {
    box-shadow: 0 1px 10px #999;
  }

  thead.fixedHeader {
    display: table;
    width: 100%; 
  }

  tbody.scrollContentProduct{
    display: block;
    height: 350px;
    overflow: auto;
  }

  tbody.scrollContentCart{
    display: block;
    height: 200px;
    overflow: auto;
  }

  tbody.scrollContentProduct tr td{
    word-break: break-all;
  }

  /*tbody tr td{*/
  /*  word-break: break-all;*/
  /*}*/

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
    /*border: 2px solid #ddd;*/
    padding: .1em .5em .1em .5em;
    font-size: 0.75em;
    cursor: pointer;
  } 

  #bookBtn{
    padding:0 0.5em 0 0.5em;
    margin-left:0.5em;
  }

</style>

<script src="./productCustomer.js"></script>