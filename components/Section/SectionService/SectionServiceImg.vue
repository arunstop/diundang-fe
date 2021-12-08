<template>
  <v-img class="ma-12 rounded-xl" min-height="200" :src="src">
    <template #placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  props: {
    src: { type: String, default: () => {} },
  },
}
</script>

<style>
</style>