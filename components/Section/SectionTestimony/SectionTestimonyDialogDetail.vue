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
        <SectionTitle class="mb-6 mx-4 mx-md-12" :title="`Testimony`" :color="`secondary`" />

        <v-list>
          <v-list-item-group v-model="testimonyDetailModel" color="accent">
            <SectionTestimonyItemDetail
            v-for="testi in testimonyList"
            :key="testi.id"
            :data="testi"
          />
          </v-list-item-group>
        </v-list>
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
        duration: 200,
      })
    },
  },
}
</script>

<style>
</style>