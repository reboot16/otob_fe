<template> 
  <div> 
    <div class="container">
      <div class="row" >
        <div class="col-sm-6">
          <h3>Product <i class="fa fa-user"></i></h3> <ComponentTest/>
        </div>
        <div class="col-sm-6" style="text-align:right;">
            <b-dropdown right variant="success" size="sm" >
              <template slot="button-content"> Tambah </template>
              <b-dropdown-item @click="showModal('modal-add')">Tambah Data Baru</b-dropdown-item>
              <b-dropdown-item @click="showModal('modal-upload')">Upload Data Excel</b-dropdown-item>
              <b-dropdown-item >Download Template Excel</b-dropdown-item>
            </b-dropdown>  
        </div>
      </div>
    </div>
 
    <main id="main">
      <div class="container"> 

        <div class="pull-right multiple-action " >
          <div class="search">
            <SearchProduct/>
          </div>
        </div> <br>
        <div>
          <table class="table table-hover table-striped table-xs-block" >
            <thead>
            <tr style="background-color:#0096D9; color:white">
              <th width="50">#</th>
              <th>Name
              </th>
              <th>Description<i class="fa fa-times"></i></th>
              <th>List Price</th>
              <th>Offer Price</th>
              <th>Stock</th>
              <th width="75" class="text-center">Action</th>
            </tr>
            </thead>
            <tbody style="background-color:white">
            <tr v-for="(product, index) in listProduct" :key="index" >
              <td align="center"><b>{{ index+1 }}</b></td>
              <td v-text="product.name"></td>
              <td v-text="product.description"></td>
              <td v-text="product.listPrice"></td>
              <td v-text="product.offerPrice"></td>
              <td v-text="product.stock"></td>
              <td>
                <b-dropdown variant="outline-primary" size="sm" right>
                  <template slot="button-content"> &#128295; </template>
                  <b-dropdown-item v-on:click="onUpdate(product, index)">Edit</b-dropdown-item>
                  <b-dropdown-item v-on:click="onDelete(product, index)">Delete</b-dropdown-item>
                </b-dropdown>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
     
    <b-modal ref="modal-add" hide-footer v-if="showModalForm">
      <template slot="modal-title">
        <div style="text-align:center; margin-left:150px">
          <img src="@/assets/blibli.jpeg"><br>
          {{submitButton ? 'Tambah' : 'Ubah'}} Product
        </div>
      </template> 
      <div class="d-block text-center">
        <b-form @submit="onSubmit" id="form_product" style="text-align:left" >
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
                {{submitButton ? 'Tambah' : 'Ubah'}} Product
              </b-button> 
          </div>
        </b-form>
      </div> 
    </b-modal>

    <b-modal ref="modal-upload" hide-footer v-if="showModalForm">
      <template slot="modal-title">
        <div style="text-align:center; margin-left:150px">
          <img src="@/assets/blibli.jpeg"><br>
          Upload Data Product
        </div>
      </template> 
      <div class="d-block text-center">
        <b-form @submit="onUpload" id="form_product" style="text-align:left" >  
          <b-row style="padding:0 1em 0 1em"> 
              <b-form-file v-model="file" v-on:change="onChangeFileUpload()" required></b-form-file>
          </b-row><br> 
          <div id="r_button2">
              <b-button type="submit" variant="success" style="width:100%">
                Upload File
              </b-button> 
          </div>
        </b-form>
      </div> 
    </b-modal>

 
  </div> 
</template>

<style scoped>
h5 {
  text-align: center;
}
img{
  height:75px; 
  border-radius:50%; 
  border:1px solid #999999; 
  padding:0.25em;
}
#r_button div, a{
  font-size: 14px;
}
a{
  color:#0096D9;
}
button{
  margin-left:0;
}
</style>

<script src="./product.js"></script>