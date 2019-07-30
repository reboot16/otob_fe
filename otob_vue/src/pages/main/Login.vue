<template>
  <div name="login">

    <CustomForm>
      <div slot="slot-title">
        Welcome to Blibli Bazaar
      </div>

      <div slot="slot-form">
        <b-form @submit="onLogin">
          <b-form-input v-model="form.username" placeholder="Enter your username" required></b-form-input>
          <b-form-input v-model="form.password" placeholder="Enter your password" required type="password"></b-form-input>       
          <b-button type="submit" variant="primary" style="width: 100%;">Login</b-button>
        </b-form> 
      </div>

      <div slot="slot-notif">
        If you don't have an account, <a href="/register" >Register Here</a> <br> 
      </div>
    </CustomForm>
    
  </div>
</template>

<script>
import CustomForm from '@/components/CustomForm'
import Cookies from 'js-cookie'

const API = 'http://localhost:9000/api/auth'

export default {
  name: 'Login',
  props: {
    'auth': ''
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      dataLogin: []
    }
  },
  components: {
    CustomForm
  }, 
  mounted () { 
    // Cookies.set('haha', 'value')
    // alert(Cookies.get('user-id'))
    // alert(document.cookie)
    if(this.auth.isLogin == true){
      if(this.auth.isAdmin == true){
       this.$router.push('/product') 
      }else if(this.auth.isCashier == true){
       this.$router.push('/order') 
      }else if(this.auth.isCustomer == true){
       this.$router.push('/product_cust') 
      }
    } 
  },
  computed: {

  },
  methods: {
    onLogin (evt) {
      evt.preventDefault()

      let formData = new FormData();
      formData.append('email', this.form.username);
      formData.append('password', this.form.password);

      this.$store.dispatch('doLogin', formData)
    }, 
  }
}
</script>

<style>

</style>