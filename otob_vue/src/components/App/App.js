'use strict'

import NavbarAdmin from '@/components/Navbar/NavbarAdmin'
import NavbarCustomer from '@/components/Navbar/NavbarCustomer'
import NavbarCashier from '@/components/Navbar/NavbarCashier'
import Login from "@/pages/main/Login";

const adminRole = 'ROLE_ADMIN'
const cashierRole = 'ROLE_CAHSIER'
const customerRole = 'ROLE_CUSTOMER'

export default {
  components: {
    NavbarAdmin,
    NavbarCustomer,
    NavbarCashier
  }, 
  data () {
    return {
      authData: []
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
    }
  },
  methods : {
    setCookies () {
      let isLoginExist = $cookies.isKey('bazaar-isLogin')
      let isIdExist = $cookies.isKey('bazaar-userId')
      let isRoleExist = $cookies.isKey('bazaar-role')

      if(isLoginExist == false) {
        $cookies.set('bazaar-isLogin', "false")
      }

      if(isIdExist == false) {
        $cookies.set('bazaar-userId', "null")
      }

      if(isRoleExist == false) {
        $cookies.set('bazaar-role', "null")
      }

      this.autoSetUserAuth()
    },
    autoSetUserAuth () {
      if (!this.isAuth || this.isAuth.length === 0) {
        // this.$store.dispatch('autoSetAuth')
      }
    },
    brandClick(){
      console.log('brand click')
      return this.$router.push({
        name: 'Register'
        }
      )
    }
  }
  
}