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
              <img class="cloth-img" :src="image.url" :alt="mainCloth.name" @click="setLightbox(mainCloth.images, index)">
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
                  <div class="col-lg-6" v-for="(item, index) of clothes" :key="`a${index}`">
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
import CoverArticle from '@/components/modules/CoverArticle2.vue'
import Sidebar from '@/common-layouts/sidebar.vue'

export default {
  name: 'PriceCloth',
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
        { hid: 'og:image', name: 'og:image', content: this.mainCloth.cover[1].url },
        { name: 'og:image:url', content: this.mainCloth.cover[1].url },
      ]
    }
  },
  data () {
    return {
      slickOptions: {
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: false,
        // centerMode: true,
        slidesToShow: 1,
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
      // relatedCloth: [],
      suggestClothes: [],
    }
  },
  asyncComputed: {
    async clothes () {
      const element = this.$store.getters.getClothes
      console.log(element)
      if (element && element.length > 0) {
        const allClothesWithoutCurrentId = element.filter(x => x.id !== this.routeId)
        const shuffleClothes = this.$common.shuffle(allClothesWithoutCurrentId)
        return shuffleClothes.slice(0, 4)
      } else {
        const clothesRef = await this.$fireStore.collection('clothes').get()
        let element = this.$common.convertCollectionRecord(clothesRef).sort((a,b) => (+a.order - +b.order))
        element = element.map(x => ({
          ...x,
          link: x.link ? x.link : `/bang-gia/trang-phuc/${this.$options.filters.convertVie(x.name, x.id)}`
        }))
        this.$store.commit('setClothes', element)
        const allClothesWithoutCurrentId = element.filter(x => x.id !== this.routeId)
        const shuffleClothes = this.$common.shuffle(allClothesWithoutCurrentId)
        return shuffleClothes.slice(0, 4)
      }
    }
  },
  async asyncData ({ app, params }) {
    const routeId = params.slug.split('-').slice(-1)[0]
    const clothRef = await app.$fireStore.collection('clothes').doc(routeId).get()
    const mainCloth = app.$common.convertDocumentRecord(clothRef)
    return { mainCloth, routeId }
  },
  methods: {
    setLightbox(images, index) {
      const imagesMapping = images.map(x => ({src: x.url, title: this.mainCloth.name}))
      this.$store.commit('setLightbox', {items: imagesMapping, index})
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
.cloth-img {
  padding: 0 2px;
}
</style>
