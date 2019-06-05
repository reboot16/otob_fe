import axios from 'axios' 

const API = 'http://localhost:9000/api/products'

export default {
  name: 'Test', 
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
    showModal() {
      this.$refs['my-modal'].show()
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
 
    onUpdate: function (product, index) {
      this.submitButton = false;
      this.form = product;
      this.showForm = true;
    },

  },
 
}