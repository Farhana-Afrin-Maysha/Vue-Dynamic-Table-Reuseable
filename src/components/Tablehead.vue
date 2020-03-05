<template>
  <thead>
      <th v-if = "content.serial">Serial_no</th>
     <th @click="sorting(index)" v-for="(column, index) in content.main" :key="index"> {{column}}</th>
  </thead>
    
  </template>

<script>


export default {
  name: 'Tablehead',
  props: ["content"],
  methods:{
    sorting (index) {
      console.log(index)
    }
  }
}
</script>
