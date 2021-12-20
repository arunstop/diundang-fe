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
      <UtilBtnBackDialog :action="()=>hideDialog()"/>
      <v-card-text class="pa-4 pa-md-8">
      <SectionTitle class="mb-6" :title="`Testimony`" :color="`secondary`" />

        <v-list>
        <SectionTestimonyItemDetail
          v-for="testi in testimonyList"
          :key="testi.id"
          :data="testi"
        />
      </v-list>

      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: {
    val: Boolean,
  },
  data: () => ({
    isLoading: false,
    isLoadingLabel: '',
  }),
  computed: {
    ...mapState('ui/ui', ['testimonyList']),
    show: {
      get() {
        return this.val
      },
      set(value) {
        this.hideDialog()
      },
    },
  },
  methods: {
    hideDialog() {
      this.$store.dispatch('ui/ui/toggleDialog', {
        type: 'DIALOG_TESTIMONY_DETAIL',
        value: false,
      })
    },
  },
}
</script>

<style>
</style>