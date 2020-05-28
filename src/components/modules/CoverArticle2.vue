<template>
  <article class="blog-card post-grid">
    <div class="blog-card-media">
      <nuxt-link tag="figure" class="blog-card-media-box" :to="article.link" append>
        <img style="margin-right: 2px" :src="article.cover[0].url" :alt="article.name" />
        <img :src="article.cover[1].url" :alt="article.name" />
      </nuxt-link>
    </div>
    <div class="blog-card-info">
      <nuxt-link v-if="!shortcut" :to="article.link" append>
        <h4 class="title">
        {{article.name}}
        </h4>
      </nuxt-link>
      <nuxt-link v-else :to="article.link" append>
        <h6 class="title">
        {{article.name}}
        </h6>
      </nuxt-link>
      <div class="row" v-if="!shortcut">
        <div class="col-9">
          <div class="article-desc">
            <div class="ckeditor-description" v-html="article.desc"></div>
            <nuxt-link :to="article.link" append>
              <span class="see-more"> Xem thêm </span>
            </nuxt-link>
          </div>
        </div>
        <div class="col-3">
          <p class="price-blog"><span>{{article.priceUnder20}}K</span></p>
        </div>
      </div>
      <p class="article-accessories" v-if="!shortcut">
        Phụ kiện: <span v-for="(item, index) of article.accessories" :key="index">{{item.name}}</span>
      </p>
    </div>
  </article>
</template>
<script>
export default {
  name: 'CoverArticle2',
  props: {
    article: Object,
    shortcut: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.blog-card-media {
  height: 0;
  padding-bottom: 50%;
  position: relative;
  overflow: hidden;
  img {
    height: 100%;
  }
  &-box {
    cursor: pointer;
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  }
}
.blog-card-info {
  p, .article-desc {
    text-align: left;
  }
  .price-blog {
    border: 2px solid #1d1d1d;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 23px;
      font-weight: bold;
    }
  }
  .article-desc .see-more {
    display: none;
  }
  .article-accessories {
    padding-bottom: 70px;
    span {
      padding: 10px;
      margin: 0 5px;
      border-radius: 3px;
      background-color: #f1f1f1;
    }
  }
}
</style>
