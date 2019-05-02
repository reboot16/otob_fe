<template>
  <div id="Footer">
    <b-navbar toggleable="lg" type="" variant="dark">
      <b-navbar-brand style="color:white;">Online to Offline Bazaar</b-navbar-brand>
    </b-navbar>

    <button v-if="activeUser">lalal</button>

  </div>
</template>

<script>   
 export default {
    name: 'footer',   
    data: () => {  
      return {  
        activeUser: null  
      }  
    }, 
    methods: {
      doLogin () {
        this.activeUser = true
      }
    }
  }  
</script> 


