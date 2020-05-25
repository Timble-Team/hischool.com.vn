<template>
  <div class="container">
    <h3 class="title-price text-center">Bảng giá phụ kiện</h3>
    <div class="row" v-if="accessories.length > 0">
      <div class="col-6 col-sm-4 col-lg-3" v-for="(item, index) of accessories" :key="index">
        <Accessory :accessory="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Accessory from '@/components/partials/Accessory.vue'

export default {
  name: 'PriceAccessories',
  components: {
    Accessory
  },
  data () {
    return {
    }
  },
  computed: {
    accessories () {
      return this.$store.state.accessories
    }
  }
}
</script>
<style lang="scss">
</style>
