<template>
  <v-col cols="12" md="10" class="d-flex flex-column pa-6">
    <SectionTitle class="mb-6" :title="`Register`" :color="`secondary`" />
    <v-text-field
      prepend-inner-icon="mdi-at"
      outlined
      label="Email"
      placeholder="email@gmail.com"
    >
    </v-text-field>
     <v-text-field
      prepend-inner-icon="mdi-account"
      outlined
      label="Name"
      placeholder="Firstie Lasten"
    >
    </v-text-field>
    <v-text-field
      prepend-inner-icon="mdi-lock"
      outlined
      label="Password"
      placeholder="Minimum 8 chars"
      type="password"
    >
    </v-text-field>
     <v-text-field
      prepend-inner-icon="mdi-lock"
      outlined
      label="Confirm Password"
      placeholder="Enter the same one"
      type="password"
    >
    </v-text-field>

     <v-text-field
      prepend-inner-icon="mdi-phone"
      outlined
      label="Phone Number"
      placeholder="+628123245678"
      type="number"
    >
    </v-text-field>
    <v-btn rounded color="secondary" x-large> Register </v-btn>
        <div class="my-4 mx-auto font-weight-bold grey--text">Already have one?</div>

    <v-btn rounded color="secondary" x-large outlined @click="$nuxt.$emit('toggle-auth-form')"> Login </v-btn>

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
  </v-col>
</template>

<script>
export default {}
</script>

<style>
</style>