<template>
  <div class="top-category">
    <div class="container-fluid">
      <div class="row">
        <div v-for="cate of categories" :key="cate.title" class="col-sm-4 m-b30">
          <div class="category-box overlay center large overlay-medium">
            <div class="category-media">
              <img :src="cate.image">
            </div>
            <div class="category-info">
              <div class="category-style"><a href="javascript:void(0);">{{cate.subTitle}}</a></div>
              <h1><router-link :to="{path: cate.path}">{{cate.title}}</router-link></h1>
              <router-link class="category-title" :to="{path: cate.path}"><i class="la la-arrow-right"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['categories'],
  mounted () {
  }
}
</script>
