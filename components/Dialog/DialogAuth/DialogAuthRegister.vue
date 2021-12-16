<template>
  <v-col cols="12" md="10" class="d-flex flex-column pa-6">
    <v-form
      ref="formAuthRegister"
      v-model="isFormAuthRegisterValid"
      class="d-flex flex-column"
      @submit.prevent="execAuthRegister"
    >
      <SectionTitle class="mb-6" :title="`Register`" :color="`secondary`" />
      <v-text-field
        v-model="emailModel"
        prepend-inner-icon="mdi-at"
        outlined
        label="Email"
        placeholder="email@gmail.com"
        :rules="$inputRules.email()"
      >
      </v-text-field>
      <v-text-field
        v-model="nameModel"
        prepend-inner-icon="mdi-account"
        outlined
        label="Name"
        placeholder="Firstie Lasten"
        :rules="[$inputRules.required('Name')]"
      >
      </v-text-field>
      <v-text-field
        v-model="pwModel"
        prepend-inner-icon="mdi-lock"
        outlined
        label="Password"
        placeholder="Minimum 8 chars"
        :rules="$inputRules.password()"
        type="password"
      >
      </v-text-field>
      <v-text-field
        v-model="cpwModel"
        prepend-inner-icon="mdi-lock"
        outlined
        label="Confirm Password"
        placeholder="Enter the same one"
        :rules="[
          $inputRules.required('Confirmation password'),
          (v) => v === pwModel || 'Confirmation password does not match',
        ]"
        type="password"
      >
      </v-text-field>
      <v-text-field
        v-model="phoneModel"
        prepend-inner-icon="mdi-phone"
        outlined
        label="Phone Number"
        placeholder="+628123245678"
        :rules="[$inputRules.required('Phone number')]"
        type="number"
      >
      </v-text-field>
      <v-btn rounded color="secondary" x-large type="submit"> Register </v-btn>
      <div class="my-4 mx-auto font-weight-bold grey--text">
        Already have one?
      </div>

      <v-btn
        rounded
        color="secondary"
        x-large
        outlined
        @click="$nuxt.$emit('toggle-auth-form')"
      >
        Login
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
      isFormAuthRegisterValid: false,
      emailModel: '',
      nameModel: '',
      pwModel: '',
      cpwModel: '',
      phoneModel: '',
    }
  },
  computed: {},
  methods: {
    execAuthRegister() {
      this.$refs.formAuthRegister.validate()
      if (this.isFormAuthRegisterValid) {
        alert(123)
      }
    },
  },
}
</script>

<style>
</style>