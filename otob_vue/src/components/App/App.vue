<template>
  <div id="app"> 
      <div id="header">
        <b-navbar toggleable="lg" class="fixed-top" style="border-bottom:1px solid #ced4da; background-color:white">
          <div class="container">
            <b-navbar-brand>
              <router-link to="/products">
                <img src="@/assets/blibli.jpeg" style="vertical-align: top;">
                <b style="font-size:24px">Blibli Bazaar</b>
              </router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item v-if="isAdmin"><router-link to="/users">User</router-link></b-nav-item>
                <b-nav-item v-if="isAdmin || isCashier"><router-link to="/products/manage">Product</router-link></b-nav-item>
                <b-nav-item><router-link to="/products">Product</router-link></b-nav-item>
                <b-nav-item><router-link to="/orders/customer">Order</router-link></b-nav-item>
                <b-nav-item-dropdown v-if="isCashier">
                  <template slot="button-content">Order</template>
                  <router-link :to="{name: 'order_approvement'}" tag="b-dropdown-item">Approvement</router-link>
                  <router-link :to="{name: 'orders'}" tag="b-dropdown-item">View All Orders</router-link>
                </b-nav-item-dropdown>
                <b-nav-item v-if="isLogin==false"><router-link to="/login">Login</router-link></b-nav-item>
                <b-nav-item v-else><span @click="onLogout">Logout</span></b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </div>
        </b-navbar>
      </div> 

      <div>
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
