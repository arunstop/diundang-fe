<template>
  <v-col cols="12" class="pa-0">
    <v-row class="mb-6 mx-6" no-gutters justify="center">
      <SectionTitle
        :title="`Ergonomic prices, won't let you go bankrupt!`"
        :color="`secondary`"
      />
    </v-row>
    <v-slide-x-reverse-transition
      group
      origin="center center"
      class="row justify-center no-gutters"
    >
      <SectionPricingItem
        v-for="price in priceList"
        :key="price.id"
        :data="price"
      />
    </v-slide-x-reverse-transition>
    <v-row v-if="!maxData" no-gutters justify="center" @click="loadMore(3)">
      <v-btn
        outlined
        class="rounded-lg"
        color="white"
        :loading="isSeeMoreLoading"
      >
        See More ...
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    priceList: [],
    maxData: false,
    isSeeMoreLoading: false,
  }),
  mounted() {
    this.loadMore(5)
  },
  methods: {
    loadMore(qty) {
      this.isSeeMoreLoading = true
      for (let i = 1; i <= qty; i++) {
        setTimeout(() => {
          if (i === qty - 1) {
            this.isSeeMoreLoading = false
          }
          this.priceList.push({
            id: Math.random() * Math.random(),
            title: 'Package ' + Math.random() * i,
            featureList: [
              { label: 'Feature 1', isOn: true },
              { label: 'Feature 1', isOn: false },
              { label: 'Feature 1', isOn: true },
              { label: 'Feature 1', isOn: false },
              { label: 'Feature 1', isOn: true },
              { label: 'Feature 1', isOn: false },
            ],
          })
        })
      }

      if (this.priceList.length > 33) {
        this.maxData = true
      }
    },
  },
}
</script>

<style>
</style>