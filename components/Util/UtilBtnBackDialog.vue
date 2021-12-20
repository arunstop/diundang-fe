<template>
   <v-btn
        class="v-btn--outlined
          dng-dialog-auth-btn-close
          font-weight-black
          secondary--text
          rounded-lg
        "
        elevation="0"
        @click="action()"
      >
        <v-icon class="me-1">mdi-chevron-left</v-icon>
        Back
      </v-btn>
</template>

<script>
export default {
props:{
    action:{type:Function, default:()=>{}}
}
}
</script>

<style>
.dng-dialog-auth-btn-close {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>