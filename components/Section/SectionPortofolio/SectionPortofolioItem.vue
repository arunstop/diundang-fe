<template>
  <v-col cols="12" sm="6" md="4" lg="3">
      <v-card class="ma-4" rounded="xl" outlined>
          <v-img :src="data.img"/>
      </v-card>
  </v-col>
</template>

<script>
export default {
props:{
    data :{type:Object, default:()=>{}}
}
}
</script>

<style>

</style>