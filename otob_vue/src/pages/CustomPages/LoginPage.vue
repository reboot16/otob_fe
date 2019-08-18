<template>
  <div name="login">

    <CustomForm class="col-sm-12">
      <div slot="slot-title">
        Selamat Datang di Blibli Bazaar
      </div>

      <div slot="slot-form">
        <b-form @submit.prevent="onLogin">
          <b-form-input v-model="form.username" placeholder="Enter your username" required></b-form-input>
          <b-form-input v-model="form.password" placeholder="Enter your password" required type="password"></b-form-input>       
          <b-button type="submit" variant="primary" style="width: 100%;">Masuk</b-button>
        </b-form> 
      </div>

      <div slot="slot-notif">
        Jika anda belum punya akun, <a href="/register" >Daftar Disini</a> <br>
      </div>
    </CustomForm>
    
  </div>
</template>

<script>
import CustomForm from '@/components/CustomComponents/CustomForm.vue'

export default {
  name: 'Login',
  props: {
    auth: {
      isLogin: false,
      isAdmin: false,
      isCustomer: false,
      isGuest: true
    }
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    CustomForm
  }, 
  mounted () {
    if(this.auth.isLogin == true) {
      this.$router.push('/products')
    }
  },
  methods: {
    onLogin (evt) {
      let formData = new FormData();
      formData.append('username', this.form.username);
      formData.append('password', this.form.password);
      this.$store.dispatch('doLogin', formData)
      this.$router.push('/products')
    }
  }
}
</script>

<style>

</style>