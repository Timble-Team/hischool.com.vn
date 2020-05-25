<template>
  <div class="container">
    <h3 class="title-price text-center">Bảng giá trang phục</h3>
    <div class="row" v-if="clothes.length > 0">
      <div class="col-lg-6" v-for="(item, index) of clothes" :key="index">
        <CoverArticle :article="item"/>
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
    this.getClothes()
  },
  methods: {
    async getClothes () {
      const clothesRef = await this.$fireStore.collection('clothes').get()
      this.clothes = this.$common.convertCollectionRecord(clothesRef).sort((a,b) => (+a.order - +b.order))
      this.clothes = this.clothes.map(x => ({
        ...x,
        link: x.link ? x.link : this.$options.filters.convertVie(x.name, x.id)
      }))
    }
  }
}
</script>
<style lang="scss">
</style>
