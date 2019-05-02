<template>
  <div id="Header">
    <b-navbar toggleable="lg" type="" variant="dark">
      <b-navbar-brand href="#">OTOB</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Product</b-nav-item>
          <b-nav-item href="#">Order</b-nav-item>
          <b-nav-item href="#"><font-awesome-icon name="user"></font-awesome-icon>User</b-nav-item> 
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> 
          <b-nav-item><router-link to="/register">Register</router-link></b-nav-item> 
          <!-- <b-nav-item><router-link to="/login">Login</router-link></b-nav-item>          -->
          <b-nav-item v-if="!activeUser" @click="doLogin()">Login</b-nav-item>         

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">User</template>
            <b-dropdown-item href="#">Cart</b-dropdown-item>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <button v-if="activeUser">lalal</button>

  </div>
</template>

<script>   
 export default {
    name: 'header',   
    data: () => {  
      return {  
        activeUser: null  
      }  
    }, 
    methods: {
      doLogin () {
        this.activeUser = true
      }
    }
  }  
</script> 
 