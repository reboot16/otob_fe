import formProduct from '@/components/product/Form'

const API = 'http://localhost:9000/api/products'

export default {
  name: 'Product',
  components:{
    formProduct
  } , 
  data() {
    return { 
      form: {
        name: '',
        description: '',
        listPrice: '',
        offerPrice: '',
        stock: ''
      },
      submitButton: true,
      showForm : false,
      showFormUpload : true,

      filterByName: [],
      sortByName: false,

      textSearch : '',
      file: '',
      modalAddData: false
    }
  },
  mounted () { 
    this.$store.dispatch('getProducts')  
    // this.$refs['modal-add'].show() 
    this.$refs['modal-add'].hide()
  },
  computed: {
    listProduct: function () { 
      return this.$store.getters.PRODUCTS
    },  
  },
  watch: {
    sortByName: function (val) {
      this.listProduct = this.sortBy(this.listProduct, 'name', val);
    }
  },
  methods: {
    showModal(modalName) {
      this.$refs[modalName].show()
    },
    hideModal() {
      this.$refs['modal-add'].hide()
    },
    submitForm(){
      let formData = new FormData();
      formData.append('file', this.file); 
      this.$store.dispatch('uploadProduct', formData)   
    },
    onChangeFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    onSearch: function(){ 
      this.$store.dispatch('searchProduct', this.textSearch)   
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
        this.$store.dispatch('addProduct', this.form)
        hideModal()
      }
      //on update data
      else{
        this.$store.dispatch('updateProduct', this.form)
        hideModal()
      }
    },
    onDelete: function (product, index) {
      const confirmDelete = confirm("Are you sure to delete this?");

      if (confirmDelete) {
        product.index = index
        this.$store.dispatch('deleteProduct', product) 
      }
    },
    onReset: function (){
      this.form = '';
    },
    onUpdate: function (product, index) {
      this.submitButton = false;
      this.form = product;
      this.showForm = true;
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
  },
  
}