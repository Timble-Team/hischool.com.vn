<template>
  <div class="price">
    <section class="cp_price-section">
      <div class="background-price">
        <h4 class="title-price text-center">Bảng giá trang trí</h4>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12 price-item" v-for="(item, index) of prices" :key ="`b${index}`">
              <price-item :price="item" :height="true"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PriceItem from '@/components/partials/PriceItem'

export default {
  name: 'PriceDecor',
  components: {
    PriceItem
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
      const pricesRef = await this.$fireStore.collection('prices').where('kind', '==', '4').get()
      this.prices = this.$common.convertCollectionRecord(pricesRef).sort((a,b) => (+a.order - +b.order))
    }
  }
}
</script>
