<template>
  <div name="TableProduct" class="container">
      
      <div class="tableContainer">
        <table width="100%" class="table table-hover table-striped scrollTable" style="table-layout: fixed;">

          <thead class="fixedHeader"  style="background-color:white">
          <tr class="col-sm-12">
            <td width="5%"><b>#</b></td>
            <td width="15%">Name</td>
            <td width="15%">Description</td>
            <td width="15%">List Price</td>
            <td width="15%">Offer Price</td>
            <td width="10%">Stock</td>
            <td width="25%">Action</td>
          </tr>
          </thead>

          <tbody class="scrollContentProduct" style="background-color:white;">
          <tr class="col-sm-12" v-for="(product, index) in listProduct" :key="index">
            <td width="5%"><b>{{ index+1 }}</b></td>
            <td width="15%">{{ product.name }}</td>
            <td width="15%">{{ product.description }}</td>
            <td width="15%">{{ product.listPrice }}</td>
            <td width="15%">{{ product.offerPrice }}</td>
            <td width="10%">{{ product.stock }}</td>
            <td width="25%">
              <b-dropdown variant="outline-primary" size="sm" right>
                <template slot="button-content"> &#128295; </template>
                <b-dropdown-item @click="onUpdate(product, index)">Edit</b-dropdown-item>
                <b-dropdown-item v-on:click="onDelete(product, index)">Delete</b-dropdown-item>
              </b-dropdown>
            </td>
          </tr>
          </tbody>

        </table>
    </div>
  </div>
</template>

<script src="./TableProduct.js"></script>

<style>
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
