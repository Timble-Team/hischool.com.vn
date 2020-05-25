<template>
  <PriceCommon :prices="prices" :type="'sinh viên'"/>
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
      const pricesRef = await this.$fireStore.collection('prices').where('kind', '==', '1').get()
      this.prices = this.$common.convertCollectionRecord(pricesRef).sort((a,b) => (+a.order - +b.order))
    }
  }
}
</script>
