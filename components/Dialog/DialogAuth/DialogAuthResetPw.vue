<template>
  <v-col cols="12" md="10" class="pa-6">
    <v-form
      ref="formAuthLogin"
      v-model="isFormAuthLoginValid"
      class="d-flex flex-column"
      @submit.prevent="execAuthResetPw"
    >
      <SectionTitle
        class="mb-6"
        :title="`Reset Password`"
        :color="`secondary`"
      />
      <v-alert
        v-if="isError"
        text
        type="error"
        icon="mdi-alert-circle"
        border="left"
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
      <v-btn rounded color="secondary" x-large type="submit"> Reset </v-btn>

      <div class="my-4 mx-auto font-weight-bold grey--text text-center">
        Finally remember?
      </div>

      <v-btn
        rounded
        color="secondary"
        x-large
        outlined
        @click="$nuxt.$emit('dialog-auth-toggle-form', { name: 'LOGIN' })"
      >
        Login
      </v-btn>
      <div class="my-4 mx-auto font-weight-bold grey--text text-center">
        No account?
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
    </v-form>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      isFormAuthLoginValid: false,
      emailModel: '',
      isError: false,
    }
  },
  computed: {},
  methods: {
    execAuthResetPw() {
      this.$refs.formAuthLogin.validate()
      if (this.isFormAuthLoginValid) {
        this.$nuxt.$emit('dialog-auth-set-is-loading', {
          val: true,
          message: 'Processing reset password...',
        })
        setTimeout(() => {
          this.$nuxt.$emit('dialog-auth-scroll-top')
          this.isError = true
          this.$nuxt.$emit('dialog-auth-set-is-loading', {
            val: false,
            // message: 'Logging into your account',
          })
        }, 2123)
      }
    },
  },
}
</script>

<style>
</style>