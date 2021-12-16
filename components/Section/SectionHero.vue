<template>
  <div v-intersect="{onIntersect}" class="dng-section dng-section-hero col col-12">
    <v-row no-gutters>
      <v-col class="d-flex" :class="isIntersecting?'primary':''" cols="12" lg="6" md="8" sm="12">
        <v-card class="dng-section-hero-panel my-auto rounded-xl mx-4" dark>
          <v-card-text>
            <div class="text-h4 mb-6 font-weight-bold">Hello there!</div>
            <div class="mb-6">
              General Grievous: General Kenobi. You are a bold one. [to the
              Magna Guards] Kill him! [The Magna guards advance. Obi-wan pulls
              down a heating vent on top of them.] <br />General Grievous: [to
              the droids] Back away! I will deal with this Jedi slime myself.
              <br />Obi-Wan Kenobi: Your move. <br />General Grievous: You fool.
              I've been trained in your Jedi arts by Count Dooku. [Grievous' two
              arms split into four. Each activates and wields a stolen
              lightsaber.]
            </div>
            <div class="d-flex">
              <v-btn class="ms-auto rounded-xl" color="secondary" x-large @click="showAuthDialog()">
                Join now!
                <!-- <v-icon large right> mdi-chevron-right </v-icon> -->
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
   data: () => ({
      isIntersecting: false,
    }),
  methods: {
    showAuthDialog() {
      // console.log(this.$store)
      this.$store.dispatch('ui/ui/toggleDialog', 
      {
        type: 'DIALOG_AUTH',
        value : true
      })
    },
     onIntersect(entries, observer){
    this.isIntersecting = entries[0].isIntersecting
  }
  },
}
</script>

<style>
.dng-section {
  /* display: flex; */
  /* padding: 64px !important; */
  min-height: 100vh !important;
}

.dng-section-hero {
  display: flex;
  background-image: url('~/assets/img/dummy-bg-hero.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.dng-section-hero-panel {
  /* background-color:  !important; */
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.4) !important;
  position: relative;
}
/* 
.dng-section-hero-panel::before {
  content: "";
  background-color: black;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
} */
</style>