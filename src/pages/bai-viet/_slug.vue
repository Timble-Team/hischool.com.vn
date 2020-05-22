<template>
  <div class="page-content bg-white">
    <div class="content-block">
      <div class="section-full content-inner bg-white">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
              <div class="section-head text-center">
                <div class="title-sm">Fashion</div>
                <h2 class="title-head">{{article.title}}</h2>
              </div>
              <div class="blog-post blog-single blog-post-style-2 sidebar">
                <div class="dlab-post-info">
                  <div class="dlab-post-text text">
                    <Carousel :slidesPerPage="4" :images="article.images"/>
                    <div id="myDiv"></div>
                  </div>
                  <div class="blog-card-info style-1 no-bdr">
                    <div class="date">{{article.created_at | dateFormat}}</div>
                    <div class>
                      <ul class="social-link-round">
                        <li class="link-ic">
                          <a href="javascript:void(0)" class="btn-link share">
                            <i class="la la-share-alt"></i>
                          </a>
                        </li>
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
                          <a href="javascript:void(0)" class="btn-link">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
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
                  <div class="prev-post">
                    <img :src="relatedArticles[0].images[0].name.url | takeImage" alt />
                    <h6 class="title">
                      <router-link :to="{name: $route.name, params: {id: relatedArticles[0].id}}">{{relatedArticles[0].title}}</router-link>
                      <span class="post-date">{{relatedArticles[0].created_at | dateFormat}}</span>
                    </h6>
                  </div>
                  <div class="next-post">
                    <h6 class="title">
                      <router-link :to="{name: $route.name, params: {id: relatedArticles[1].id}}">{{relatedArticles[1].title}}</router-link>
                      <span class="post-date">{{relatedArticles[1].created_at | dateFormat}}</span>
                    </h6>
                    <img :src="relatedArticles[1].images[0].name.url | takeImage" alt />
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
import Carousel from '@/components/modules/Carousel2.vue'

export default {
  name: 'ArticlesDetail',
  components: {
    CommonSidebar,
    Carousel
  },
  data () {
    return {
      sync1: null,
      sync2: null,
      syncedSecondary: true,
      article: null,
      relatedArticles: []
    }
  },
  mounted () {
    if (this.article.content) {
      $('#myDiv').html(this.article.content)
      $('#myDiv p:has(img) img').each((index, obj) => {
        let srcChange = this.$options.filters.takeImage($(obj).attr('src'))
        $(obj).attr('src', srcChange)
        $('p:has(img)').css({ textAlign: 'center' })
      })
    }
  },
  async beforeRouteEnter (to, form, next) {
    var api = new APIService()
    to.meta['article'] = await api.get(['api', 'show_detail', to.params.id])
    to.meta['relatedArticle'] = await api.get(['api', 'show_related_detail'], { kind: to.meta.kind || to.meta['article'].kind })
    next()
  },
  async beforeRouteUpdate (to, form, next) {
    var api = new APIService()
    to.meta['article'] = await api.get(['api', 'show_detail', to.params.id])
    to.meta['relatedArticle'] = await api.get(['api', 'show_related_detail'], { kind: to.meta.kind || to.meta['article'].kind })
    next()
  },
  created () {
    this.article = this.$route.meta.article
    this.relatedArticles = [this.$route.meta.relatedArticle.shift(), this.$route.meta.relatedArticle.pop()]
  }
}
</script>
