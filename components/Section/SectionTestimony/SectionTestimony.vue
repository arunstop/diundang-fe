<template>
  <v-col cols="12" class="secondary pa-lg-12 pa-md-12 pa-6">
    <v-row class="mb-6" no-gutters justify="center">
      <SectionTitle
        :title="`Hear what people have experienced`"
        :color="`white`"
      />
    </v-row>
    <v-scroll-x-reverse-transition class="row no-gutters" group>
      <SectionTestimonyItem
        v-for="test in testList"
        :key="test.id"
        :data="test"
      />
    </v-scroll-x-reverse-transition>
    <!-- <v-row class="mb-6" no-gutters>
      
    </v-row> -->
    <v-row v-if="!maxData" no-gutters justify="center" @click="loadMore(11)">
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
    testList: [],
    maxData: false,
    isSeeMoreLoading: false,
  }),
  mounted() {
    this.loadMore(11, 0)
  },
  methods: {
    loadMore(qty, delay = 121) {
      this.isSeeMoreLoading = true
      for (let i = 0; i < qty; i++) {
        setTimeout(() => {
          if (i === qty - 1) {
            this.isSeeMoreLoading = false
          }
          this.testList.push({
            id: Math.random() * Math.random(),
            img: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 79) + 1,
            name: 'Dani Daniela',
            comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quisquam nobis, minus veritatis molestiae nostrum dignissimos ratione
          facere rerum adipisci deleniti quas! Facere totam dolorum fugiat
          voluptates tempore. Nobis, ex.`,
          })
        }, i * delay)
      }

      if (this.testList.length > 33) {
        this.maxData = true
      }
    },
  },
}
</script>

<style>
</style>