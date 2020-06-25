<template>
  <article class="articles blog-card post-grid grid-style m-b30 small-triangle">
    <nuxt-link class="blog-card-media" tag="div" :to="article.link" :style="{'background-image': `url(${article.cover.url})`}">
    </nuxt-link>
    <div class="blog-card-info">
      <div class="title-sm">
        <a href="javascript:void(0);">{{getCategory(instance, article.kind)}}</a>
      </div>
      <h5 class="font-20">
        <nuxt-link :to="article.link">{{article.name}}</nuxt-link>
      </h5>
      <!-- <ul class="social-link-round">
        <li class="link-ic">
          <a href="javascript:void(0);" class="btn-link share">
            <i class="la la-share-alt"></i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="btn-link">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="btn-link">
            <i class="fa fa-pinterest-p"></i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="btn-link">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="btn-link">
            <i class="fa fa-instagram"></i>
          </a>
        </li>
      </ul> -->
    </div>
  </article>
</template>
<script>
export default {
  name: 'CoverArticle3',
  props: {
    article: Object,
    instance: {
      default: 'articles',
      type: String
    }
  },
  computed: {
    async categories () {
      const cate = this.$store.getters.getCategories
      if (cate && cate.length > 0) {
        return cate
      } else {
        const categoriesRef = await this.$fireStore.collection('categories').get()
        const cate = this.$common.convertCollectionRecord(categoriesRef)
        this.$store.commit('setCategories', cate)
        return cate
      }
    }
  },
  methods: {
    getCategory(type, kind) {
      if (this.categories.length > 0) {
        const cat = this.categories.find(x => +x.key === +kind && x.type === type)
        return cat ? cat.name : 'KỈ YẾU'
      }
      return 'KỈ YẾU'
    },
  }
}
</script>
<style lang="scss" scoped>
.articles {
  .blog-card-media {
    padding-bottom: 66.67%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
