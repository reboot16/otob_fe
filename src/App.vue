<template>  
  <div id="app">  
  
    <!-- HEADER -->
    <component :is="Header"></component>
    
    <!-- CONTENT -->
    <router-view :activeUser="activeUser"/>

    <!-- FOOTER -->
    <component :is="Footer"></component>

  </div>
</template>  

<script>   
 import Header from '@/components/main/Header'
 import Footer from '@/components/main/Footer'

 export default {
    name: 'app',   
    data: () => {  
      return {  
        activeUser: null,
        Header,
        Footer
      }  
    }, 
  }  
</script>  
  
<style>  
  [v-cloak] { display: none; }  
  #container, #app{
    background: #d2d6de;
  }
  a{
    color: white
  }
</style>

