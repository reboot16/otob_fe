<template>
  <div id="footer">
    <div class="fixed-bottom">
      <p style="margin:0.25em">Offline to Online Bazaar : Abdi ~ Alex ~ Nani</p>
    </div> 
  </div>
</template>

<style>
#footer div{
  background-color:gray;
  color:white;
}
</style>


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


