<template>
    <b-collapse id="nav-collapse" is-nav> 
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link to="/product_cust">Bazaar Product</router-link></b-nav-item>

            <b-nav-item-dropdown right v-if="isLogin">
                <!-- Using 'button-content' slot -->
                <template slot="button-content"><li class="fa fa-user"></li> Hai User</template>
                <b-dropdown-item href="#">Order</b-dropdown-item>
                <b-dropdown-item href="#">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item v-else-if="!isLogin"><router-link to="/register">Register</router-link></b-nav-item> 
            <b-nav-item v-else-if="!isLogin"><router-link to="/">Login</router-link></b-nav-item> 
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

<style>
li a.dropdown-item:hover{
   padding: 0.25em 1.5em 0.25em 1.5em; 
}
</style>

