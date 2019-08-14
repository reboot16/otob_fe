import CustomModal from '@/components/CustomComponents/CustomModal.vue'

export default {
  data () {
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        newPassword2: ''
      },
      showChangePassword: false,
      wrongPassword: false
    }
  },
  components: {
    CustomModal
  },
  mounted () {
    this.$store.dispatch('checkAuthorized')
  },
  computed : {
    isAuth () {
      return this.$store.getters.isAuthorized
    },
    isLogin () {
      if (this.isAuth && this.isAuth.isLogin){
        return true
      }
      return false
    },
    isAdmin () {
      if (this.isAuth && this.isAuth.userRole == config.role_admin){
        return true
      }
      return false
    },
    isCashier () {
      if (this.isAuth && this.isAuth.userRole == config.role_cashier){
        return true
      }
      return false
    },
    isCustomer () {
      if (this.isAuth && this.isAuth.userRole == config.role_customer){
        return true
      }
      return false
    },
    userId () {
      if (this.isAuth)
        return this.isAuth.userId
      return ''
    },
    auth () {
      let auth = {
        isLogin: this.isLogin,
        isAdmin: this.isAdmin,
        isCashier: this.isCashier,
        isCustomer: this.isCustomer,
        userId: this.userId
      }
      return auth
    }
  },
  methods : {
    onLogout () {
      this.$store.dispatch('doLogout')
      this.$router.push('/')
    },
    onRouteLoginTrue () {
      if(this.isLogin == true) {
        this.$router.push('/products')
      }
    },
    onRoute () {
      // if(this.userAuth.isLogin == true){
      //   if(this.userAuth.isAdmin == true){
      //     this.$router.push('/products/manage')
      //   }else if(this.userAuth.isCashier == true){
      //     this.$router.push('/orders')
      //   }else if(this.auth.isCustomer == true){
      //     this.$router.push('/products')
      //   }
      // }
    },
    showModalChangePassword () {
      this.showChangePassword = true
    },
    onChangePassword () {
      if(this.form.newPassword != this.form.newPassword){
        alert('Password not match')
        this.wrongPassword = true
      }else {
        let formData = new FormData();
        formData.append('oldPassword', this.form.oldPassword);
        formData.append('newPassword', this.form.newPassword);

        // this.$store.dispatch('doChangePassword', formData)
      }
    }
  },
  watch: {
  
  }
  
}