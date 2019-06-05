<template>
    <b-form id="form_product" style="text-align:left" >
        <b-row>
            <b-col sm="3"><label>Nama Produk</label></b-col>
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
        <b-row id="r_button">
            <b-button type="reset" variant="danger">Reset</b-button>
            <b-button type="submit" variant="success">Submit</b-button>
        </b-row>
    </b-form>
</template>


<style>
button{
  margin-left: 1em;
} 
</style>


<script>
    
const API = 'http://localhost:9000/api/products'

export default {
  name: 'form_product', 
  data() {
    return {
      form: {
        name: '',
        description: '',
        listPrice: '',
        offerPrice: '',
        stock: ''
      }, 
    }
  },
  methods: {
     
  },
 
}
</script>

