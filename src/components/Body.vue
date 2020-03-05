<template>
  <tbody>
     <tr v-for="(column, index) in content.body" :key="index">
      <td v-if="content.serial"> {{index+1}}</td>  
      <td v-for="(column1, id) in content.header" :key="id"> {{column[id]}}</td>  
       
     </tr>
  </tbody>
    
  </template>

<script>


export default {
  name: 'Body',
  props: ["content"]
  
  }
</script>
