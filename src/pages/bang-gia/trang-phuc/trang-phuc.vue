<template>
  <div class="container">
    <h3 class="title-price text-center">Bảng giá trang phục</h3>
    <div class="row" v-if="clothes.length > 0">
      <div class="col-lg-4" v-for="(item, index) of clothes" :key="index">
        <CoverArticle :cover="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import CoverArticle from '@/components/modules/CoverArticle2.vue'
import { APIService } from '@/helpers/services/api.service'

var api = new APIService()

export default {
  name: 'PriceClothes',
  components: {
    CoverArticle
  },
  data () {
    return {
      clothes: []
    }
  },
  created () {
    api.get(['api', 'cloths']).then(res => {
      this.clothes = res.map(x => ({
        image: x.images[0] ? this.$options.filters.takeImage(x.images[0].name.url) : null,
        title: x.name,
        nameRoute: 'priceClothesDetail',
        description: x.description,
        paramsRoute: { id: x.id }
      }))
    })
  }
}
</script>
<style lang="scss">
</style>
