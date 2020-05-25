<template>
  <PriceCommon :prices="prices" :type="'học sinh'" :height="true"/>
</template>

<script>
import PriceCommon from '@/components/partials/PriceCommon'

export default {
  name: 'Price',
  components: {
    PriceCommon
  },
  data() {
    return {
      prices: []
    }
  },
  created () {
    this.getPrices()
  },
  methods: {
    async getPrices () {
      const pricesRef = await this.$fireStore.collection('prices').where('kind', 'in', ['2', '4']).get()
      this.prices = this.$common.convertCollectionRecord(pricesRef).sort((a,b) => (+a.order - +b.order))
    }
  }
}
</script>
