<template>
  <div class="product-gallery on-show-slider">
    <div id="product1" class="owl-carousel owl-theme owl-none">
      <div class="item" v-for="(imgData, index) of images" :key="`a${index}`">
        <div class="mfp-gallery">
          <div class="dlab-box">
            <div class="dlab-thum-bx">
              <img :src="imgData.name.url | takeImage" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="product2" class="owl-carousel owl-theme owl-btn-center-lr owl-btn-1">
      <div class="item" v-for="(imgData, index) of images" :key="`b${index}`">
        <div class="mfp-gallery">
          <div class="dlab-box dlab-media">
            <img :src="imgData.name.url | takeImage" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel2',
  props: ['images', 'slidesPerPage'],
  data () {
    return {
      product1: null,
      product2: null
    }
  },
  mounted () {
    this.product1 = $('#product1')
    this.product2 = $('#product2')
    this.product1.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200
    }).on('changed.owl.carousel', this.syncPosition)
    this.product2.on('initialized.owl.carousel', () => {
      this.product2.find('.owl-item').eq(0).addClass('current')
    }).owlCarousel({
      items: this.slidesPerPage,
      dots: false,
      nav: false,
      margin: 5,
      smartSpeed: 200,
      slideSpeed: 500,
      navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
      slideBy: this.slidesPerPage,
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
