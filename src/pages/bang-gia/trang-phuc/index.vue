<template>
  <div class="container">
    <h3 class="title-price text-center">Bảng giá trang phục</h3>
    <div class="row" v-if="clothes && clothes.length > 0">
      <div class="col-lg-6" v-for="(item, index) of clothes" :key="index">
        <CoverArticle :article="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import CoverArticle from '@/components/modules/CoverArticle2.vue'

export default {
  name: 'PriceClothes',
  components: {
    CoverArticle
  },
  data () {
    return {
    }
  },
  asyncComputed: {
    async clothes () {
      const element = this.$store.getters.getClothes
      if (element && element.length > 0) {
        return element
      } else {
        const clothesRef = await this.$fireStore.collection('clothes').get()
        let element = this.$common.convertCollectionRecord(clothesRef).sort((a,b) => (+a.order - +b.order))
        element = element.map(x => ({
          ...x,
          link: x.link ? x.link : `/bang-gia/trang-phuc/${this.$options.filters.convertVie(x.name, x.id)}`
        }))
        this.$store.commit('setClothes', element)
        return element
      }
    }
  }
}
</script>
<style lang="scss">
</style>
