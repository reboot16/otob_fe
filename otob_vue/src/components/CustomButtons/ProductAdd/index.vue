<template>
  <div name="product-header-button">
    <!-- =============== Dropdown Button to Trigger Modal ================= -->
    <b-dropdown right variant="primary" size="sm">
        <template slot="button-content"> <li class="fa fa-plus" style="padding: 0 0.5em"></li> </template>
        <b-dropdown-item @click="showModalAdd = true">Tambah Data Baru</b-dropdown-item>
        <b-dropdown-item @click="showModalBatch = true">Upload Data Excel</b-dropdown-item>
<!--        <b-dropdown-item >Download Template Excel</b-dropdown-item>-->
    </b-dropdown>

    <!-- =============== Form Modal to Add Product ================= -->
    <CustomModal v-if="showModalAdd" @close="showModalAdd=false">
      <div slot="header">
        <h4>Tambah Product</h4>
      </div>

      <div slot="body">
        <b-form ref="form" @submit.prevent="onHandleSubmit" @reset="resetForm">
          <div class="row grup-input">
            <label>Nama</label>
            <b-form-input type="text" v-model="form.name" placeholder="Masukkan nama produk" required/>
          </div>
          <div class="row grup-input">
            <label>Deskripsi</label>
            <b-form-textarea  v-model="form.description" placeholder="Masukkan deskripsi produk" required rows="3"/>
          </div>
          <div class="row grup-input">
            <label>Harga Awal</label>
            <b-form-input v-model="form.listPrice" placeholder="Harga awal" required type="number"/>
          </div>
          <div class="row grup-input">
            <label>Harga Akhir</label>
            <b-form-input v-model="form.offerPrice" placeholder="Harga akhir" required type="number"/>
          </div>
          <div class="row grup-input">
            <label>Stock</label>
            <b-form-input v-model="form.stock" placeholder="Stock" required type="number"/>
          </div>

          <div class="row grup-input">
            <b-button type="submit" variant="success" style="width:100%">
              Tambah Product
            </b-button>
          </div>

          <div style="text-align: right">
            <b-button class="reset-btn" type="reset"> Reset </b-button>
          </div>
        </b-form>
      </div>
    </CustomModal>

    <!-- =============== Form Modal to Upload Product ================= -->
    <CustomModal v-if="showModalBatch" @close="showModalBatch=false">
      <div slot="header">
        <h4>Upload Product</h4>
      </div>

      <div slot="body">
        <b-form @submit.prevent="onHandleUpload" ref="formBatch" style="text-align:left" >
          <div style="padding-top: 1em">
<!--            <b-form-file v-model="file" ref="file" id="file" v-on:change="onChangeFileUpload()" required></b-form-file>-->
            <input type="file" id="file" ref="file" multiple v-on:change="onChangeFileUpload()"/>
          </div><br>
          <div>
            <b-button type="submit" variant="success" style="width:100%">
              Upload File
            </b-button>
          </div>
          <div style="text-align: right">
            <b-button class="reset-btn" type="reset"> Reset </b-button>
          </div>
        </b-form>
      </div>
    </CustomModal>

  </div>
  
</template>

<script src="./ProductAdd.js"></script>

<style src="./ProductAdd.css"></style>

