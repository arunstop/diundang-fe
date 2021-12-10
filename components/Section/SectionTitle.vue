<template>
  <v-alert
        class="text-h4 elevation-0 text-center transparent mb-0 font-weight-bold"
        :class="color ? color+'--text' : ''"
        colored-border
        :color="color"
        border="bottom"
      >
        {{title}}
      </v-alert>
</template>

<script>
export default {
props:{
    title: {type:String,default:()=>""},
    color: {type:String,default:()=>""}

}
}
</script>

<style>

</style>