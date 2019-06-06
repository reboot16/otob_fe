<template>

  <div>
    <main id="main">

      <div class="container">
        <div class="pull-right multiple-action " >
          <div class="search">
            <div class="input-group">
              <input type="search" class="form-control" placeholder="Search by Name" v-model="textSearch">
              <b-button type="button" variant="primary" @click="onSearch">Search</b-button>
            </div>
          </div>
        </div> <br> 

        <div>
          <table class="table table-bordered table-hover table-striped table-xs-block" >
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
                 
                <div class="quantity-toggle">
                <button @click="decrement()">&mdash;</button>
                <input type="text" :value="quantity[index]" readonly>
                <button @click="increment(product.stock)">&#xff0b;</button>
                </div>

                <!-- <button type="button" class="btn btn-warning" v-on:click="onUpdate(product, index)">E</button> -->
                <!-- <button type="button" class="btn btn-danger" v-on:click="onDelete(product, index)">D</button> -->
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

        filterByName: [],
        sortByName: false,

        textSearch : '',
        quantity: 1
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
          .get(API + '/getByName/' + this.textSearch)
          .then(response => (this.list = response.data.data))
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
      increment (stock) {
        if(this.quantity === stock){
            alert('Out of stock not allowed')
        }else{
            this.quantity++
        }
      },
      decrement () {
        if(this.quantity === 1) {
            alert('Negative quantity not allowed')
        } else {
            this.quantity--
            alert(this.quantity[1])
        }
      }

    },
    mounted () {
      axios
        .get(API + '/getAll')
        .then(response => (this.list = response.data.data))
    }
  }
</script>

<style scoped>
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
    background: #f5f5f5;
    color: #888;
    font-size: 0.75em;
    cursor: pointer;
}

</style>
