<template>
  <v-overlay class="dng-util-loading-overlay" absolute>
    <!-- <v-progress-circular size="56" /> -->
    <v-sheet
      class="d-flex flex-column justify-center align-center pa-6 text-center"
      rounded="0"
      color="accent"
    >
      <v-progress-circular indeterminate color="white" width="9" size="90" />
      <div class="mt-4 text-h6 font-weight-bold" v-text="label" />
    </v-sheet>
  </v-overlay>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => 'Loading...',
    },
  },
}
</script>

<style>
.dng-util-loading-overlay .v-overlay__content {
  width: 100% !important;
}
.dng-util-loading-overlay .v-sheet {
  /* backdrop-filter: blur(12px);
  background-color: rgba(0, 0, 0, 0.4) !important; */
}
</style>