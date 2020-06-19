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

export default {
  name: 'PriceClothes',
  components: {
    CoverArticle
  },
  data () {
    return {
    }
  },
  computed: {
    clothes () {
      return this.$store.state.clothes
    }
  }
}
</script>
<style lang="scss">
</style>
