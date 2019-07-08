<template>
    <div class="input-group">
        <input type="search" class="form-control" placeholder="Enter Product Name Here" 
            v-model="tempText" @keyup.enter="onSearch">

        <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="onSearch">Search</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchProduct",
        data() {
            return {
                tempText: ''
            }
        },
        methods: {
            onSearch: function(){
                this.$emit("inputText", this.tempText);
                this.$store.dispatch('searchProduct', this.tempText)   
            }, 
        }
    }
</script>

<style>
    .input-group-append button{
        margin-left:0;padding:0.25em
    }
</style>

