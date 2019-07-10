import SearchProduct from '@/components/SearchProduct'
import ComponentTest from '@/components/Modal/FormProduct'

export default {
  name: 'Product',  
  components: {
    SearchProduct,
    ComponentTest
  }, 
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
      file: '',
      txt: '',
      isProductVisible: false,
      isUploadVisible: false,

      tempProduct: {}
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
    showModalAdd() {
      this.isProductVisible = true
    },
    showModalUpdate(product, index) {
      this.isProductVisible = true
      this.tempProduct = product
      // this.$refs.form = product 
    },
    closeModal() {
      this.isProductVisible = false
      this.isUploadVisible = false
    },
    isStockAvailable: function(stock) {
      // if(stock == 0){
      //   return false;
      // }
      return true;
    },
    // showModal: function(modalName) {
    //   this.showModalForm = true
    //   this.$refs[modalName].show()
    // },
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
      // this.$refs['modal-add'].show()
      // this.submitButton = false
      this.isProductVisible = true
      this.$refs.form = product 
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