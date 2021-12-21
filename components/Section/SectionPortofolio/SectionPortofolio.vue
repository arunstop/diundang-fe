<template>
  <v-col cols="12" class="dng-section pa-lg-12 pa-md-12 pa-6 secondary">
    <v-row class="mb-6 mx-6" no-gutters justify="center">
      <SectionTitle :title="`Amazing things we've done`" :color="`white`" />
    </v-row>
    <transition-group class="row no-gutters justify-center">
      <SectionPortofolioItem
        v-for="porto in portoList"
        :key="porto.id"
        :data="porto"
      />
    </transition-group>
    <v-row v-if="!maxData" no-gutters justify="center">
      <v-btn
        outlined
        class="mt-4 rounded-lg border-medium"
        color="white"
        :loading="isSeeMoreLoading"
         @click="apiGetPhotos()"
      >
        See More ...
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      portoList: [],
      maxData: false,
      isSeeMoreLoading: false,
      page: 1,
      perPage: 12,
    }
  },
  async mounted() {
    await this.apiGetPhotos()
  },
  methods: {
    loadMore(portoList, delay = 121) {
      // if first page, no need to add delay
      if (this.page === 1) delay = 0
      portoList.forEach((porto, idx) => {
        setTimeout(() => {
          // set loading to false if it is the last data
          if (idx === portoList.length - 1) {
            this.isSeeMoreLoading = false
          }
          this.portoList.push({
            id: porto.id,
            img: porto.url,
          })
        }, idx * delay)
      })

      if (this.portoList.length > 33) {
        this.maxData = true
      }
    },
    async apiGetPhotos() {
      this.isSeeMoreLoading = true
      await this.$API_DUMMY.getPhotos((err, data) => {
        if (err) {
          this.isSeeMoreLoading = false
          console.log(err)
        }

        const start = this.portoList.length
        let perPage = this.perPage
        if (this.page > 1) {
          perPage = this.perPage / 2
        }
        const end = start + perPage
        // console.log(this.page)
        // console.log(start + ', ' + end)
        const portoList = data.slice(start, end)
        this.loadMore(portoList)
        this.page += 1
      })
    },
  },
}
</script>

<style>
</style>