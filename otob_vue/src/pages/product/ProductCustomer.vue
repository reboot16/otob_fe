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