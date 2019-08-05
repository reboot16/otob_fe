<template>
  <div id="app"> 
      <div id="header" v-if="isLogin==true">
        <b-navbar toggleable="lg" type="" class="fixed-top" style="border-bottom:1px solid #ced4da; background-color:white">
        <div class="container">
            <b-navbar-brand>
              <img src="@/assets/blibli.jpeg" style="vertical-align: top;">
              <b style="font-size:24px">Blibli Bazaar</b>
            </b-navbar-brand>

            <b-navbar-nav>
              <b-nav-item v-if="isAdmin"><router-link to="/user">User</router-link></b-nav-item> 
              <b-nav-item v-if="isAdmin"><router-link to="/product">Product</router-link></b-nav-item> 
              <b-nav-item v-if="isCustomer"><router-link to="/product_cust">Product</router-link></b-nav-item> 
              <b-nav-item-dropdown v-if="isCashier">
                <template slot="button-content">Order</template>
                <router-link :to="{name: 'order_approvement'}" tag="b-dropdown-item">Approvement</router-link>
                <router-link :to="{name: 'orders'}" tag="b-dropdown-item">View All Orders</router-link>
              </b-nav-item-dropdown>
              <b-nav-item v-if="isLogin==false"><router-link to="/">Login</router-link></b-nav-item>
              <b-nav-item v-else><span @click="onLogout">Logout</span></b-nav-item>
            </b-navbar-nav>
            
          </div>
        </b-navbar>
      </div> 

      <div @checkAuth="checkAuth">
        <router-view id="content" :auth="userAuth"/>
      </div>

      <div id="footer" v-if="isLogin==true">
        <div class="fixed-bottom">
          <p style="margin:0.5em">Blibli Bazaar</p>
        </div> 
      </div> 

  </div>
</template>

<script src="./App.js"></script>

<style src="./App.css"></style>
