<template>
  <div class="page-content bg-white">
    <div class="content-block">
      <div class="section-full content-inner bg-white" v-if="mainCloth">
        <h3 class="title-price text-center">{{mainCloth.name}}</h3>
        <no-ssr>
          <slick
            ref="slick"
            :options="slickOptions">
            <div class="item" v-for="(image, index) of mainCloth.images" :key="index">
              <img class="cloth-img" :src="image.url" :alt="mainCloth.name">
            </div>
          </slick>
        </no-ssr>
        <div class="container" >
          <div class="row pro-sc-space">
            <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
              <form method="post" class="cart sticky-top">
                <div class="dlab-post-title">
                  <h4 class="post-title">
                    <a href="#">{{mainCloth.name}}</a>
                  </h4>
                  <h4 class="pro-price">{{mainCloth.priceOver20 | vnd}}</h4><span>(Giá áp dụng cho thuê trên 20 bộ)</span>
                </div>
                <div class="dlab-divider bg-gray tb20"></div>
              </form>
              <ul class="brand-des">
                <small
                  class="pro-des-cont">
                  <i class="fa fa-star"></i> Bạn vẫn có thể thuê riêng từng trang phục nhỏ theo giá tương ứng (nếu có).
                </small><br><br>
                <p>Tổng hợp phụ kiện trong combo và giá thuê lẻ phụ kiện:</p>
                <li v-for="(imgData, index) of mainCloth.accessories" :key="`c${index}`">
                  - <span class="text-capitalize">{{imgData.name}}:</span>{{imgData.priceHire | vnd}}
                </li>
                <div class="dlab-divider bg-gray tb20"></div>
              </ul>
              <h5>Mô tả:</h5>
              <div class="ckeditor-description" v-html="mainCloth.desc">
              </div>
              <div class="ckeditor-description" v-html="mainCloth.content">
              </div>
              <hr>
              <div class="dlab-post-title">
                <h5 class="post-title">
                  Trang phục có thể bạn quan tâm
                </h5>
                <div class="row">
                  <div class="col-lg-6" v-for="(item, index) of suggestClothes" :key="`a${index}`">
                    <CoverArticle :article="item" :shortcut="true"/>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { APIService } from '@/helpers/services/api.service'
import CoverArticle from '@/components/modules/CoverArticle2.vue'
import Sidebar from '@/common-layouts/sidebar.vue'

export default {
  name: 'PriceClothes',
  components: {
    Sidebar,
    CoverArticle
  },
  head () {
    return {
      title: `${this.mainCloth.name} -`,
      meta: [
        { name: 'description', content: `${this.mainCloth.desc.replace(/(<([^>]+)>)/ig,"").slice(0, 197)}...` },
        { name: 'og:description', content: `${this.mainCloth.desc.replace(/(<([^>]+)>)/ig,"").slice(0, 197)}...` },
        { name: 'og:image', content: this.mainCloth.cover[1].url },
        { name: 'og:image:url', content: this.mainCloth.cover[1].url },
      ]
    }
  },
  data () {
    return {
      mainCloth: null,
      routeId: null,

      slickOptions: {
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 3,
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
      // relatedCloth: [],
      suggestClothes: [],
      // syncedSecondary: true,
      // product1: null,
      // product2: null
    }
  },
  computed: {
    clothes () {
      return this.$store.state.clothes
    }
  },
  async asyncData ({ app, params }) {
    const routeId = params.slug.split('-').slice(-1)[0]
    const clothRef = await app.$fireStore.collection('clothes').doc(routeId).get()
    const mainCloth = app.$common.convertDocumentRecord(clothRef)
    return { mainCloth, routeId }
  },
  created () {
    this.getSuggestClothes()
    // this.mainCloth = this.$route.meta.product.find(x => x.parent_id === null)
    // this.relatedCloth = this.$route.meta.product.filter(x => x.parent_id !== null)
    // this.suggestCloth = this.$route.meta.suggestProduct.map(x => ({
    //   image: x.images[0] ? this.$options.filters.takeImage(x.images[0].name.url) : null,
    //   title: x.name,
    //   nameRoute: 'priceClothesDetail',
    //   paramsRoute: { id: x.id }
    // })).slice(0, 4)
  },
  // mounted () {
  //   this.product1 = $('#product1')
  //   this.product2 = $('#product2')
  //   var slidesPerPage = 3

  //   this.product1.owlCarousel({
  //     items: 1,
  //     slideSpeed: 2000,
  //     nav: true,
  //     autoplay: false,
  //     dots: false,
  //     loop: true,
  //     responsiveRefreshRate: 200,
  //     navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
  //   }).on('changed.owl.carousel', this.syncPosition)

  //   this.product2.on('initialized.owl.carousel', () => {
  //     this.product2.find('.owl-item').eq(0).addClass('current')
  //   }).owlCarousel({
  //     items: slidesPerPage,
  //     dots: false,
  //     nav: false,
  //     margin: 10,
  //     smartSpeed: 200,
  //     slideSpeed: 500,
  //     slideBy: slidesPerPage,
  //     responsiveRefreshRate: 100
  //   }).on('changed.owl.carousel', this.syncPosition2)

  //   this.product2.on('click', '.owl-item', function (e) {
  //     e.preventDefault()
  //     var number = $(this).index()
  //     $('#product1').data('owl.carousel').to(number, 300, true)
  //   })
  // },
  methods: {
    async getSuggestClothes() {
      const allClothesWithoutCurrentId = this.clothes.filter(x => x.id !== this.routeId)
      const shuffleClothes = this.$common.shuffle(allClothesWithoutCurrentId)
      this.suggestClothes = shuffleClothes.slice(0, 4).map(x => ({
        ...x,
        link: x.link? x.link : `/bang-gia/trang-phuc/${this.$options.filters.convertVie(x.name, x.id)}`
      }))
    },
  //   syncPosition (el) {
  //     var count = el.item.count - 1
  //     var current = Math.round(el.item.index - (el.item.count / 2) - 0.5)
  //     if (current < 0) {
  //       current = count
  //     }
  //     if (current > count) {
  //       current = 0
  //     }
  //     this.product2
  //       .find('.owl-item')
  //       .removeClass('current')
  //       .eq(current)
  //       .addClass('current')
  //     var onscreen = this.product2.find('.owl-item.active').length - 1
  //     var start = this.product2.find('.owl-item.active').first().index()
  //     var end = this.product2.find('.owl-item.active').last().index()
  //     if (current > end) {
  //       this.product2.data('owl.carousel').to(current, 100, true)
  //     }
  //     if (current < start) {
  //       this.product2.data('owl.carousel').to(current - onscreen, 100, true)
  //     }
  //   },
  //   syncPosition2 (el) {
  //     if (this.syncedSecondary) {
  //       var number = el.item.index
  //       this.product1.data('owl.carousel').to(number, 100, true)
  //     }
  //   }
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
.cloth-img {
  height: 400px;
  padding: 0 2px;
}
</style>
