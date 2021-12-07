<template>
  <v-app class="dng-app">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      temporary
      bottom
      mobile-breakpoint="720"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="dng-header elevation-0 transparent pe-2"
      dark
    >
      <UtilLogo />
      <v-spacer />
      <v-btn @click.stop="drawer = !drawer">
        <v-icon left> mdi-menu </v-icon>
        Menu
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <UtilFooter />
    <v-slide-y-reverse-transition origin="center center">
      <UtilBtnScrollTop v-if="scrolled" />
    </v-slide-y-reverse-transition>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  mounted() {
    // indicate whether main container is scrolled
    const dngApp = document.getElementsByClassName('dng-app')[0]
    // console.log(dngApp)
    dngApp.onscroll = () => {
      if (dngApp.scrollTop >= 240) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    }
  },
}
</script>
<style>
html {
  overflow: hidden !important;
}

/* Make header has no pointer events */
.dng-header {
  pointer-events: none;
}
/* Then give all its children to have pointer events */
.dng-header > .v-toolbar__content * {
  pointer-events: all;
}

.dng-app {
  height: 100vh !important;
  overflow-y: auto !important;
}
</style>
