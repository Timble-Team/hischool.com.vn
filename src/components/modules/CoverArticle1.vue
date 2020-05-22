<template>
  <div class="category-box m-b20">
    <router-link :to="{name: cover.nameRoute, params: cover.paramsRoute}">
      <div class="category-media">
        <img :src="cover.image" alt="">
      </div>
      <div class="category-info type-1">
        <a href="javascript:void(0);" class="category-title btn-style">{{cover.title}}</a>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CoverArticle',
  props: ['cover']
}
</script>
