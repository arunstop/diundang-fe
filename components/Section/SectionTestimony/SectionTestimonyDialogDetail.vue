<template>
  <v-dialog
    v-model="show"
    max-width="600"
    scrollable
    :fullscreen="$vuetify.breakpoint.xs"
    transition="slide-y-reverse-transition"
    :persistent="isLoading"
  >
    <v-card class="rounded-lg">
      <UtilBtnBackDialog :action="() => hideDialog()" />
      <v-card-text class="dng-section-testimony-dialog px-0 py-6">
        <SectionTitle class="mx-4 mx-md-12" :title="`Testimony`" :color="`secondary`" />

        <v-list class="my-6">
          <v-list-item-group v-model="testimonyDetailModel" mandatory color="accent">
            <SectionTestimonyItemDetail
            v-for="testi in testimonyList"
            :key="testi.id"
            :data="testi"
          />
          </v-list-item-group>
        </v-list>
        <v-row
      v-if="!maxData"
      no-gutters
      justify="center"
    >
      <v-btn
        outlined
        class="rounded-lg font-weight-bold border-medium"
        color="secondary"
        :loading="isLoading"
      @click="apiGetComments()"
      >
        See More ...
      </v-btn>
    </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    val: Boolean,
  },
  data: () => ({
    maxData: false,
    isLoading: false,
    isLoadingLabel: '',
    testimonyDetailModel:'',
  }),
  computed: {
    ...mapState('ui/ui', ['testimonyList', 'testimonyDetailId']),
    show: {
      get() {
        return this.val
      },
      set(value) {
        this.hideDialog()
      },
    },
  },
  mounted() {
    this.$nuxt.$on('dialog-testimony-detail-scroll', (payload) => {
      this.$nextTick().then(()=>{
        this.scrollToComment(payload.id)
        this.testimonyDetailModel=payload.id
      })
    })
  },
  methods: {
    hideDialog() {
      this.$store.dispatch('ui/ui/toggleDialog', {
        type: 'DIALOG_TESTIMONY_DETAIL',
        value: false,
      })
    },
    scrollToComment(id) {
      const container= document.getElementsByClassName('dng-section-testimony-dialog')[0]
      // console.log(Array.from(container))
      // console.log(container[0])
      // console.log(document.getElementsByClassName('dng-app'))
      // console.log(document.getElementsByClassName('dng-app')[0])
      // this.$vuetify.goTo('#'+this.testimonyDetailId, {
      this.$vuetify.goTo('#'+id, {
        container,
        // offset: -55,
        duration: 234,
      })
    },
    apiGetComments() {
      this.isLoading = true

      // GET COMMENTS
      this.$API_DUMMY.getComments((err, data) => {
        if (err) return console.log(err)
        const start = this.testimonyList.length+1
        const end = start + 6
        const commentList = data.slice(start, end).map((comment) => this.getCommentProps(comment))
        this.$store.dispatch('ui/ui/setTestimonyList', {
          list: commentList,
        })
        this.isLoading=false
        // this.loadMore(commentList)
        // console.log(commentList)
        // this.page += 1
      })
    },
    getCommentProps(comment) {
      return {
        id: comment.id,
        img: 'https://i.pravatar.cc/90?img=' + comment.id,
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