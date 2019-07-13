<template> 
  <div> 
    <TableProduct/>
 
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
      <div slot="modal-title">
        <div style="text-align:center; margin-left:150px">
          <img src="@/assets/blibli.jpeg"><br>
          Upload Data Product
        </div>
      </div> 
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

<style src="@/static/css/main.css"></style>

<script src="./product.js"></script>