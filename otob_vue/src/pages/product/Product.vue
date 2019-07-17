<template> 
  <div name="product">

    <div class="container header-body">
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
    </div> 

    <TableProduct/>
 
  </div> 
</template>

<style src="@/static/css/main.css"></style>

<script src="./product.js"></script>