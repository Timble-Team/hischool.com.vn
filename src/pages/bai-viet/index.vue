<template>
  <div class="container">
    <h3 class="title-price text-center">Bài viết</h3>
    <div class="row">
      <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
        <div class="row" v-if="articles.length > 0">
          <div class="col-lg-6" v-for="(item, index) of articles" :key="index">
            <CoverArticle :cover="item"/>
          </div>
        </div>
      </div>
      <CommonSidebar/>
    </div>
  </div>
</template>

<script>
import CoverArticle from '@/components/modules/CoverArticle2.vue'
import CommonSidebar from '@/common-layouts/sidebar.vue'
import { APIService } from '@/helpers/services/api.service'

var api = new APIService()

export default {
  name: 'Articles',
  components: {
    CoverArticle,
    CommonSidebar
  },
  data () {
    return {
      articles: []
    }
  },
  created () {
    api.get(['api', 'index_article'], { kind: this.$route.meta.kind }).then(res => {
      this.articles = res.map(x => ({
        image: x.images[0] ? this.$options.filters.takeImage(x.images[0].name.url) : null,
        title: x.title,
        nameRoute: this.$route.meta.childName,
        description: x.description,
        paramsRoute: { id: x.id }
      }))
    })
  }
}
</script>
<style lang="scss">
</style>
