<template>
  <v-dialog
    v-model="show"
    max-width="600"
    scrollable
    :fullscreen="$vuetify.breakpoint.xs"
    transition="slide-y-reverse-transition"
  >
    <v-card class="rounded-xl py-6">
      <v-btn
        class="
          dng-dialog-auth-btn-close
          rounded-xl
          font-weight-black
          secondary--text
        "
        elevation="0"
        @click="hideDialog()"
      >
        <v-icon class="me-1">mdi-chevron-left</v-icon>
        Back
      </v-btn>

      <v-card-text class="dng-dialog-auth-content d-flex pa-0">
        <v-scroll-y-reverse-transition
          class="row no-gutters justify-center align-center mx-6"
          group
        >
          <DialogAuthLogin v-if="!showRegister" :key="`DialogAuthLogin`" />
          <DialogAuthRegister v-if="showRegister" :key="`DialogAuthRegister`" />
        </v-scroll-y-reverse-transition>
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
    showRegister: false,
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
    this.$nuxt.$on('toggle.auth.form', () => {
      // scroll to top
      document.getElementsByClassName('dng-dialog-auth-content')[0].scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
      this.showRegister = !this.showRegister
    })
  },
  methods: {
    hideDialog() {
      this.$store.dispatch('ui/ui/toggleDialog', {
        type: 'DIALOG_AUTH',
        value: false,
      })
    },
  },
}
</script>

<style>

.dng-dialog-auth-btn-close {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}
</style>