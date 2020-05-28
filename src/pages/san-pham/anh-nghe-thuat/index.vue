<template>
  <div class="portfolio-pictures">
    <section class="cp_price-section">
      <div class="container">
        <div class="cp-heading-holder text-center col-lg-12">
          <div class="align-center">
            <h2 class="title-price">Sản Phẩm Ảnh Nghệ Thuật</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
            <div class="row" v-if="albums.length > 0">
              <div class="col-lg-6" v-for="(item, index) of albums" :key="index">
                <CoverArticle :article="item" :instance="'albums'"/>
              </div>
            </div>
          </div>
          <CommonSidebar/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import CoverArticle from '@/components/modules/CoverArticle3.vue'
import CommonSidebar from '@/common-layouts/sidebar.vue'

export default {
  data() {
    return {
      albums: []
    }
  },
  components: {
    CoverArticle,
    CommonSidebar
  },
  created() {
    // setTimeout(() => {
    //   $('.grid').isotope({
    //     itemSelector: '.grid-item',
    //     layoutMode: 'fitRows'
    //   })
    // }, 5000)
    this.getAlbums()
  },
  methods: {
    async getAlbums() {
      const albumsRef = await this.$fireStore.collection('albums').where('kind', '==', '1').get()
      this.albums = this.$common.convertCollectionRecord(albumsRef).sort((a,b) => (+a.order - +b.order)).map(x => ({
        ...x,
        link: x.link ? x.link : `/san-pham/anh-nghe-thuat/${this.$options.filters.convertVie(x.name, x.id)}`
      }))
    }
  }
}
</script>
