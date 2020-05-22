<template>
  <div class="picture-dialog">
    <div class="picture-box">
      <a class="close-btn" @click="closeDialog"><i class="la la-close" aria-hidden="true"></i></a>
      <a v-show="hd" class="hd-label"> <img style="width: 40px" src="../../assets/images/content/hd-symbol.svg"></a>
      <img class="js-image" v-show="currentImg" :src="currentImg" @load="stopLoading($event)" alt="album-yearbook">
      <div class="js-loading" v-show="loading" id="loading-circle"></div>
      <div class="meta-hd text-center">
        <div v-show="hd">
          <p>Tính năng HD đang được bật.</p>
          <p>Lưu ý: Điều này sẽ đem đến chất lượng ảnh rõ nét nhất, nhưng tốc độ load sẽ chậm.</p>
        </div>
        <div v-show="!hd">
          <p>Chế độ HD chưa được bật. Bấm vào <i class="la la-image"></i> để bật</p>
        </div>
      </div>
      <div class="meta">
        <span>{{name}}</span>
      </div>
      <div class="actions">
        <a class="action-pic heart" disabled><i class="la la-heart" aria-hidden="true"></i></a>
        <a class="action-pic film" @click="turnonHD"><i class="la la-image" :class="{'active': hd}" aria-hidden="true"></i></a>
        <a class="action-pic facebook" target="_blank" :href="pictureId | facebookImage" download><i class="la la-facebook" aria-hidden="true"></i></a>
        <a class="action-pic download" :href="pictureId | fullGoogleImage" download><i class="la la-download" aria-hidden="true"></i></a>
      </div>
      <div class="controls pagination-bx clearfix text-center">
        <ul class="pagination">
          <li class="prev pagi pagi-1"><a @click="prevPic"><i class="fa fa-angle-left"></i></a></li>
          <li class="next pagi pagi-2"><a @click="nextPic"><i class="fa fa-angle-right"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PictureDialog',
  props: ['pictureId', 'name', 'pos'],
  data () {
    return {
      hd: false,
      currentImg: null,
      loading: false
    }
  },
  beforeMount () {
    if (this.pictureId) {
      this.loadHDImage(this.pictureId)
    }
  },
  mounted () {
    $('.picture-dialog').click((e) => {
      e.preventDefault()
      this.closeDialog()
    })
    $('.js-image, .js-loading, .actions, .pagi, .hd-label, .close-btn').click(function (event) {
      event.stopPropagation()
    })
  },
  methods: {
    closeDialog () {
      this.$emit('closeDialog', this.pos)
    },
    nextPic () {
      this.$emit('nextPicture', this.pos)
    },
    prevPic () {
      this.$emit('prevPicture', this.pos)
    },
    turnonHD () {
      this.hd = !this.hd
      this.loadHDImage(this.pictureId)
    },
    loadHDImage (picId) {
      this.loading = true
      this.currentImg = null
      const filterFunc = this.hd ? 'hdImage' : 'mediumGoogleImage'
      setTimeout(() => {
        this.currentImg = this.$options.filters[filterFunc](picId)
      }, 300)
    },
    stopLoading (event) {
      this.loading = false
    }
  },
  watch: {
    pictureId: function (value) {
      if (value) {
        this.loadHDImage(value)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .close-btn, .hd-label {
    color: white;
    font-size: 30px;
    position: fixed;
    top: 0;
    right: 0;
    padding: 20px;
    &:hover {
      color: grey;
    }
  }
  .hd-label {
    top: 30px;
  }
  .picture-dialog {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    .picture-box {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      @media only screen and (max-width: 414px) {
        width: 100%;
        height: 70%;
        .action-pic {
          padding: 15px;
        }
      }
      @media only screen and (min-width: 415px) and (max-width: 500px) {
        width: 415px;
        height: 500px;
        .action-pic {
          padding: 20px;
        }
      }
      @media only screen and (min-width: 501px) and (max-width: 600px) {
        width: 500px;
        height: 600px;
        .action-pic {
          padding: 10px 20px;
        }
      }
      @media only screen and (min-width: 601px) and (max-width: 767px) {
        width: 80%;
        height: 80%;
        .action-pic {
          padding: 10px 20px;
        }
      }
      @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 80%;
        height: 80%;
        .action-pic {
          padding: 10px 20px;
        }
      }
      @media only screen and (min-width: 1025px) {
        width: 80%;
        height: 80%;
        .action-pic {
          padding: 10px 20px;
        }
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .meta, .meta-hd {
        position: absolute;
        bottom: 5px;
        color: white;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.7);
        border-radius: 10px;
        span {
          padding: 20px;
        }
      }
      .meta-hd {
        min-width: 350px;
        top: -45px;
        bottom: unset;
        font-size: 10px;
        padding: 10px;
        p {
          line-height: 1;
          margin-bottom: 0;
        }
      }
    }
  }
  .actions {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0,0,0,0.6);
    border-radius: 5px;
    font-size: 25px;
    .action-pic {
      color: white;
      &:hover {
        color: grey;
        -webkit-transform: size(1.2);
        -moz-transform: size(1.2);
        -o-transform: size(1.2);
        transform: size(1.2);
      }
    }
  }
  .pagi {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    opacity: 0.7;
  }
  .pagi-1 {
    left: 0;
  }
  .pagi-2 {
    right: 0;
  }
  .active {
    color: #7CFC00;
  }
</style>
