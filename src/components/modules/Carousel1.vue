<template>
  <div class="main-slide">
    <div class="post-slide-show no-radius m-b0">
      <div class="post-slide1 owl-carousel owl-btn-center-lr">
        <div class="item" v-for="(image, index) of images" :key="index">
          <div class="blog-card">
            <div class="blog-card-media">
              <img :src="image" :alt="alt">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: ['images', 'alt'],
  mounted () {
    $('.post-slide1').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 15,
      center: true,
      nav: true,
      autoplaySpeed: 1000,
      navSpeed: 1000,
      paginationSpeed: 1000,
      slideSpeed: 1000,
      dots: false,
      navText: ['<i class="la la-long-arrow-left"></i>', '<i class="la la-long-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          stagePadding: 15
        },
        480: {
          items: 1,
          stagePadding: 15
        },
        991: {
          items: 1
        },
        1000: {
          items: 1.5
        }
      }
    })
  }
}
</script>
