<template>
    <div class="quantity-toggle">
<!--        <button @click="decrement(product, index)" :disabled="decDisable(product)" class="btn btn-primary">&mdash;</button>-->
<!--        <input type="text" :value="product.qty" readonly>-->
<!--        <button @click="increment(product, index)" :disabled="incDisable(product)" class="btn btn-primary">&#xff0b;</button>-->
<!--        <button @click="book(product, index)" :disabled="bookDisable(product)" class="btn btn-primary" id="bookBtn">Book</button>-->
    </div>
</template>

<script>
    export default {
        name: "BookButton",
        data (){

        },
        mounted : {

        },
        computed : {

        },
        watch : {

        },
        methods : {
            decDisable: function (product) {
                if (product.stock === 0 || product.qty === 1) {
                    return true
                } else {
                    return false
                }
            },
            incDisable: function (product) {
                if (product.stock === 0 || product.stock === product.qty) {
                    return true
                } else {
                    return false
                }
            },
            bookDisable: function (product) {
                if (product.stock === 0) {
                    return true
                } else {
                    return false
                }
            },
            increment: function(product) {
                product.qty++
            },
            decrement: function (product) {
                product.qty--
            },
        },

    }
</script>

<style scoped>
    .quantity-toggle {
        display: flex;
    }

    .quantity-toggle input {
        border: 0;
        border-top: 2px solid #ddd;
        border-bottom: 2px solid #ddd;
        width: 2em;
        text-align: center;
        padding: 0.1em;
    }
    .quantity-toggle button {
        /*border: 2px solid #ddd;*/
        padding: .1em .5em .1em .5em;
        font-size: 0.75em;
        cursor: pointer;
    }

    #bookBtn{
        padding:0 0.5em 0 0.5em;
        margin-left:0.5em;
    }
</style>