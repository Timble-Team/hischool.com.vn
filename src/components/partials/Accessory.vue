<template>
  <article class="accessory blog-card post-grid">
    <div class="blog-card-media">
      <figure class="blog-card-media-box">
        <img :src="accessory.cover.url" :alt="accessory.name" />
      </figure>
    </div>
    <div class="blog-card-info">
      <h6 class="text-capitalize title">{{accessory.name}}</h6>
      <p class="price-blog"><span>{{accessory.price}}K</span></p>
    </div>
  </article>
</template>
<script>
export default {
  name: 'Accessory',
  props: {
    accessory: Object,
  }
}
</script>
<style lang="scss" scoped>
.accessory {
  .blog-card-media {
    height: 0;
    padding-bottom: 66.67%;
    position: relative;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
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
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h6 {
      text-align: left;
      margin-bottom: 0;
      padding-right: 10px;
      &:after {
        content: none;
      }
    }
    .price-blog {
      font-size: 20px;
      font-weight: bold;
      span {
        color: grey;
      }
    }
  }
}
</style>
