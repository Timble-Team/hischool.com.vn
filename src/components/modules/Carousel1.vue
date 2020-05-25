<template>
  <div class="main-slide">
    <div class="post-slide-show no-radius m-b0">
      <no-ssr>
        <slick
          ref="slick"
          :options="slickOptions">
          <div class="item" v-for="(image, index) of images" :key="index">
            <div class="blog-card">
              <div class="blog-card-media">
                <img :src="image" :alt="alt">
              </div>
            </div>
          </div>
        </slick>
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: ['images', 'alt'],
  data() {
    return {
      slickOptions: {
        infinite: true,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              centerPadding: '60px',
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerPadding: '20px',
            }
          }
        ]
      },
    }
  }
}
</script>
<style scoped>
.blog-card-media {
  padding: 0 2px;
}
</style>
