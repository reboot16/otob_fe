import axios from 'axios'
import productForm from '@/components/product/form/Form'

const API = 'http://localhost:9000/api/products'

export default {
  name: 'Product',
  components:{
    productForm
  } , 
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

      textSearch : '',
      file: '',
      modalAddData: false
    }
  },
  mounted () {
    // axios
    //   .get(API + '/getAll')
    //   .then(response => (this.list = response.data.data))
    this.$store.dispatch('GET_PRODUCT') 
    // this.list =  axios.get(API + '/getAll')
    // this.list = this.$store.dispatch('GET_PRODUCT')
  },
  computed: {
    listView: function () {
      // if (this.filterByName.length > 0 ) {
      //   return this.list.filter(function (item) {
      //     return this.filterByName.indexOf(item.name) > -1 ;
      //   });
      // } else {
      //   return this.list;
      // }
      // return this.list
      return this.$store.getters.PRODUCTS
    }, 
    // listView : function() {
    //   this.$store.getters.PRODUCTS
    // }
  },
  watch: {
    sortByName: function (val) {
      this.listView = this.sortBy(this.listView, 'name', val);
    }
  },
  methods: {
    showAddModal() {
      this.$refs['modal-form-add'].show()
    },
    submitForm(){
      let formData = new FormData();
      formData.append('file', this.file);

      axios
      .post(API + '/import',
        formData,
        {'headers': {'Content-Type': 'multipart/form-data'}}
      )
      .then(response => {
        alert('Success upload data')
      }).catch((e) => {
        console.error(e)
      }); 
    },
    onChangeFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    onSearch: function(){
      if(this.textSearch == ''){
        axios
        .get(API + '/getAll')
        .then(response => (this.list = response.data.data))
      }else{
        axios
        .get(API + '/getByName/' + this.textSearch)
        .then(response => (this.list = response.data.data))
      }
    },
    onButtonUpload: function(){
      if(this.showFormUpload === true)
        this.showFormUpload = false;
      else
        this.showFormUpload = true;
    },
    onButtonCreate: function(){
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
  
}