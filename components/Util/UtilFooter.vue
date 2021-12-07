<template>
  <v-footer class="dng-footer d-flex justify-center" color="grey darken-4" dark>
    <v-col cols="12" class="d-flex flex-column justify-center align-center text-center pa-6">
      <UtilIcon class="mb-12" />
      <v-text-field
        class="dng-email-input"
        rounded
        hide-details=""
        solo
        label="Enter your email"
        placeholder="email@gmail.com"
        @keypress.enter="sendEmail"
      >
        <template #append>
          <v-btn rounded color="primary" @click="sendEmail"> SUBSCRIBE </v-btn>
        </template>
      </v-text-field>
      <v-list color="transparent">
        <v-list-item>
          <v-list-item-title> Hallo </v-list-item-title>
        </v-list-item>
      </v-list>
      <div class="font-weight-black text-h6 dng-email-input-btn-send">
        Copyright &copy; {{ new Date().getFullYear() }} - DIUNDANG. TEAM
      </div>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  methods: {
    sendEmail() {
      alert('Sending Email')
    },
  },
}
</script>

<style>
.dng-footer {
  min-height: 100vh !important;
}

.dng-email-input {
  /* min-width: 480px; */
  width: 100% !important;
  max-width: 480px !important;
}

.dng-email-input .v-input__slot {
  padding-right: 0px !important;
}

.dng-email-input .v-input__append-inner {
  /* margin-top: auto !important;
  margin-bottom: auto !important;
  margin-right: 12px !important; */
  margin: 12px !important;
}
</style>