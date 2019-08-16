import CustomModal from '@/components/CustomComponents/CustomModal.vue'
import CustomAlert from '@/components/CustomComponents/CustomAlert.vue'

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
    CustomModal,
    CustomAlert
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
      this.$router.push('/login')
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
    async onChangePassword () {
      let formData = new FormData();
      formData.append('oldPassword', this.form.oldPassword);
      formData.append('newPassword', this.form.newPassword);
      await this.$store.dispatch('doChangePassword', formData)
      this.showChangePassword = false
      this.form = ''
    }
  },
  watch: {
  
  }
  
}