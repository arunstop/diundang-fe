<template>
  <v-list-item :id="elementId" class="px-6 px-sm-4 px-md-12" :value="'stid-'+data.id" link>
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
      <v-list-item-title
        class="font-weight-bold text-capitalize "
      >
        <span>{{ data.name }}</span>
        <span class="font-weight-regular text-caption text-none"> - 3 days ago</span>
      </v-list-item-title>
      <v-list-item-subtitle
        class="dng-testimony-item-comment black--text mt-2 text-wrap"
      >
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
  data() {
    return {
      elementId: '',
    }
  },
  mounted() {
    this.elementId = 'stid-' + this.data.id
    // console.log(this.data)
  },
}
</script>

<style>
</style>