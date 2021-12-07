<template>
  <v-btn
    class="dng-btn-scroll-top mb-3 me-6 rounded-pill white--text"
    color="accent"
    large
    @click="scrollTop"
  >
    <v-icon x-large> mdi-chevron-up </v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      document.getElementsByClassName('dng-app')[0].scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style>
.dng-btn-scroll-top {
  position: fixed !important;
  bottom: 0;
  right: 0;
}
</style>