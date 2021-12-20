<template>
  <v-col cols="12" md="10" class="pa-6">
    <v-form
      ref="formAuthLogin"
      v-model="isFormAuthLoginValid"
      class="d-flex flex-column"
      @submit.prevent="execAuthLogin"
    >
      <SectionTitle class="mb-6" :title="`Login`" :color="`secondary`" />
      <v-alert
        v-if="isError"
        text
        type="error"
        icon="mdi-alert-circle"
        border="left"
        close-icon="mdi-close-thick"
        dismissible
      >
        Error, because of something happened
      </v-alert>
      <v-text-field
        v-model="emailModel"
        prepend-inner-icon="mdi-at"
        outlined
        label="Email"
        placeholder="email@gmail.com"
        :rules="[...$inputRules.email()]"
      >
      </v-text-field>
      <v-text-field
        v-model="pwModel"
        prepend-inner-icon="mdi-lock"
        outlined
        label="Password"
        type="password"
        :rules="[...$inputRules.password()]"
      >
      </v-text-field>
      <v-btn rounded color="secondary" x-large type="submit"> Login </v-btn>

      <div class="my-4 mx-auto font-weight-bold grey--text text-center">
        No account? or
        <a
          class="text-decoration-underline"
          @click="$nuxt.$emit('dialog-auth-toggle-form', { name: 'RESETPW' })"
          >Forgot your password?</a
        >
      </div>

      <v-btn
        rounded
        color="secondary"
        x-large
        outlined
        @click="$nuxt.$emit('dialog-auth-toggle-form', { name: 'REGISTER' })"
      >
        Register
      </v-btn>

      <div class="my-4 mx-auto font-weight-bold grey--text">Or use socials</div>

      <v-btn rounded x-large class="font-weight-bold" dark color="#1877f2">
        <v-icon left size="24">mdi-google</v-icon>
        Google
      </v-btn>
      <div style="width: 33%" class="my-2 mx-auto" />
      <v-btn rounded x-large class="font-weight-bold" dark color="#395693">
        <v-icon left size="24">mdi-facebook</v-icon>
        Facebook
      </v-btn>
    </v-form>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      isFormAuthLoginValid: false,
      emailModel: '',
      pwModel: '',
      isError: false,
    }
  },
  computed: {},
  methods: {
    execAuthLogin() {
      this.$refs.formAuthLogin.validate()
      if (this.isFormAuthLoginValid) {
        this.isError=false
        this.$nuxt.$emit('dialog-auth-set-is-loading', {
          val: true,
          message: 'Logging into your account...',
        })
        setTimeout(() => {
          this.$nuxt.$emit('dialog-auth-scroll-top')
          this.isError = true
          this.$nuxt.$emit('dialog-auth-set-is-loading', {
            val: false,
            // message: 'Logging into your account',
          })
        }, 2123)
        return
      }
      this.$nuxt.$emit('dialog-auth-scroll-top')
    },
  },
}
</script>

<style>
</style>