<template>
  <v-col cols="12" md="6" lg="4" class="pa-6">
    <v-card class="rounded-xl">
      <v-card-title class="justify-center"> {{ data.title }} </v-card-title>
      <v-card-text class="pa-0">
        <v-list tile class="pa-0 rounded-xl">
          <v-list-item
            v-for="(feature, index) in data.featureList"
            :key="index"
            class="dng-pricing-feature rounded-xl"
          >
            <v-list-item-title class="d-flex align-center justify-center">
              <div>{{ feature.label }}</div>
              <v-icon v-if="feature.isOn" color="success"> mdi-check </v-icon>
              <v-icon v-else color="error"> mdi-close </v-icon>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: { data: { type: Object, default: () => {} } },
}
</script>

<style>
.dng-pricing-feature{
    border-bottom: thin solid grey !important;
}
</style>