<template>
  <div id="app">
    <div id="header">
      <b-navbar toggleable="lg" type="" class="fixed-top" style="border-bottom:1px solid #ced4da; background-color:white">
       <div class="container">
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

</style>
