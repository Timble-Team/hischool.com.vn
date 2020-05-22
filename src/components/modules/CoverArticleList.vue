<template>
  <div class="section-full space-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-6" v-for="(item, index) of coverData" :key="`d${index}`">
          <CoverArticle :cover="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoverArticle from '@/components/modules/CoverArticle1.vue'

export default {
  name: 'CoverArticleList',
  props: ['coverData', 'perRow'],
  components: {
    CoverArticle
  }
}
</script>
