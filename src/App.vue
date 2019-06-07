<template>  
  <div id="app">  
  
    <!-- HEADER -->
    <!-- <component :is="Header"></component> -->
    <Header/>
    <!-- CONTENT -->
    <router-view :activeUser="activeUser"/>

    <!-- FOOTER -->
    <!-- <component :is="Footer"></component> -->
    <Footer/>

  </div>
</template>  

<script>   
 import Header from '@/components/main/Header'
 import Footer from '@/components/main/Footer'

 export default {
    name: 'app',
    components:{
      Header,
      Footer
    } ,  
    data: () => {  
      return {  
        activeUser: null
      }  
    }, 
  }  
</script>  
  
<style>  
  [v-cloak] { display: none; }  
  #container, #app{
    background: #d2d6de;
    min-height: 575px;
  }
  a{
    color: white
  }
</style>

