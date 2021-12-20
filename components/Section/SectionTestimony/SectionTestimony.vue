<template>
  <v-col cols="12" class="dng-section secondary pa-lg-12 pa-md-12 pa-6">
    <v-row class="mb-6" no-gutters justify="center">
      <SectionTitle
        :title="`Hear what people have experienced`"
        :color="`white`"
      />
    </v-row>
    <transition-group class="row no-gutters justify-center">
      <SectionTestimonyItem
        v-for="test in testList"
        :key="test.id"
        :data="test"
      />
    </transition-group>
    <!-- <v-row class="mb-6" no-gutters>
      
    </v-row> -->
    <v-row
      v-if="!maxData"
      no-gutters
      justify="center"
      @click="apiGetComments()"
    >
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
    page: 1,
    perPage: 11,
  }),
  mounted() {
    // this.loadMore(11, 0)
    this.apiGetComments()
  },
  methods: {
    loadMore(commentList, delay = 121) {
      // if first page, no need to add delay
      if (this.page === 1) delay = 0
      commentList.forEach((comment, idx) => {
        setTimeout(() => {
          // set loading to false if it is the last data
          if (idx === commentList.length - 1) {
            this.isSeeMoreLoading = false
          }
          this.testList.push(this.getCommentProps(comment))
        }, idx * delay)
      })

      if (this.testList.length > 33) {
        this.maxData = true
      }
    },
    apiGetComments() {
      this.isSeeMoreLoading = true

      // GET COMMENTS
      this.$API_DUMMY.getComments((err, data) => {
        if (err) return console.log(err)
        const start = (this.page - 1) * this.perPage + 1
        const end = start + this.perPage
        const commentList = data.slice(start, end)
        this.$store.dispatch('ui/ui/setTestimonyList', {
          list: commentList.map((comment) => this.getCommentProps(comment)),
        })
        this.loadMore(commentList)
        this.page += 1
      })
    },
    getCommentProps(comment) {
      return {
        id: comment.id,
        img: 'https://i.pravatar.cc/' + Math.floor(Math.random() * 79) + 1,
        name: comment.name
          .split(' ')
          .slice(0, 2)
          .toString()
          .replaceAll(',', ' '),
        body: comment.body,
      }
    },
  },
}
</script>

<style>
</style>