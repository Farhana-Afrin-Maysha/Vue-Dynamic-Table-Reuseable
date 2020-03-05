<template>
  <div class="User">
     <table class="table table-bordered table-striped">
       <Tablehead v-bind:content="{main: columns, serial: true}"/>
       <Body v-bind:content="{header: columns, body: raws, serial: true }"></Body>
      
     </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Tablehead from '../components/Tablehead'
import Body from '../components/Body'

export default {
  name: 'User',
  components: {
    Tablehead,
    Body
  },
  data(){
       return{
         
        columns:{
         name: 'Name',
         age: 'Age'
         
         
         },
       
        
         raws:[
         {  age:24,  name: 'Farhana'
         },
         {  age: 49, name: 'Moyna'
         
         }]
         
         
         }
         
        
      
      
  }
  
}
</script>
