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
    async accessories () {
      const element = this.$store.getters.getAccessories
      if (element && element.length > 0) {
        return element
      } else {
        const accessoriesRef = await this.$fireStore.collection('accessories').get()
        let element = this.$common.convertCollectionRecord(accessoriesRef).sort((a,b) => (+a.order - +b.order))
        this.$store.commit('setAccessories', element)
        return element
      }
    }
  }
}
</script>
<style lang="scss">
</style>
