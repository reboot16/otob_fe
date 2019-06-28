<template>
  <div id="app">
    <div id="header">
      <b-navbar toggleable="lg" type="" class="fixed-top" style="border-bottom:1px solid #ced4da; background-color:white">
        <b-navbar-brand href="#"><img src="@/assets/blibli.jpeg"><b>Blibli Bazaar</b></b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="/user">User</router-link></b-nav-item> 
            <b-nav-item><router-link to="/product">Product</router-link></b-nav-item>
            <b-nav-item><router-link to="/product_cust">Product</router-link></b-nav-item>
            <b-nav-item><router-link to="/order">Order</router-link></b-nav-item>
            <b-nav-item><router-link to="/cart">Cart</router-link></b-nav-item> 
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link to="/register">Register</router-link></b-nav-item> 
            <b-nav-item><router-link to="/">Login</router-link></b-nav-item>
            <b-nav-item><router-link to="#">Logout</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view id="content"/>

    <div id="footer" style="padding-top:3em">
      <div class="fixed-bottom">
        <p style="margin:0.5em">Offline to Online Bazaar</p>
      </div> 
    </div>
  </div>
</template>

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
  color: #068aca;
}

.navbar a.router-link-exact-active {
  font-weight: bold;
  color: #068aca;
}

img{
  height:30px; 
  border-radius:50%;
}

.navbar {
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
}

#footer div{
  background-color:rgb(30, 84, 108);
  color:white;
  text-align: center;
}

#content{
  background-color: #e2e2e2;
  margin-top: 3em;
  padding-top: 2em;
  min-height: 700px;
}

#content .btn-primary{
  background-color:#0096D9;
}

#content button:disabled {
  cursor: not-allowed;
  pointer-events: all !important;
}

#content table{
  font-size: 13px;
}

</style>
