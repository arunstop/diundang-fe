<template>
  <v-dialog
    v-model="show"
    max-width="600"
    scrollable
    :fullscreen="$vuetify.breakpoint.xs"
    transition="slide-y-reverse-transition"
    :persistent="isLoading"
  >
    <v-card class="rounded-xl py-6 overflow-hidden">
      <v-slide-y-reverse-transition class="position-absolute" origin="center center">
        <UtilLoadingOverlay v-if="isLoading" :label="isLoadingLabel"/>
      </v-slide-y-reverse-transition>
      <v-btn
        class="
          dng-dialog-auth-btn-close
          font-weight-black
          secondary--text
          rounded-xl
        "
        elevation="0"
        @click="hideDialog()"
      >
        <v-icon class="me-1">mdi-chevron-left</v-icon>
        Back
      </v-btn>

      <v-card-text class="dng-dialog-auth-content d-flex pa-0">
        <div class="row no-gutters justify-center align-center mx-6" group>
          <DialogAuthLogin v-if="activeForm === 'LOGIN'" :key="`DialogAuthLogin`" />
          <DialogAuthRegister v-if="activeForm === 'REGISTER'" :key="`DialogAuthRegister`" />
          <DialogAuthResetPw v-if="activeForm === 'RESETPW'" :key="`DialogAuthRegister`" />
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  props: {
    val: Boolean,
  },
  data: () => ({
    activeForm: 'LOGIN',
    isLoading:false,
    isLoadingLabel:''
  }),
  computed: {
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
    this.$nuxt.$on('dialog-auth-toggle-form', (payload) => {
      this.activeForm = payload.name

      // scroll to top
      this.scrollTop()
    })

    this.$nuxt.$on('dialog-auth-scroll-top', ()=>{
      this.scrollTop()
    })

    this.$nuxt.$on('dialog-auth-set-is-loading', (payload) => {
      if(payload.val===false) this.isLoading = false
      this.isLoading = payload.val
      this.isLoadingLabel = payload.message
    })
  },
  methods: {
    hideDialog() {
      this.$store.dispatch('ui/ui/toggleDialog', {
        type: 'DIALOG_AUTH',
        value: false,
      })
    },
    scrollTop(){
      document.getElementsByClassName('dng-dialog-auth-content')[0].scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  },
}
</script>

<style>
.dng-dialog-auth-btn-close {
  position: absolute;
  left: 2px;
  top: 2px;
  z-index: 1;
}
</style>