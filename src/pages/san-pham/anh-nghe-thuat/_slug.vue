<template>
 <div class="page-content bg-white" v-if="album">
    <div class="content-block">
      <div class="section-full content-inner bg-white">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
              <div class="section-head text-center">
                <div class="title-sm">Ảnh nghệ thuật</div>
                <h2 class="title-head">{{album.name}}</h2>
              </div>
              <div class="blog-post blog-single blog-post-style-2 sidebar">
                <div class="dlab-post-info">
                  <div class="dlab-post-text text">
                    <no-ssr>
                      <slick
                        ref="slick"
                        :options="slickOptions">
                        <div class="item" v-for="(image, index) of [album.cover, ...album.photos]" :key="index">
                          <img class="article-img" :src="image.url" :alt="album.name">
                        </div>
                      </slick>
                    </no-ssr>
                    <div id="myDiv" class="ckeditor-description" v-html="album.content"></div>
                  </div>
                  <div class="blog-card-info style-1 no-bdr">
                    <div class="date">{{album.createdAt.toDate() | dateFormat}}</div>
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
import CoverArticle from '@/components/modules/CoverArticle3.vue'
import CommonSidebar from '@/common-layouts/sidebar.vue'

export default {
  data() {
    return {
      album: null,
      routeId: null,
      slickOptions: {
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        // centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 2,
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
  components: {
    CoverArticle,
    CommonSidebar
  },
  mounted() {
    this.getAlbum()
  },
  created () {
    this.routeId = this.$route.params.slug.split('-').slice(-1)[0]
  },
  methods: {
    async getAlbum() {
      const albumRef = await this.$fireStore.collection('albums').doc(this.routeId).get()
      this.album = this.$common.convertDocumentRecord(albumRef)
    }
  }
}
</script>
<style>
.article-img {
  height: 200px;
  padding: 0 2px;
}
</style>
