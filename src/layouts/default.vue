<template>
  <div>
    <LightBox
      :items="items"
      :index="indexCool"
      @close="closeCoolBox()">
    </LightBox>
    <div id="fb-root"></div>
    <app-header/>
    <nuxt />
    <app-footer/>
    <section class="app-controls">
      <a class="app-btn phone-btn" rel="nofollow" target="_blank" title="Hotline" href="tel:84773420210">
        <i class="fa fa-phone" aria-hidden="true"></i>
      </a>
      <a class="app-btn" target="_blank" href="https://www.messenger.com/t/classic.yearbook">
        <i class="fa fa-commenting-o" aria-hidden="true"></i>
      </a>
      <a class="app-btn scroll-top-btn" @click="scrollTop()">
        <i class="fa fa-angle-up" aria-hidden="true"></i>
      </a>
    </section>
  </div>
</template>
<script>
import AppHeader from '../common-layouts/header'
import AppFooter from '../common-layouts/footer'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  created() {
    this.getCategories()
    this.getClothes()
    this.getAccessories()
  },
  watch:{
    $route (to, from){
      // this.$store.commit('setSidebar', false)
    }
  },
  mounted() {
  },
  computed: {
    items() {
      return this.$store.state.lightboxItems
    },
    indexCool() {
      return this.$store.state.lightboxCurrentItem
    }
  },
  methods: {
    closeCoolBox () {
      this.$store.commit('setLightbox', {items: [], index: null})
    },
    scrollTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    },
    async getCategories() {
      const categoriesRef = await this.$fireStore.collection('categories').get()
      const categories = this.$common.convertCollectionRecord(categoriesRef)
      this.$store.commit('setCategories', categories)
    },
    async getClothes() {
      const clothesRef = await this.$fireStore.collection('clothes').get()
      let clothes = this.$common.convertCollectionRecord(clothesRef).sort((a,b) => (+a.order - +b.order))
      clothes = clothes.map(x => ({
        ...x,
        link: x.link ? x.link : `/bang-gia/trang-phuc/${this.$options.filters.convertVie(x.name, x.id)}`
      }))
      this.$store.commit('setClothes', clothes)
    },
    async getAccessories() {
      const accessoriesRef = await this.$fireStore.collection('accessories').get()
      let accessories = this.$common.convertCollectionRecord(accessoriesRef).sort((a,b) => (+a.order - +b.order))
      this.$store.commit('setAccessories', accessories)
    }
  }
}
</script>
<style lang="scss" scoped>
.app-controls {
  position: fixed;
  bottom: 5%;
  right: 2%;
  z-index: 999;
}
.app-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #7dc0d1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  i {
    font-size: 23px;
  }
}
.phone-btn {
  -webkit-animation: calltrap_opacity 3s infinite linear;
  -moz-animation: calltrap_opacity 3s infinite linear;
  -o-animation: calltrap_opacity 3s infinite linear;
  animation: calltrap_opacity 3s infinite linear;
  -webkit-animation: uptocallmini 1.5s 0s ease-out infinite;
  -moz-animation: uptocallmini 1.5s 0s ease-out infinite;
  -o-animation: uptocallmini 1.5s 0s ease-out infinite;
  animation: uptocallmini 1.5s 0s ease-out infinite;
}
@keyframes uptocallmini {
  0% {
    -webkit-box-shadow: 0 0 8px 6px rgba(201, 5, 5, 0), 0 0 0px 0px transparent, 0 0 0px 0px rgba(201, 5, 5, 0);
    box-shadow: 0 0 8px 6px rgba(201, 5, 5, 0), 0 0 0px 0px transparent, 0 0 0px 0px rgba(201, 5, 5, 0);
  }
  10% {
    -webkit-box-shadow: 0 0 8px 6px #7dc0d1, 0 0 12px 10px transparent, 0 0 12px 14px #7dc0d1;
    box-shadow: 0 0 8px 6px #7dc0d1, 0 0 12px 10px transparent, 0 0 12px 14px #7dc0d1;
  }
  100% {
    -webkit-box-shadow: 0 0 8px 6px rgba(201, 5, 5, 0), 0 0 0px 40px transparent, 0 0 0px 40px rgba(201, 5, 5, 0);
    box-shadow: 0 0 8px 6px rgba(201, 5, 5, 0), 0 0 0px 40px transparent, 0 0 0px 40px rgba(201, 5, 5, 0);
  }
}
.scroll-top-btn {
  margin-top: 30px;
}
</style>
