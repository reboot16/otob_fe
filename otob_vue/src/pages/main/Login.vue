<template>
<div id="Login" >
  <h2 style="text-align:center; margin-top: 5em"><b>Offline to Online Bazaar</b></h2><br>
  <b-row id="loginContainer">
    <b-col sm="3"></b-col>
    <b-col sm="2">
      <img src="@/assets/blibli.jpeg" style="height: 180px; border-radius:2em">
    </b-col>
    <b-col sm="4" id="formLogin">
      
      <b-form @submit="onLogin">
        <b-row id="usern_row">
          <b-col sm="3">
            <label >Username</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="form.username" placeholder="Enter your username" required></b-form-input>
          </b-col>
        </b-row>
        <b-row id="pass_row">
          <b-col sm="3">
            <label >Password</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="form.password" placeholder="Enter your password" required type="password"></b-form-input>
          </b-col>
        </b-row>
        <b-row id="button_row" class="text-right">
            <b-col style="padding-left:0">
              <b-button type="submit" variant="primary" style="width: 100%;">Login</b-button>
            </b-col>
        </b-row>
      </b-form>
    </b-col>
  </b-row>
</div>
</template>

<script>
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

<style scoped>
h2{
  color: rgb(2, 122, 200);
}
#user_row, #pass_row, #button_row{ 
  margin-top: 1em;
}
#Login{
  background: #d2d6de;
  height: 575px;
}
#loginContainer{
  align-items: center;
}
#formLogin{
  background-color: white;
  padding: 1em;
  align-content: center;
}
#button_row{
  padding-left: 1.5em;

}
</style>