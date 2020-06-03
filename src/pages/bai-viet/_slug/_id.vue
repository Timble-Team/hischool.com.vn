<template>
  <div class="page-content bg-white" v-if="article">
    <div class="content-block">
      <div class="section-full content-inner bg-white">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
              <div class="section-head text-center">
                <!-- <div class="title-sm">Fashion</div> -->
                <h2 class="title-head">{{article.name}}</h2>
              </div>
              <div class="blog-post blog-single blog-post-style-2 sidebar">
                <div class="dlab-post-info">
                  <div class="dlab-post-text text">
                    <no-ssr>
                      <slick
                        ref="slick"
                        :options="slickOptions">
                        <div class="item" v-for="(image, index) of [...article.attachments, article.cover]" :key="index">
                          <img class="article-img" :src="image.url" :alt="article.name">
                        </div>
                      </slick>
                    </no-ssr>
                    <div class="ckeditor-description" v-html="article.desc"></div>
                    <div id="myDiv" class="ckeditor-description" v-html="article.content"></div>
                  </div>
                  <div class="blog-card-info style-1 no-bdr">
                    <div class="date">{{article.createdAt | dateFormat}}</div>
                  </div>
                </div>
              </div>
              <div class>
                <div class="author-box blog-user m-b60">
                  <div class="author-profile-info">
                    <div class="author-profile-pic">
                      <img src="images/testimonials/pic1.jpg" alt />
                    </div>
                    <div class="author-profile-content">
                      <h6>The Classic Studio</h6>
                      <p>Chúng tôi luôn cố gắng mang lại những điều tuyệt vời nhất, những trải nghiệm tốt nhất cho học sinh, sinh viên và những đối tượng khách hàng khác. Kỉ yếu chỉ chụp cùng nhau 1 lần trong đời, nên trải nghiệm ngày chụp là điều quan trọng nhất.</p>
                      <ul class="list-inline m-b0">
                        <li>
                          <a href="javascript:void(0)" class="btn-link">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" class="btn-link">
                            <i class="fa fa-pinterest-p"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" class="btn-link">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="btn-link">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="post-btn">
                  <div class="prev-post" v-if="relatedArticles[0]">
                    <img :src="relatedArticles[0].cover.url" :alt="relatedArticles[0].name" />
                    <h6 class="title">
                      <nuxt-link :to="relatedArticles[0].link">{{relatedArticles[0].name}}</nuxt-link>
                      <span class="post-date">{{relatedArticles[0].createdAt.toDate() | dateFormat}}</span>
                    </h6>
                  </div>
                  <div class="next-post" v-if="relatedArticles[1]">
                    <h6 class="title">
                      <nuxt-link :to="relatedArticles[1].link">{{relatedArticles[1].name}}</nuxt-link>
                      <span class="post-date">{{relatedArticles[1].createdAt.toDate() | dateFormat}}</span>
                    </h6>
                    <img :src="relatedArticles[1].cover.url" :alt="relatedArticles[1].name" />
                  </div>
                </div>
              </div>
            </div>
            <CommonSidebar/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { APIService } from '@/helpers/services/api.service'
import CommonSidebar from '@/common-layouts/sidebar.vue'
import Carousel from '@/components/modules/Carousel1.vue'

export default {
  name: 'ArticlesDetail',
  components: {
    CommonSidebar,
    Carousel
  },
  head () {
    return {
      title: `${this.article.name} -`,
      meta: [
        { name: 'description', content: `${this.article.desc.replace(/(<([^>]+)>)/ig,"").slice(0, 197)}...` },
        { name: 'og:description', content: `${this.article.desc.replace(/(<([^>]+)>)/ig,"").slice(0, 197)}...` },
        { hid: 'og:image', name: 'og:image', content: this.article.cover.url },
        { name: 'og:image:url', content: this.article.cover.url },
      ]
    }
  },
  async asyncData ({ app, params }) {
    const routeId = params.id.split('-').slice(-1)[0]
    const articleRef = await app.$fireStore.collection('articles').doc(routeId).get()
    const article = app.$common.convertDocumentRecord(articleRef)
    article.createdAt = article.createdAt.toDate()
    return { article, routeId }
  },
  data () {
    return {
      relatedArticles: [],
      slickOptions: {
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 1000,
        // responsive: [
        //   {
        //     breakpoint: 767,
        //     settings: {
        //       slidesToShow: 1,
        //       centerPadding: '60px',
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 1,
        //       centerPadding: '20px',
        //     }
        //   }
        // ]
      },
    }
  },
  mounted () {
    this.getSuggestArticles()
  },
  computed: {
    slugs() {
      return this.$store.state.slugs
    }
  },
  methods: {
    async getSuggestArticles() {
      const articlesRef = await this.$fireStore.collection('articles')
        .where('kind', '==', this.article.kind)
        .limit(3).get()
      this.relatedArticles = this.$common.convertCollectionRecord(articlesRef)
        .filter(x => x.id !== this.article.id)
        .map(x => ({
          ...x,
          link: x.link ? x.link : `/bai-viet/${this.slugs[x.kind]}/${this.$options.filters.convertVie(x.name, x.id)}`
        }))
    }
  }
}
</script>
<style scoped>
.article-img {
  height: 400px;
  padding: 0 2px;
}
</style>
