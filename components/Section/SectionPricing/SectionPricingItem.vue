<template>
  <v-col cols="12" md="6" lg="4" class="pa-6">
    <v-card class="rounded-xl transparent elevation-6">
      <v-card-title
        class="
          dng-section-pricing-item-header
          justify-center
          primary
          white--text
          text-center
        "
      >
        {{ data.title }}
      </v-card-title>
      <v-card-text class="pa-0 elevation-0">
        <v-list tile class="pa-0 rounded-lg">
          <template v-for="(feature, index) in data.featureList">
            <v-list-item :key="index" link>
              <v-list-item-title class="d-flex align-center justify-center">
                <div>{{ feature.label }}</div>
                <v-icon v-if="feature.isOn" color="success"> mdi-check </v-icon>
                <v-icon v-else color="error"> mdi-close </v-icon>
              </v-list-item-title>
            </v-list-item>
            <v-divider
              v-if="index < data.featureList.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card-text>
      <v-list-item
        class="white--text secondary font-weight-bold"
        link
      >
        <v-list-item-title class="text-center">
            Buy / Rp. 100.000,-
        </v-list-item-title>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: { data: { type: Object, default: () => {} } },
}
</script>

<style>
.dng-section-pricing-item-feature {
  border-bottom: thin solid grey !important;
}
.dng-section-pricing-item-header {
}
</style>