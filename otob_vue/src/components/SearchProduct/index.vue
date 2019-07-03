<template>
    <div class="input-group">
        <input type="search" class="form-control" placeholder="Enter the product name" 
            v-model="textSearch" @keyup.enter="onSearch">

        <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="onSearch">Search</button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {

        },
        components:{

        },
        props: {
            textSearch: {
                type: String,
                default: ''
            }
        },
        computed: {

        },
        watch: {

        },
        methods: {
            onSearch: function(){ 
                this.$store.dispatch('searchProduct', this.textSearch)   
            }, 
        }
    }
</script>

<style>
    .input-group-append button{
        margin-left:0;padding:0.25em
    }
</style>

