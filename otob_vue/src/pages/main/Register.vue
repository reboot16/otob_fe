<template>
<div name="register">

  <CustomForm>
    <div slot="slot-title" id="title">
      Register Your Self
    </div>

    <div slot="slot-form">
      <b-form @submit.prevent="onRegister">
        <b-form-input v-model="form.email" placeholder="Enter your email" required></b-form-input>
        <b-button type="submit" variant="success" style="width:100%">Register</b-button>
      </b-form> 
    </div>

    <div slot="slot-notif">
      If you alredy have an account, <a href="/" >Login Here</a>
    </div>
  </CustomForm> 
  
</div>
</template>

<script>
import CustomForm from '@/components/CustomForm'
import axios from 'axios'

const API = 'http://localhost:9000/api'

export default {
  name: 'Register',
  data () {
    return {
      form: {
        email: ''
      }
    }
  },
  components: {
    CustomForm
  },
  methods: {
    onRegister () {
      let formData = new FormData();
      formData.append('email', this.form.username);
      this.$store.dispatch('doRegister', formData)
    }
  }
}
</script>

<style scoped>
#title {
  color: #28a745;
}
</style>