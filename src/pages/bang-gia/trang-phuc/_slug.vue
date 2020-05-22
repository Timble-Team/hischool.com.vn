<template>
  <div class="page-content bg-white">
    <div class="content-block">
      <div class="section-full content-inner bg-white">
        <div class="container">
          <div class="row pro-sc-space">
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="product-gallery on-show-slider">
                <div id="product1" class="owl-carousel owl-theme owl-none">
                  <div class="item" v-for="(imgData, index) of mainCloth.images" :key="`a${index}`">
                    <div class="mfp-gallery">
                      <div class="dlab-box">
                        <div class="dlab-thum-bx">
                          <img :src="imgData.name.url | takeImage" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="product2" class="owl-carousel owl-theme owl-none">
                  <div class="item" v-for="(imgData, index) of mainCloth.images" :key="`b${index}`">
                    <div class="dlab-media">
                      <img :src="imgData.name.url | takeImage" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <form method="post" class="cart sticky-top">
                <div class="dlab-post-title">
                  <h2 class="post-title">
                    <a href="#">{{mainCloth.name}}</a>
                  </h2>
                  <h4 class="pro-price">{{mainCloth.hire | vnd}}</h4><span>(Giá áp dụng cho thuê trên 15 bộ)</span>
                </div>
                <div class="dlab-divider bg-gray tb20"></div>
                <ul class="brand-des" v-if="relatedCloth.length > 0">
                  <span>Combo bao gồm:</span>
                  <li v-for="(imgData, index) of relatedCloth" :key="`c${index}`">
                    - <span>{{imgData.name}}:</span>{{imgData.hire | vnd}}
                  </li>
                  <small
                    class="pro-des-cont">
                    <i class="fa fa-star"></i> Bạn vẫn có thể thuê riêng từng trang phục nhỏ theo giá tương ứng (nếu có).
                  </small>
                  <div class="dlab-divider bg-gray tb20"></div>
                </ul>
                <p
                  class="pro-des-cont">
                  {{mainCloth.description}}
                </p>
                <div class="dlab-divider bg-gray tb20"></div>
                <ul class="pro-share-link d-flex align-items-center">
                  <li>
                    <h6 class="m-b0">Share:</h6>
                  </li>
                  <li>
                    <a href="#" class="btn-link">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div class="dlab-post-title">
            <h4 class="post-title">
              Trang phục có thể bạn quan tâm
            </h4>
          </div>
          <CoverArticleList :coverData="suggestCloth"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { APIService } from '@/helpers/services/api.service'
import CoverArticleList from '@/components/modules/CoverArticleList.vue'

export default {
  name: 'PriceClothes',
  components: {
    CoverArticleList
  },
  data () {
    return {
      mainCloth: null,
      relatedCloth: [],
      suggestCloth: [],
      syncedSecondary: true,
      product1: null,
      product2: null
    }
  },
  async beforeRouteEnter (to, form, next) {
    var api = new APIService()
    to.meta['product'] = await api.get(['api', 'cloths', to.params.id])
    to.meta['suggestProduct'] = await api.get(['api', 'related_clothes', to.params.id])
    next()
  },
  async beforeRouteUpdate (to, form, next) {
    var api = new APIService()
    to.meta['product'] = await api.get(['api', 'cloths', to.params.id])
    to.meta['suggestProduct'] = await api.get(['api', 'related_clothes', to.params.id])
    next()
  },
  created () {
    this.mainCloth = this.$route.meta.product.find(x => x.parent_id === null)
    this.relatedCloth = this.$route.meta.product.filter(x => x.parent_id !== null)
    this.suggestCloth = this.$route.meta.suggestProduct.map(x => ({
      image: x.images[0] ? this.$options.filters.takeImage(x.images[0].name.url) : null,
      title: x.name,
      nameRoute: 'priceClothesDetail',
      paramsRoute: { id: x.id }
    })).slice(0, 4)
  },
  mounted () {
    this.product1 = $('#product1')
    this.product2 = $('#product2')
    var slidesPerPage = 3

    this.product1.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
    }).on('changed.owl.carousel', this.syncPosition)

    this.product2.on('initialized.owl.carousel', () => {
      this.product2.find('.owl-item').eq(0).addClass('current')
    }).owlCarousel({
      items: slidesPerPage,
      dots: false,
      nav: false,
      margin: 10,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage,
      responsiveRefreshRate: 100
    }).on('changed.owl.carousel', this.syncPosition2)

    this.product2.on('click', '.owl-item', function (e) {
      e.preventDefault()
      var number = $(this).index()
      $('#product1').data('owl.carousel').to(number, 300, true)
    })
  },
  methods: {
    syncPosition (el) {
      var count = el.item.count - 1
      var current = Math.round(el.item.index - (el.item.count / 2) - 0.5)
      if (current < 0) {
        current = count
      }
      if (current > count) {
        current = 0
      }
      this.product2
        .find('.owl-item')
        .removeClass('current')
        .eq(current)
        .addClass('current')
      var onscreen = this.product2.find('.owl-item.active').length - 1
      var start = this.product2.find('.owl-item.active').first().index()
      var end = this.product2.find('.owl-item.active').last().index()
      if (current > end) {
        this.product2.data('owl.carousel').to(current, 100, true)
      }
      if (current < start) {
        this.product2.data('owl.carousel').to(current - onscreen, 100, true)
      }
    },
    syncPosition2 (el) {
      if (this.syncedSecondary) {
        var number = el.item.index
        this.product1.data('owl.carousel').to(number, 100, true)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.dlab-thum-bx {
  height: 360px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
.dlab-media {
  height: 156px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
