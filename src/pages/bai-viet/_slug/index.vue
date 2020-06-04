<template>
  <div class="container">
    <h3 class="title-price text-center">Bài viết</h3>
    <div class="row">
      <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
        <div class="row" v-if="articles.length > 0">
          <div class="col-lg-6" v-for="(item, index) of articles" :key="index">
            <CoverArticle :article="item"/>
          </div>
        </div>
      </div>
      <CommonSidebar/>
    </div>
  </div>
</template>

<script>
import CoverArticle from '@/components/modules/CoverArticle3.vue'
import CommonSidebar from '@/common-layouts/sidebar.vue'

export default {
  validate ({ params }) {
    // Must be a number
    return /(tao-dang)|(huong-dan)|(idea)|(dia-diem-chup-hinh)|(make-up)/.test(params.slug)
  },
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
    this.getArticles()
  },
  computed: {
    categories() {
      return this.$store.state.slugs
    }
  },
  methods: {
    async getArticles () {
      const slug = this.categories[this.$route.params.slug]
      const articlesRef = await this.$fireStore.collection('articles').where('kind', '==', slug).get()
      this.articles = this.$common.convertCollectionRecord(articlesRef).sort((a,b) => (+a.order - +b.order)).map(x => ({
        ...x,
        link: x.link ? x.link : `/bai-viet/${this.$route.params.slug}/${this.$options.filters.convertVie(x.name, x.id)}`
      }))
    },
  }
}
</script>
<style lang="scss">
</style>
