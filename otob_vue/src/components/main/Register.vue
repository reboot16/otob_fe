<template>
<div id="Register" style="text-align: center; padding-top: 7em">
  <img src="@/assets/blibli.jpeg" style="height:100px; border-radius:1em">

  <h3 style="color:rgb(2, 122, 200)"><b>Offline to Online Bazaar</b></h3> 

  <div id="registerContainer">
    <b-col sm="4" offset-sm="4">
      <b-form @submit="onRegister" id="formRegister">
        <b-row id="usern_row">
          <b-col sm="12">
            <h4 style="color:rgb(2, 122, 200); font-size:18px">Register Your Self</h4> <hr>
          </b-col>
          <b-col sm="12">
            <b-row>
                <b-col sm="12">
                    <b-form-input v-model="form.email" placeholder="Enter your email" required></b-form-input>
                </b-col> 
                <b-col sm="12" style="text-align:right;margin-top:0.5em">
                    <b-button type="submit" variant="success" style="width:100%">Register</b-button>
                </b-col>
                <b-col sm="12" style="font-size:14px; text-align:right">
                    <router-link to="/">Login</router-link>
                </b-col> 
            </b-row>
          </b-col>
        </b-row>
      </b-form>
    </b-col>
  </div>


  
</div>
</template>

<script>
import axios from 'axios'
const API = 'http://localhost:9000/api'

export default {
  name: 'Register',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onRegister (evt) {
      evt.preventDefault()
      axios
        .post(API + '/users/register/customer',
          JSON.stringify(this.form),
          {'headers': {'Content-Type': 'application/json'}}
        )
        .then(response => {
          alert('Register success')
        }).catch((e) => {
          console.error(e)
        })
    }
  }
}
</script>

<style scoped>
h2{
  color: white;
}
#user_row, #pass_row, #button_row{ 
  margin-top: 1em;
}
#Register{ 
  background: #d2d6de;
  height: 575px;
  padding-top: 3em;
  text-align:center
} 
#formRegister{
  border-radius: 1em;
  background-color: white;
  padding: 1em;
  align-content: center;
}
#button_row{
  padding-left: 1.5em;

}
</style>