<template>
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item><router-link to="/user">User</router-link></b-nav-item> 
            <b-nav-item><router-link to="/product">Product</router-link></b-nav-item> 
            <b-nav-item-dropdown>
              <template slot="button-content">Order</template>
              <router-link :to="{name: 'order-approvement'}" tag="b-dropdown-item">Approvement</router-link>
              <router-link :to="{name: 'orders'}" tag="b-dropdown-item">View All Orders</router-link>
            </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> 
            <b-nav-item v-if="isLogin"><router-link to="/">Login</router-link></b-nav-item>
            <b-nav-item v-else><router-link to="#">Logout</router-link></b-nav-item>
        </b-navbar-nav>
    </b-collapse>
</template>

<script>
export default {
    data () {
        return {
            isLogin: true
        }
    }
}
</script>
