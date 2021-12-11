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
      <v-btn color="primary" @click.stop="drawer = !drawer">
        <v-icon left> mdi-menu </v-icon>
        Menu
      </v-btn>
    </v-app-bar>
    <v-main>
    <!-- <v-main :class="onDialogMode() ? 'dng-app-blur' :''"> -->
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <UtilFooter />
    <v-slide-y-reverse-transition origin="center center">
      <UtilBtnScrollTop v-if="scrolled" />
    </v-slide-y-reverse-transition>
    <DialogList/>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
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
  computed:{
    ...mapGetters('ui/ui', ['onDialogMode'])
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


/* .dng-app-blur .container{
  -webkit-filter: blur(4px);
  filter: blur(4px);
} */
</style>
