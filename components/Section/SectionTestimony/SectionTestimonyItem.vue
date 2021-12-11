<template>
    <v-col cols="12" md="6" lg="4" class="py-4">
      <v-list-item three-line dark>
        <v-list-item-avatar size="60">
          <v-img :src="data.img">
            <template #placeholder>
              <v-row
                class="fill-height ma-0 primary"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="white"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle class="dng-testimony-item-comment">
            <div>
              {{ data.comment }}
            </div>
          </v-list-item-subtitle>
          <v-list-item-title class="font-weight-bold text-capitalize">
            <em>&mdash; {{ data.name }}</em>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>
</template>

<script>
export default {
  props: {
    data: { type: Object, default: () => {} },
  },
}
</script>

<style>
.dng-testimony-item-comment > div:first-letter {
  text-transform: uppercase;
}
</style>