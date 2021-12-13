<template>
  <v-row no-gutters justify="center" align="center">
    <SectionHero id="home" />
    <SectionService id="service" />
    <SectionTestimony id="testimony" />
    <SectionPricing id="pricing" />
  </v-row>
</template>
<script>
export default {
  mounted() {
    // this.$
    const sectionList = document.querySelectorAll('.dng-section')
    // const config = {
    //   rootMargin: ''
    // }
    const config = {
      rootMargin: '-50px 0px -55%',
    }

    const observer = new IntersectionObserver(function (entries, self) {
      entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
          intersectionHandler(entry)
        }
      })
    }, config)

    sectionList.forEach((section) => {
      observer.observe(section)
    })

    const intersectionHandler = (entry) => {
      // this.$router.push(`#${entry.target.id}`)
      this.$nuxt.$emit('select-section', entry.target.id)
    }
  },
}
</script>

<style>
</style>
