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
        If you don't have an account, <a href="/register" >Register Here</a>
      </div>
    </UserForm>
    
  </div>
</template>

<script>
import UserForm from '@/components/UserForm'
import axios from 'axios'

const API = 'http://localhost:9000'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    UserForm
  },
  mounted () { 
    // this.$router.push('/product') 
  },
  methods: {
    onLogin (evt) {
      evt.preventDefault()
      axios
        .post(API + '/login',
          JSON.stringify(this.form),
          {'headers': {'Content-Type': 'application/json'}}
        )
        .then(response => {
          alert('Login success')
        }).catch((e) => {
          console.error(e)
        })
    }
  }
}
</script>

<style>

</style>