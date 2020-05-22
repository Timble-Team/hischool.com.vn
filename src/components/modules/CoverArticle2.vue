<template>
  <div class="blog-card post-grid">
    <div class="blog-card-media">
      <img :src="cover.image" alt />
    </div>
    <div class="blog-card-info">
      <div class="title-sm">
        <a href="javascript:void(0);">beauty</a>
      </div>
      <h4 class="title">
        <router-link :to="{name: cover.nameRoute, params: cover.paramsRoute}">{{cover.title}}</router-link>
      </h4>
      <p>{{cover.description}}</p>
      <ul class="social-link-round">
        <li class="link-ic">
          <a href="javascript:void(0);" class="btn-link share">
            <i class="la la-share-alt"></i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="btn-link">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="btn-link">
            <i class="fa fa-pinterest-p"></i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="btn-link">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="btn-link">
            <i class="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CoverArticle2',
  props: ['cover']
}
</script>
