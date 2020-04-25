<template>
  <div class="main">
    <h1>Hello World</h1>
     <v-btn color="red lighten-2" dark v-on="on">
        Click Me
      </v-btn>
    <dialog/>
  </div>
</template>

<script>
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

import Dialog from '../components/dialog.vue'

export default {
  components: {
    Dialog
  },
  data() {
    return {
    }
  },
  mounted() {
    new WOW().init()
  },
  methods: {
  }
}
</script>
