<template>
    <b-collapse id="nav-collapse" is-nav> 
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> 
            <b-nav-item><router-link to="/order">Order</router-link></b-nav-item>
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
