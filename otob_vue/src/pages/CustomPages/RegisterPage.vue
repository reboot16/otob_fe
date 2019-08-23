<template>
<div name="register">

  <CustomForm>
    <div slot="slot-title" id="title">
      Daftar Akun Baru
    </div>

    <div slot="slot-form">
      <b-form @submit.prevent="onRegister">
        <b-form-input v-model="form.email" placeholder="Masukkan email anda" required></b-form-input>
        <b-button type="submit" variant="success" style="width:100%">Daftar</b-button>
      </b-form> 
    </div>

    <div slot="slot-notif">
      Jika anda sudah punya akun, <a href="/login" >Masuk Disini</a>
    </div>
  </CustomForm> 
  
</div>
</template>

<script>
import CustomForm from '@/components/CustomComponents/CustomForm.vue'

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
      this.$store.dispatch('registerCustomer', this.form)
    }
  }
}
</script>

<style scoped>
#title {
  color: #28a745;
}
</style>