export default {
  name: 'Product',  
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
      showModalForm : true, 

      filterByName: [],
      sortByName: false,

      textSearch : '',
      file: '', 
    }
  },
  mounted () { 
    this.$store.dispatch('getProducts')   
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
    showModal: function(modalName) {
      this.showModalForm = true
      this.$refs[modalName].show()
    },
    hideModal: function(modalName) { 
      this.$refs[modalName].hide()
    }, 
    onUpload: function(event){
      let formData = new FormData();
      formData.append('file', this.file); 

      this.$store.dispatch('uploadProduct', formData)
      this.showModalForm = false      
    },
    onChangeFileUpload: function(){
      this.file = this.$refs.file.files[0];
    },
    onSearch: function(){ 
      this.$store.dispatch('searchProduct', this.textSearch)   
    }, 
    onSubmit: function(){
      //on create data
      if(this.submitButton === true){
        this.$store.dispatch('addProduct', this.form) 
        this.showModalForm = false 
      }
      //on update data
      else{
        this.$store.dispatch('updateProduct', this.form) 
        this.showModalForm = false 
      } 
    },
    onDelete: function (product, index) {
      const confirmDelete = confirm("Are you sure to delete this?");

      if (confirmDelete) {
        product.index = index
        this.$store.dispatch('deleteProduct', product) 
      }
    },
    onUpdate: function (product, index) {
      this.$refs['modal-add'].show()
      this.submitButton = false
      this.form = product 
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