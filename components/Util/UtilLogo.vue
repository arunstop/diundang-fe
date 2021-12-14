<template>
  <div style="pointer-events: none !important">
    <v-btn
      outlined
      color="primary"
      class="dng-btn-logo font-weight-black text-h6 rounded-pill"
      style="letter-spacing: 4px !important; border-width: medium !important"
      link
      @click="scrollTop()"
    >
      DIUNDANG.
    </v-btn>
  </div>
</template>

<script>
export default {
  methods:{
    scrollTop(){
      document.getElementsByClassName('dng-app')[0].scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }
}
</script>

<style>
.v-toolbar__content{
  height:64px !important;
}


.dng-btn-logo{
  background-color: aliceblue;
}
</style>