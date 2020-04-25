<template>
  <div>
    <app-header/>
    <nuxt />
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from '../common-layouts/header'
import AppFooter from '../common-layouts/footer'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  watch:{
    $route (to, from){
      // this.$store.commit('setSidebar', false)
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}
</script>
