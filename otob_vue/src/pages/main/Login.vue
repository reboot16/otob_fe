<template>
  <div name="login">

    <UserForm>
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
          <a href="" variant="primary" @click="onLogout">onLogout</a>

      </div>
    </UserForm>
    
  </div>
</template>

<script>
import UserForm from '@/components/UserForm'

const API = 'http://localhost:9000/api/auth'

export default {
  name: 'Login',
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
    UserForm
  },
  watch: {
    // autoCheck () {
    //   if(this.dataLogin.login == true) {
    //     console.log(this.dataLogin)
    //     this.$router.push('/product')
    //   }
    // }
  },
  mounted () {
    // this.$router.push('/product')
    this.dataLogin = this.$store.getters.isAuth
  },
  computed: {

  },
  methods: {
    onLogin (evt) {
      evt.preventDefault()

      let formData = new FormData();
      formData.append('email', this.form.username);
      formData.append('password', this.form.password);

      // this.$store.dispatch('doLogin', formData)
      this.$store.dispatch('checkCookieAuth')
    },
    onLogout (evt) {
      evt.preventDefault()

      let formData = new FormData();
      formData.append('email', this.form.username);
      formData.append('password', this.form.password);
        console.log(formData)
      this.$store.dispatch('doLogout', formData)
    },
  }
}
</script>

<style>

</style>