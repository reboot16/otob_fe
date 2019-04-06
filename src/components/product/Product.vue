<template>

  <div>
    <header id="header">
      <div class="container">
        <h4>Product
          <b-button v-on:click="onCreate">Tambah</b-button>
          <b-button v-on:click="onUpload">Upload</b-button>
        </h4>
      </div>
    </header>
    <main id="main">

      <div class="container">
        <div>
          <b-form v-if="showFormUpload">
            <b-form-file v-model="file" plain id="file" ref="file" v-on:change="handleFileUpload()"></b-form-file><br>
            <b-button type="submit" variant="primary" v-on:click="submitFile()">Upload</b-button>
          </b-form>
        </div>

        <div class="pull-right multiple-action " >
          <div class="search">
            <div class="input-group">
              <input type="search" class="form-control" placeholder="Search by Name" v-model="text">
              <b-button type="button" variant="primary" @click="onSearch">Search</b-button>
            </div>
          </div>
        </div> <br>

        <b-form @submit="onSubmit" class="col-sm-6 col-sm-offset-3" v-if="showForm">
          <b-row>
            <b-col sm="2">
              <label >Nama Produk :</label>
            </b-col>
            <b-col sm="10">
              <b-form-input v-model="form.name" placeholder="Masukkan nama produk" required></b-form-input>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="2">
              <label >Deskripsi :</label>
            </b-col>
            <b-col sm="10">
              <b-form-textarea v-model="form.description" rows="3" placeholder="Deskripsi produk" required></b-form-textarea>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="2">
              <label >Harga Awal :</label>
            </b-col>
            <b-col sm="10">
              <b-form-input v-model="form.listPrice" placeholder="0" type="number" required></b-form-input>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="2">
              <label >Harga Akhir :</label>
            </b-col>
            <b-col sm="10">
              <b-form-input v-model="form.offerPrice" placeholder="0" type="number" required></b-form-input>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="2">
              <label >Stok :</label>
            </b-col>
            <b-col sm="10">
              <b-form-input v-model="form.stock" placeholder="0" type="number" required></b-form-input>
            </b-col>
          </b-row><br>
          <b-row>
            <b-button type="submit" variant="primary">{{submitButton ? 'Submit' : 'Update'}}</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-row>
        </b-form>

        <div>

          <table class="table table-bordered table-hover table-striped table-xs-block">
            <thead>
            <tr class="bg-primary">
              <th width="50">#</th>
              <th v-on:click="sortByName = !sortByName">Name
                <i class="pull-right glyphicon" :class="[sortByName?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']">**</i>
              </th>
              <th>Description</th>
              <th>List Price</th>
              <th>Offer Price</th>
              <th>Stock</th>
              <th width="105" class="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(product, index) in listView"  :key="product.productId">
              <td align="center"><b>{{ index+1 }}</b></td>
              <td v-text="product.name"></td>
              <td v-text="product.description"></td>
              <td v-text="product.listPrice"></td>
              <td v-text="product.offerPrice"></td>
              <td v-text="product.stock"></td>
              <td>
                <button type="button" class="btn btn-warning" v-on:click="onUpdate(product, index)">E</button>
                <button type="button" class="btn btn-danger" v-on:click="onDelete(product, index)">D</button>
              </td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </main>


  </div>
</template>

<script>
  import axios from 'axios'
  const API = 'http://localhost:9000/api/product'

  export default {
    name: 'Test',
    data() {
      return {
        list: '',
        form: {
          name: '',
          description: '',
          listPrice: '',
          offerPrice: '',
          stock: ''
        },
        submitButton: true,
        showForm : false,
        showFormUpload : false,

        filterByName: [],
        sortByName: false,

        text : ''
      }
    },
    computed: {
      listView: function () {
        if (this.filterByName.length > 0 ) {
          return this.list.filter(function (item) {
            return this.filterByName.indexOf(item.name) > -1 ;
          });
        } else {
          return this.list;
        }
      },
    },
    watch: {
      sortByName: function (val) {
        this.listView = this.sortBy(this.listView, 'name', val);
      }
    },
    methods: {
      onSearch: function(){
        axios
          .get(API + '/getByName/' + this.text)
          .then(response => (this.list = response.data.data))
      },
      onUpload: function(){
        if(this.showFormUpload === true)
          this.showFormUpload = false;
        else
          this.showFormUpload = true;
      },
      onCreate: function(){
        if(this.showForm === true)
          this.showForm = false;
        else
          this.showForm = true;
      },
      onSubmit: function(){
        //on create data
        if(this.submitButton === true){
          axios
            .post(API + '/create',
              JSON.stringify(this.form),
              {'headers': {'Content-Type': 'application/json'}}
            )
            .then(response => {
              alert('Success add data')
            }).catch((e) => {
            console.error(e)
          });

          this.list.push(this.form);
          this.showForm = false;
        }
        //on update data
        else{
          axios
            .put(API + '/updateById/' + this.form.productId,
              JSON.stringify(this.form),
              {'headers': {'Content-Type': 'application/json'}}
            )
            .then(response => {
              alert('Success update data')
            }).catch((e) => {
            console.error(e)
          });

          this.list[index] = item;
          this.showForm = false;
        }

      },
      onDelete: function (product, index) {
        const confirmDelete = confirm("Are you sure to delete this?");

        if (confirmDelete) {
          axios
            .delete(API + '/deleteById/' + product.productId)
            .then(response => {
              alert('Success delete data')
            }).catch(e => {
            console.log(e)
          });

          this.list.splice(index, 1);
        }
      },
      sortBy: function (array, param, reverse) {
        var filterA, filterB;
        return array.sort(function (a, b) {
          switch (param) {
            case 'name':
              filterA = a.name;
              filterB = b.name;
              break;
          }
          if (reverse) {
            return (filterA > filterB) ? 1 : -1;
          } else {
            return (filterA < filterB) ? 1 : -1;
          }
        });
      },
      onUpdate: function (product, index) {
        this.submitButton = false;
        this.form = product;
        this.showForm = true;
      },

    },
    mounted () {
      axios
        .get(API + '/getAll')
        .then(response => (this.list = response.data.data))
    }
  }
</script>

<style scoped>


</style>
