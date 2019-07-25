<template> 
  <div name="product">

    <div class="container header-body">
      <div class="block">
        <div class="row" style="margin-bottom: 0.5em">
          <div class="col-sm-3" >
            <h3>Product</h3>
          </div>
          <div class="col-sm-7">
            <SearchProduct/>
          </div>
          <div class="col-sm-2">
              <ProductHeaderDropdown/>
          </div>
        </div>

        <TableProduct :listProduct="listProduct"/>
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
</style>

<script src="./product.js"></script>