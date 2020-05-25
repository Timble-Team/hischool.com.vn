<template>
  <div class="category-box m-b20">
    <nuxt-link :to="cover.link">
      <div class="category-media">
        <img :src="cover.cover[1].url" alt="">
      </div>
      <a href="javascript:void(0);" class="category-title btn-style"><h6>{{cover.name}}</h6></a>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CoverArticle',
  props: ['cover']
}
</script>
