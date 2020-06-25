<template>
  <div class="table-responsive table-shop-cart" v-if="clothes">
    <table class="table check-tbl">
      <thead class="text-left text-uppercase">
        <tr>
          <th></th>
          <th>Trang phục</th>
          <th>Phụ kiện</th>
          <th>Giá</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cloth, index) of clothes" :key="`cloth-${index}`">
          <td class="product-item-img"><nuxt-link target="_blank" :to="cloth.link"><img :src="cloth.cover[0].url" alt="cho thuê trang phục kỷ yếu"></nuxt-link></td>
          <td><nuxt-link target="_blank" :to="cloth.link">{{cloth.name}}</nuxt-link></td>
          <td class="article-accessories">
            <span v-for="(item, index) of cloth.accessories" :key="index">{{item.name}}</span>
          </td>
          <td class="product-item-price" v-if="plan === 'basic'">{{cloth.priceBasicAgency | vnd}}</td>
          <td class="product-item-price" v-if="plan === 'standard'">{{cloth.priceStandardAgency | vnd}}</td>
          <td class="product-item-price" v-if="plan === 'premium'">{{cloth.pricePremiumAgency | vnd}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ['plan'],
  data() {
    return {
      loading: true
    }
  },
  asyncComputed: {
    async clothes () {
      const element = this.$store.getters.getClothes
      if (element && element.length > 0) {
        return element
      } else {
        const clothesRef = await this.$fireStore.collection('clothes').get()
        let element = this.$common.convertCollectionRecord(clothesRef).sort((a,b) => (+a.order - +b.order))
        element = element.map(x => ({
          ...x,
          link: x.link ? x.link : `/bang-gia/trang-phuc/${this.$options.filters.convertVie(x.name, x.id)}`
        }))
        this.$store.commit('setClothes', element)
        return element
      }
    }
  }
}
</script>
<style scoped>
.article-accessories span {
  padding: 10px;
  margin: 0 5px;
  border-radius: 3px;
  background-color: #f1f1f1;
  font-size: 12px;
}
</style>
