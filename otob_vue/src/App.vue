<template>
  <div id="app">
    <div>
      <div id="header">
        <b-navbar toggleable="lg" type="" class="fixed-top" style="border-bottom:1px solid #ced4da; background-color:white">
        <div class="container">
            <b-navbar-brand>
              <img src="@/assets/blibli.jpeg" style="vertical-align: top;">
              <b style="font-size:24px">Blibli Bazaar</b>
            </b-navbar-brand>

            <NavbarAdmin/>
            
          </div>
        </b-navbar>
      </div>

      <router-view id="content"/> 

      <div id="footer">
        <div class="fixed-bottom">
          <p style="margin:0.5em">Blibli Bazaar</p>
        </div> 
      </div>
    </div>

    <!-- <div v-else>
      <router-view id="loginFirst"/> 
    </div> -->

  </div>
</template>

<script>
import NavbarAdmin from '@/components/Navbar/NavbarAdmin'
import NavbarCustomer from '@/components/Navbar/NavbarCustomer'
import NavbarCashier from '@/components/Navbar/NavbarCashier'

export default {
  components: {
    NavbarAdmin,
    NavbarCustomer,
    NavbarCashier
  }, 
  data () {
    return {
      isLogin : ''
    }
  },
  mounted () { 
    let isLoginExist = $cookies.isKey('bazaar-isLogin')

    if(isLoginExist == false){
      $cookies.set('bazaar-isLogin', false, 10)
    }

    this.isLogin = $cookies.get('bazaar-isLogin') 
  },
  computed : {
    
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

.navbar a {
  transition: 0.3s;
  color: #068aca;
}

.navbar a:hover{
  /* font-weight: bold; */
  text-decoration: none;
  color: white;
  background-color: #068aca;
  padding: 0.3em 0 0.3em 0;
  margin-top:0.2em;
  border-radius: 0.3em;
}

.navbar a.router-link-exact-active {
  font-weight: bold;
  color: white;
  background-color: #068aca;
  padding: 0.5em;
  border-radius: 0.5em;
}

img{
  height:30px; 
  border-radius:50%;
}

.navbar-brand{
  color: #068aca;
}

.navbar {
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
}

#footer div{
  box-shadow: 0px 5px 5px #999, 0px -1px 5px #999;
  background-color:#e5e5e5;
  color:#078aca;
  text-align: center; 
  font-weight: bold;
}

#content{
  background-color: #f5f5f5;
  margin-top: 3em;
  padding-top: 2em;
  padding-bottom: 5em;
  min-height: 700px;
}

#content thead tr, #content .btn-primary{
  color:white;
  background-color: rgb(38, 164, 218);
}
 
#content button:disabled {
  cursor: not-allowed;
  pointer-events: all !important;
}

#content table, #content input{
  font-size: 14px;
}

#content table{
  border: 1px solid #dee2e6;
}

#loginFirst {
  background-color: #d2d6de
}

</style>
