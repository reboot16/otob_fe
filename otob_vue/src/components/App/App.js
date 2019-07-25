'use strict'

import NavbarAdmin from '@/components/Navbar/NavbarAdmin'
import NavbarCustomer from '@/components/Navbar/NavbarCustomer'
import NavbarCashier from '@/components/Navbar/NavbarCashier'
import Login from "@/pages/main/Login";

const adminRole = 'ROLE_ADMIN'
const cashierRole = 'ROLE_CASHIER'
const customerRole = 'ROLE_CUSTOMER'

export default {
  components: {
    NavbarAdmin,
    NavbarCustomer,
    NavbarCashier
  }, 
  data () {
    return { 
    }
  },
  mounted () { 
  },
  computed : {
    isAuth () {
      return this.$store.getters.isAuth
    },
    isLogin () {
      return this.isAuth.isLogin
    },
    isAdmin () {
      if (this.isAuth.userRole == adminRole){
        return true
      }
      return false
    },
    isCashier () {
      if (this.isAuth.userRole == cashierRole){
        return true
      }
      return false
    },
    isCustomer () {
      if (this.isAuth.userRole == customerRole){
        return true
      }
      return false
    },
    userAuth () {
      let auth = {
        isLogin: this.isLogin,
        isAdmin: this.isAdmin,
        isCashier: this.isCashier,
        isCustomer: this.isCustomer
      }
      return auth
    }
  },
  methods : {
    onLogout (evt) {
      evt.preventDefault()
 
      this.$store.dispatch('doLogout')
    },
  }
  
}