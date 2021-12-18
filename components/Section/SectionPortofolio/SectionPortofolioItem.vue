<template>
  <v-col class="dng-section-portofolio-item" cols="12" sm="6" md="4" lg="3">
    <v-hover v-slot="{ hover }">
      <v-card class="ma-4 wrapper" rounded="xl" outlined link height="300">
        <v-img class="dng-animation-scale fill-height" :src="`https://picsum.photos/id/${data.id}/200/300`" />
        <!-- <v-row > -->
        <v-slide-y-reverse-transition>
            <v-card v-if="hover" no-gutters  class="dng-section-portofolio-item-title pa-4 rounded-0" dark>
          Mamale and Fefemale
        </v-card>
        </v-slide-y-reverse-transition>
        <!-- </v-row> -->
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  props: {
    data: { type: Object, default: () => {} },
  },
}
</script>

<style>
.dng-section-portofolio-item .v-card {
  overflow: hidden !important;
  -webkit-transition: all 0.3s ease-in-out;
}
.dng-animation-scale:hover {
  -webkit-transition: all 0.3s ease-in-out;

  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.dng-animation-scale {
  -webkit-transition: all 0.3s ease-in-out;
}

.dng-section-portofolio-item-title {
  position: absolute;
  pointer-events: none;
  bottom: 0;
  font-weight: bold;
  /* z-index: 2; */
  background-color: var(--v-primary-base) !important;
  width: 100%;
}
</style>