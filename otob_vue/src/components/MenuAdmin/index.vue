<template>
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
</template>
