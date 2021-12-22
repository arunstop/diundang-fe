<template>
  <v-col cols="12" md="6" lg="4" sm="6" class="pa-0 py-4 pa-sm-4">
    <v-card class="rounded-xl" outlined>
      <v-card-title
        class=" v-btn--outlined
          dng-section-pricing-item-header
          justify-center
          primary--text
          font-weight-bold
          text-center
          border-thick
        "
      >
        {{ data.title }}
      </v-card-title>
      <v-card-text class="pa-0">
        <v-list tile class="pa-0 rounded-lg border-medium">
          <template v-for="(feature, index) in data.featureList">
            <v-list-item :key="index">
              <v-list-item-title class="d-flex align-center justify-center">
                <div>{{ feature.label }}</div>
                <v-icon v-if="feature.isOn" color="success"> mdi-check </v-icon>
                <v-icon v-else color="error"> mdi-close </v-icon>
              </v-list-item-title>
            </v-list-item>
            <v-divider
              v-if="index < data.featureList.length - 1"
              :key="data.title+''+index"
              class="mx-auto"
            style="width:12%"
            ></v-divider>
          </template>
        </v-list>
      </v-card-text>
      <v-list-item
        class="white--text secondary font-weight-bold"
        link
        @click="showAuthDialog()"
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
  methods:{
    showAuthDialog(){
      this.$store.dispatch('ui/ui/toggleDialog', {
        type: 'DIALOG_AUTH',
        value: true,
      })
    }
  }
}
</script>

<style>
.dng-section-pricing-item-feature {
  border-bottom: thin solid grey !important;
}
.dng-section-pricing-item-header {
}
</style>