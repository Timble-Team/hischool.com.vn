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
