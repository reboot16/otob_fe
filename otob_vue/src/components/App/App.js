export default {
  data () {
    return { 
    }
  },
  mounted () {
    this.checkAuth()
  },
  computed : {
    isAuth () {
      return this.$store.getters.isAuthorized
    },
    isLogin () {
      if (this.isAuth.isLogin){
        return true
      }
      return false
    },
    isAdmin () {
      if (this.isAuth.userRole == config.role_admin){
        return true
      }
      return false
    },
    isCashier () {
      if (this.isAuth.userRole == config.role_cashier){
        return true
      }
      return false
    },
    isCustomer () {
      if (this.isAuth.userRole == config.role_customer){
        return true
      }
      return false
    },
    userId () {
      return this.isAuth.userId
    },
    userAuth () {
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
    checkAuth () {
      this.$store.dispatch('checkAuthorized')
    },
    onLogout () {
      this.$store.dispatch('doLogout')
      this.$router.push('/')
    }
  },
  watch: {
  
  }
  
}