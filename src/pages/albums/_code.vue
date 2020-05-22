<template>
  <div class="container">
    <PictureDialog v-show="currentPictureId" :name="currentPictureName" :pictureId="currentPictureId" :pos="currentPicturePos" @closeDialog="closeDialog" @nextPicture="nextPicture" @prevPicture="prevPicture"/>
    <div v-if="contract" class="text-center">
      <h2>{{contract.group}} - {{contract.school}}</h2>
      <p>{{contract.town}}</p>
      <p v-show="contract.school_year">Niên Khóa: {{contract.school_year}}</p>
      <div v-if="raws != null">
        <p>Link ảnh gốc </p>
        <span v-for="(item, index) of raws.drive_link.split(',')" :key="`a-${index}`"><a target="_blank" :href="item" >{{item}}</a><br></span><br>
      </div>
    </div>
    <h6 class="text-center">PHOTOSHOP ALBUM</h6>
    <p class="text-center" v-if="!contract">Không tìm thấy kết quả với mã code tương ứng. Xin hãy thử lại!</p>
    <Pagination :pages="pages" :currentPage="currentPage" @changePage="changePageEvent($event)"/>
    <div v-if="picturesHandler.length > 0">
      <div v-show="currentPage === indexPage" v-for="(picHolder, indexPage) of picturesHandler" :key="`e-${indexPage}`">
        <p style="text-align: center">{{picturesHandler[indexPage].length}} tấm trong thư mục này</p>
        <p style="opacity: 0">{{pictures[indexPage].pictureId.length}} tấm trong thư mục này</p>
        <div class="isotope items" v-masonry transition-duration="0.3s" item-selector=".item">
          <div v-masonry-tile class="item" :style="{'z-index': ind === 0 ? 10 : 0}" v-for="(item, ind) of picturesHandler[indexPage]" :key="item.name">
            <div class="item-box">
              <div class="placeholder" @click="openPictureDialog(item.pictureId, ind, item.name)">
                <div class="placeholder-box"><i class="fa fa-search-plus" aria-hidden="true"></i></div>
                <img class="product-photo" :alt="item.name" :src="item.pictureId | mediumGoogleImage" @load="continueLoadImage(indexPage, $event)" @error="continueLoadImage(indexPage, $event)">
              </div>
              <ul class="brand-des">
                <li style="padding: 0 5px">
                  <span>Tên ảnh:</span>{{item.name}}
                </li>
                <li class="action-item">
                  <button class="btn" disabled><i class="la la-heart"></i></button>
                  <a class="btn" target="_blank" :href="item.pictureId | facebookImage" download><i class="la la-facebook"></i></a>
                  <a class="btn" :href="item.pictureId | fullGoogleImage" download><i class="la la-download"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination :pages="pages" :currentPage="currentPage" @changePage="changePageEvent($event)"/>
  </div>
</template>
<script>
import Pagination from '@/components/partials/Pagination.vue'
import PictureDialog from '@/components/modules/PictureDialog.vue'
import { APIService } from '@/helpers/services/api.service'

var api = new APIService()

export default {
  components: {
    Pagination,
    PictureDialog
  },
  data () {
    return {
      contract: null,
      pages: 0,
      currentPage: 0,
      raws: null,
      pictures: [],
      picturesCache: [],
      picturesHandler: [],
      imagesPerTime: 10,
      countPerTime: 0,
      currentPictureId: null,
      currentPicturePos: null,
      currentPictureName: null
    }
  },
  created () {
    this.currentPage = +this.$route.query.page || 0
    if (this.$route.query.pictureId && this.$route.query.pos && this.$route.query.page >= 0) {
      this.currentPictureId = this.$route.query.pictureId || null
    }
    api.get(['api', 'viewers', this.$route.params.id]).then(res => {
      this.contract = res.contract
      this.raws = res.meta.raw
      this.pictures = res.meta.pic.map(x => {
        x.pictureId = x.pictureId.split(',')
        x.name = x.name.split(',')
        this.picturesCache.push({
          pictureId: x.pictureId.slice(),
          name: x.name.slice()
        })
        return x
      })
      if (this.currentPictureId) {
        this.currentPicturePos = +this.$route.query.pos
        this.currentPicturePName = this.pictures[this.currentPage].name[this.currentPicturePos]
      }
      this.pages = res.meta.count
      res.meta.pic.forEach((x, index) => {
        this.picturesHandler[index] = []
      })
      this.loadImagePerTime()
    }).catch((e) => {
    })
  },
  methods: {
    changePageEvent (event) {
      this.currentPage = event - 1
      this.countPerTime = 0
      this.loadImagePerTime()
      window.history.pushState(null, '', `?page=${this.currentPage}`)
      setTimeout(() => this.$redrawVueMasonry(), 1000)
    },
    closeDialog () {
      this.currentPictureId = null
      window.history.pushState(null, '', `?page=${this.currentPage}`)
    },
    openPictureDialog (id, pos, name) {
      this.currentPictureId = id
      this.currentPicturePos = pos
      this.currentPictureName = name
      window.history.pushState(null, '', `?page=${this.currentPage}&pictureId=${this.currentPictureId}&pos=${this.currentPicturePos}`)
    },
    loadImagePerTime () {
      const arr = []
      this.pictures[this.currentPage].pictureId.splice(0, this.imagesPerTime).forEach((x, index) => {
        const obj = {
          pictureId: x,
          name: this.pictures[this.currentPage].name[index]
        }
        arr.push(obj)
      })
      this.pictures[this.currentPage].name.splice(0, this.imagesPerTime)
      this.picturesHandler[this.currentPage].push(...arr)
    },
    continueLoadImage (page, e) {
      if (page === this.currentPage) {
        ++this.countPerTime
      }
      if (this.countPerTime === this.imagesPerTime) {
        this.countPerTime = 0
        this.loadImagePerTime()
      }
    },
    nextPicture (pos) {
      const numberPos = pos === this.picturesCache[this.currentPage].pictureId.length - 1 ? 0 : pos + 1
      this.currentPictureId = this.picturesCache[this.currentPage].pictureId[numberPos]
      this.currentPictureName = this.picturesCache[this.currentPage].name[numberPos]
      this.currentPicturePos = numberPos
      window.history.pushState(null, '', `?page=${this.currentPage}&pictureId=${this.currentPictureId}&pos=${this.currentPicturePos}`)
    },
    prevPicture (pos) {
      const numberPos = pos === 0 ? this.picturesCache[this.currentPage].pictureId.length - 1 : pos - 1
      this.currentPictureId = this.picturesCache[this.currentPage].pictureId[numberPos]
      this.currentPictureName = this.picturesCache[this.currentPage].name[numberPos]
      this.currentPicturePos = numberPos
      window.history.pushState(null, '', `?page=${this.currentPage}&pictureId=${this.currentPictureId}&pos=${this.currentPicturePos}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  @media only screen and (max-width: 414px) {
    width: 50%;
    padding: 5px;
  }
  @media only screen and (min-width: 415px) and (max-width: 1024px) {
    width: 33.33%;
    padding: 5px;
  }
  @media only screen and (min-width: 1025px) {
    width: 25%;
    padding: 10px;
  }
}
.placeholder {
  width: 100%;
  min-height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../../assets/images/content/placeholder.png');
  position: relative;
  &:hover {
    .placeholder-box {
      opacity: 1;
    }
  }
  .placeholder-box {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    color: white;
    font-size: 20px;
    cursor: pointer;
    transition: all ease 0.5s;
  }
}
.brand-des {
  margin: 0;
}
.item-box {
  overflow: hidden;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.18);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.18);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.18);
}
.action-item {
  display: flex;
  .btn {
    width: calc(100%/3);
    background-color: white;
    border-top: 0.5px solid #f0f0f0;
    color: #404040;
    padding: 5px 0;
    font-size: 20px;
    &:hover {
      color: white;
      background-color: #404040;
    }
  }
  .btn {
    &:nth-child(1) {
      border-right: 0.5px solid #f0f0f0;
    }
    &:nth-child(2) {
      border-right: 0.5px solid #f0f0f0;
    }
  }
}
</style>
