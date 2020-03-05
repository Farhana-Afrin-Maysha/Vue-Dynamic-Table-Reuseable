<template>
  <div class="User">
     <table class="table table-bordered table-striped">
       <Tablehead v-bind:content="{main: columns}"/>
       
       <Body v-bind:content="{header: columns, body: raws }"></Body>
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
    return {
      columns:{
         name: 'Name',
         leaugue: 'Leaugue'
         },
      raws:[
         { name: 'Farhana', leaugue:'Bangladesh'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         },
         {name: 'Moyna',leaugue:'India'
         }
         ]
    }
  }
  
}
</script>
