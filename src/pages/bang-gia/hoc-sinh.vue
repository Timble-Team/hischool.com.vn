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
      const prices = this.$common.convertCollectionRecord(pricesRef).sort((a,b) => (+a.order - +b.order))
      prices.forEach(async x => {
        x.includes = await Promise.all(x.includes.map(async y => {
          if (typeof y === 'string') {
            return y
          } else {
            return this.$common.convertDocumentRecord(await y.get())
          }
        }))
        this.prices.push(x)
      })
    },
  }
}
</script>
