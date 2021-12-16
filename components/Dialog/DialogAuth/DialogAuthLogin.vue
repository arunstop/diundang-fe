<template>
  <v-col cols="12" md="10" class="pa-6">
    <v-form
      ref="formAuthLogin"
      v-model="isFormAuthLoginValid"
      class="d-flex flex-column"
      @submit.prevent="execAuthLogin"
    >
      <SectionTitle class="mb-6" :title="`Login`" :color="`secondary`" />
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

      <div class="my-4 mx-auto font-weight-bold grey--text">No account?</div>

      <v-btn
        rounded
        color="secondary"
        x-large
        outlined
        @click="$nuxt.$emit('toggle-auth-form')"
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
    }
  },
  computed: {},
  methods: {
    execAuthLogin() {
      this.$refs.formAuthLogin.validate()
      if (this.isFormAuthLoginValid) {
        alert(123)
      }
    },
  },
}
</script>

<style>
</style>