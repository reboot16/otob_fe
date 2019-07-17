<template>
  <div name="TableProduct" class="container">
      
      <div class="tableContainer">

        <table width="100%" class="table table-hover table-striped table-scroll small-first-col" style="table-layout: fixed;">

          <thead class="fixedHeader"  style="background-color:white">
            <tr class="col-sm-12">
              <td class="col-sm-1"><b>#</b></td>
              <td class="col-sm-2">Name</td>
              <td class="col-sm-2">Description</td>
              <td class="col-sm-2">List Price</td>
              <td class="col-sm-2">Offer Price</td>
              <td class="col-sm-1">Stock</td>
              <td class="col-sm-2">Action</td>
            </tr>
          </thead>

          <tbody class="scrollContentProduct" style="background-color:white;">
            <tr class="col-sm-12" v-for="(product, index) in listProduct" :key="index">
              <td class="col-sm-1"><b>{{ index+1 }}</b></td>
              <td class="col-sm-2">{{ product.name }}</td>
              <td class="col-sm-2">{{ product.description }}</td>
              <td class="col-sm-2">{{ product.listPrice }}</td>
              <td class="col-sm-2">{{ product.offerPrice }}</td>
              <td class="col-sm-1">{{ product.stock }}</td>
              <td class="col-sm-2">
                <b-dropdown variant="outline-primary" size="sm" right>
                  <template slot="button-content"><li class="fa fa-eye"></li> </template>
                  <b-dropdown-item @click="showModalUpdate(product, index)"><li class="fa fa-edit"></li> Edit</b-dropdown-item>
                  <b-dropdown-item v-on:click="onDelete(product, index)"><li class="fa fa-trash"></li> Delete</b-dropdown-item>
                </b-dropdown>
              </td>
            </tr>
          </tbody>

        </table>
    </div>

    <!-- =============== Form Modal to Add Product ================= -->
    <b-modal ref="modalProductForm" id="modalProductForm" hide-footer>
      <div slot="modal-title" >
        <img id="imgModal" src="@/assets/blibli.jpeg" class="modal-title">
        Tambah Data Baru
      </div>

      <div slot="default">
        <b-form ref="form" @submit.prevent="onHandleSubmit" style="text-align:left" >
          <b-row>
            <b-col sm="3"><label>Nama</label></b-col>
            <b-col sm="9">
              <b-form-input v-model="form.name" placeholder="Masukkan nama produk" required></b-form-input>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="3"><label >Deskripsi</label></b-col>
            <b-col sm="9">
              <b-form-textarea v-model="form.description" rows="3" placeholder="Deskripsi produk" required></b-form-textarea>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="3"><label >Harga Awal</label></b-col>
            <b-col sm="9">
              <b-form-input v-model="form.listPrice" placeholder="0" type="number" required></b-form-input>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="3"><label >Harga Akhir</label></b-col>
            <b-col sm="9">
              <b-form-input v-model="form.offerPrice" placeholder="0" type="number" required></b-form-input>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="3"><label >Stok</label></b-col>
            <b-col sm="9">
              <b-form-input v-model="form.stock" placeholder="0" type="number" required></b-form-input>
            </b-col>
          </b-row><br>
          <div id="r_button">
            <b-button type="submit" variant="success" style="width:100%">
              Tambah Product
            </b-button>
          </div>
        </b-form>
        <div style="text-align: right">
            <span @click="resetForm"
                  style="font-size:14px; padding: 0.2em; color: #068aca; font-weight:bold; cursor:pointer;"> Reset
            </span>
        </div>
      </div>
    </b-modal>

  </div>
</template>

<script src="./TableProduct.js"></script>

<style>
  .table-scroll{
    /*width:100%; */
    display: block;
    /*empty-cells: show;*/

    /* Decoration */
    border-spacing: 0;
    border: 1px solid;
  }

  .table-scroll thead{
    /*background-color: #f1f1f1;*/
    position:relative;
    display: block;
    width:100%;
    overflow-y: scroll;
  }

  .table-scroll tbody{
    /* Position */
    display: block; position:relative;
    width:100%; overflow-y:scroll;
    /* Decoration */
    border-top: 1px solid rgba(0,0,0,0.2);
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

  /* Other options */

  .table-scroll.small-first-col td:first-child,
  .table-scroll.small-first-col th:first-child{
    flex-basis:20%;
    flex-grow:1;
  }

  .table-scroll tbody tr:nth-child(2n){
    /*background-color: rgba(130,130,170,0.1);*/
  }

  .body-half-screen{
    max-height: 50vh;
  }

  .small-col{flex-basis:10%;}

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
