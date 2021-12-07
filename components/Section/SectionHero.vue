<template>
  <div class="dng-hero col col-12 elevation-0">
    <v-row no-gutters>
      <v-col class="d-flex" cols="12" lg="6" md="8" sm="12">
        <v-card class="dng-hero-panel my-auto rounded-xl pa-4" dark>
          <v-card-text>
            <div class="text-h3 mb-6 font-weight-bold">Hello there!</div>
            <div class="text-h6 mb-6">
              General Grievous: General Kenobi. You are a bold one. [to the
              Magna Guards] Kill him! [The Magna guards advance. Obi-wan pulls
              down a heating vent on top of them.] <br>General Grievous: [to the
              droids] Back away! I will deal with this Jedi slime myself.
              <br>Obi-Wan Kenobi: Your move. <br>General Grievous: You fool. I've been
              trained in your Jedi arts by Count Dooku. [Grievous' two arms
              split into four. Each activates and wields a stolen lightsaber.]
            </div>
            <div class="d-flex">
              <v-btn class="ms-auto rounded-xl" color="accent" x-large> Attack, Kenobi! 
                  <v-icon large right>
                      mdi-chevron-right
                  </v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
.dng-hero {
    display: flex;
  padding: 64px !important;
  min-height: 100vh !important;
  background-image: url('~/assets/img/dummy-bg-hero.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.dng-hero-panel{
    /* background-color:  !important; */
backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.4) !important;  
  position: relative;
}
/* 
.dng-hero-panel::before {
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