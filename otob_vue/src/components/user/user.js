export default {
    name: 'User',  
    data() {
      return { 
        form: {
          email: '',
          role: ''
        },
        options: [
          { value: null, text: 'Please select role' },
          { value: '1', text: 'Customer' },
          { value: '2', text: 'Cashier' },
          { value: '3', text: 'Admin' },
        ],
        showModalForm : true, 
      }
    },
    mounted () { 
      this.$store.dispatch('getUser')   
    },
    computed: {
      listUser: function () { 
        return this.$store.getters.USERS
      },  
    },
    watch: {

    },
    methods: {
      showModal: function() {
        this.showModalForm = true
        this.$refs['modal-add'].show()
      },
      hideModal: function(modalName) { 
        this.$refs[modalName].hide()
      }, 
      onSubmit: function(){
        if(this.form.role == 1){
            this.$store.dispatch('registerCustomer', this.form)           
        }else if(this.form.role == 2){
            this.$store.dispatch('registerCashier', this.form)           
        }else if(this.form.role == 3){
            this.$store.dispatch('registerAdmin', this.form)           
        }
      },
      onDelete: function (user, index) {
        const confirmDelete = confirm("Are you sure to delete this?");
  
        if (confirmDelete) {
          user.index = index
          this.$store.dispatch('deleteUser', user) 
        }
      },
    },
    
  }