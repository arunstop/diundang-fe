<template>
  <div>
    <DialogAuth :val="isActive('DIALOG_AUTH')"/>
    <SectionTestimonyDialogDetail :val="isActive('DIALOG_TESTIMONY_DETAIL')"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('ui/ui', ['dialogList']),
  },
  methods:{
      isActive(type){
          return !!this.dialogList.find(e=>e.type===type)
      }
  }
}
</script>

<style>
</style>