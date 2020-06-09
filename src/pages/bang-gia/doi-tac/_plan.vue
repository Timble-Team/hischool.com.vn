<template>
  <div class="container">
    <h3 class="title-price text-center" v-if="$route.params.plan === 'basic'">Bảng giá - Basic Agency</h3>
    <h3 class="title-price text-center" v-if="$route.params.plan === 'standard'">Bảng giá - Standard Agency</h3>
    <h3 class="title-price text-center" v-if="$route.params.plan === 'premium'">Bảng giá - Premium Agency</h3>
    <div class="text-center">
      <span class="ti-star"></span>
      <span class="ti-star" v-if="$route.params.plan === 'premium' || $route.params.plan === 'standard'"></span>
      <span class="ti-star" v-if="$route.params.plan === 'premium'"></span><br>
      <small>Đối tác có 3 cấp độ Basic, Standard và Premium. Hãy là khách hàng lâu năm của chúng tôi để nhận được nhiều ưu đãi hơn</small>
    </div>
    <div class="pt-5" style="width: 80%; margin: 0 auto;">
      <TablePrice :plan="$route.params.plan"/>
    </div>
  </div>
</template>
<script>
import TablePrice from '@/components/partials/TablePrice.vue'

export default {
  validate ({ params }) {
    return /(basic)|(standard)|(premium)/.test(params.plan)
  },
  head () {
    return {
      title: `Bảng giá đối tác -`
    }
  },
  components: {
    TablePrice
  }
}
</script>
