<template>
  <v-list-item>
      <v-list-item-avatar class="align-self-start" size="60">
        <v-img :src="data.img">
          <template #placeholder>
            <v-row
              class="fill-height ma-0 primary"
              align="center"
              justify="center"
            >
              <!-- <v-progress-circular
                  indeterminate
                  color="white"
                ></v-progress-circular> -->
            </v-row>
          </template>
        </v-img>
      </v-list-item-avatar>
      <v-list-item-content>
          <v-list-item-title class="font-weight-bold text-capitalize grey--text text--darken-2">
          {{ data.name }}
        </v-list-item-title>
        <v-list-item-subtitle class="dng-testimony-item-comment black--text mt-2 text-wrap">
          <div>
            {{ data.body }}
          </div>
        </v-list-item-subtitle>
      </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    data: { type: Object, default: () => {} },
  },
  mounted() {
    console.log(this.data)
  },
}
</script>

<style>
</style>