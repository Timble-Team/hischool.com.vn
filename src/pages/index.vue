<template>
  <div class="home">
    <div class="page-content bg-white">
      <carousel :images="images"/>
      <h2 class="text-center">Tiêu Điểm</h2>
      <category :categories="categories"/>
      <div class="content-block">
        <div class="section-full bg-white content-inner-4">
          <div class="container">
            <h2 class="text-center">Số liệu</h2>
            <div class="row static-number">
              <div class="text-center col-md-3 col-6">
                <h2>~ <animated-number :value="statistic.classes" :formatValue="formatToPrice"  :duration="3000"/></h2>
                <p>Lớp tin tưởng</p>
              </div>
              <div class="text-center col-md-3 col-6">
                <h2>~ <animated-number :value="statistic.costumes" :formatValue="formatToPrice"  :duration="3000"/></h2>
                <p>Loại trang phục</p>
              </div>
              <div class="text-center col-md-3 col-6">
                <h2>~ <animated-number :value="statistic.members" :formatValue="formatToPrice"  :duration="3000"/></h2>
                <p>Thành viên</p>
              </div>
              <div class="text-center col-md-3 col-6">
                <h2>~ <animated-number :value="statistic.experience" :formatValue="formatToPrice"  :duration="3000"/></h2>
                <p>Năm kinh nghiệm</p>
              </div>
            </div>
            <div class="row" v-if="hotArticles.length === 4">
              <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
                <div class="row sp10">
                  <div class="col-lg-6 m-b30 triangle">
                    <div class="blog-card post-grid">
                      <div class="blog-card-media">
                        <img :src="hotArticles[0].images[0].name.url | takeImage" alt />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex">
                    <div class="blog-card center text-center bg-dark m-b30">
                      <div class="blog-card-info blog-card-custom text-white">
                        <h4 class="title">
                          <router-link :to="{name: 'articlesDetail', params: {id: hotArticles[0].id}}">{{hotArticles[0].title}}</router-link>
                        </h4>
                        <p>{{hotArticles[0].description}}</p>
                        <div class>
                          <SharedBtn/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sep-bottom">
                  <div class="row">
                    <div class="col-lg-4" v-for="art of hotArticles.slice(1,4)" :key="art.title">
                      <div class="blog-card post-grid grid-style m-b30 small-triangle">
                        <div class="blog-card-media" :style="{backgroundImage: `url(https://manage.hischool.com.vn/${art.images[0].name.url})`}">
                        </div>
                        <div class="blog-card-info">
                          <div class="title-sm">
                            <a href="javascript:void(0);">Beauty</a>
                          </div>
                          <h5 class="font-20">
                            <router-link :to="{name: 'articlesDetail', params: {id: art.id}}">{{art.title}}</router-link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="section-head text-center">
                  <div class="title-sm">
                    <a href="javascript:void(0);">Lifestyle</a>
                  </div>
                  <h2 class="title-head">
                    <a href="post-with-small-side-image.html">Full Combo Chụp - Quay <br> Trang Phục - Phụ Kiện - Xe Di Chuyển</a>
                  </h2>
                </div>
                <h6>Chỉ cần book chụp là sẽ có ưu đãi <b>KHÔNG GIỚI HẠN</b>:</h6>
                <ul>
                  <li>Không giới hạn số lượng ảnh chụp</li>
                  <li>Không giới hạn địa điểm chụp</li>
                  <li>Không giới hạn ảnh photoshop</li>
                  <li>Giao và bảo hành đầy đủ ảnh chụp + gốc bằng hệ thống thông minh</li>
                </ul>
                <div class="loadmore-content">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="blog-card full-design">
                        <div class="blog-card-media">
                          <img src="../assets/images/banner/about-2.jpg" alt />
                        </div>
                        <div class="blog-card-info style-1">
                          <div class="date">25 January, 2019</div>
                          <div class>
                            <a href="" class="btn-link readmore">
                              <i class="la la-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row" id="masonry">
                    <div class="col-lg-12 col-md-12 col-sm-12 card-container">
                      <div class="blog-card post-grid">
                        <div class="blog-card-media">
                          <img class="max-img" src="../assets/images/banner/main-8.jpg" alt />
                        </div>
                        <div class="blog-card-info">
                          <div class="title-sm">
                            <a href="javascript:void(0);">beauty</a>
                          </div>
                          <h4 class="title">
                            <router-link :to="{path: 'posing'}">Làm đẹp cùng Classic</router-link>
                          </h4>
                          <p>Để bắt đầu 1 ngày chụp kỉ yếu thật sự chỉnh chu, các nàng cũng như các chàng có thể lướt qua list bài tổng hợp về cách trang điểm, pose dáng tại đây. Hãy nghiên cứu thật kỹ, để cùng chúng tớ tạo nên bộ hình đẹp nhất nhé!</p>
                        </div>
                        <div class="load-more-btn text-center">
                          <router-link
                            :to="{path: 'posing'}"
                            class="btn outline outline-2 black radius-xl"
                          >Load More</router-link>
                        </div>
                      </div>
                      <hr>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 card-container">
                      <div class="blog-card post-grid">
                        <div class="blog-card-media">
                          <img class="max-img" src="../assets/images/banner/main-7.jpg" alt />
                        </div>
                        <div class="blog-card-info">
                          <div class="title-sm">
                            <a href="javascript:void(0);">beauty</a>
                          </div>
                          <h4 class="title">
                            <a href="">Trang trí ngoại cảnh</a>
                          </h4>
                          <p>The Classic luôn hướng đến sự chỉnh chu trong từng khâu chuẩn bị, và "trang trí" là một trong những khâu không thể thiếu, nếu bạn muốn bộ ảnh của lớp mình độc nhất vô nhị! Các bạn có thể tham khảo và cùng nhau làm hoặc thuê chúng tớ hỗ trợ!</p>
                        </div>
                        <div class="load-more-btn text-center">
                          <a
                            href=""
                            class="btn outline outline-2 black radius-xl"
                          >Load More</a>
                        </div>
                      </div>
                      <hr>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 card-container">
                      <div class="blog-card post-grid">
                        <div class="blog-card-media">
                          <img class="max-img" src="../assets/images/banner/main-9.jpg" alt />
                        </div>
                        <div class="blog-card-info">
                          <div class="title-sm">
                            <a href="javascript:void(0);">beauty</a>
                          </div>
                          <h4 class="title">
                            <a href="">Seri "Friend Forever"</a>
                          </h4>
                          <p>Ảnh kỷ yếu là những gì người ta ghi lại, để lưu giữ những kỉ niệm với bạn bè trong những tháng năm cùng nhau học tập. Những bộ ảnh đó đều có ý nghĩa rất lớn đối với những ai đã và đang là học sinh, sinh viên. Những buổi học dưới mái trường thân yêu đã và đang lặng lẽ dần trôi nhanh theo thời gian. Rồi mùa hè cũng tới, mùa tốt nghiệp, mùa của những ngày tháng chia tay, để lại sự tiếc nuối của những người bạn sớm nắng chiều mưa hàng ngày cắp sách tới trường và của những người bạn thân yêu nay phải rời xa giảng đường thầy cô. Để lưu lại khoảnh khắc đó, chúng tớ lưu lại đây những bộ ảnh kỉ yếu đầy màu sắc và tiếng cười cùng những thông điệp tình bạn!</p>
                        </div>
                        <div class="load-more-btn text-center">
                          <a
                            href=""
                            class="btn outline outline-2 black radius-xl"
                          >Load More</a>
                        </div>
                      </div>
                      <hr>
                    </div>
                  </div>
                </div>
              </div>
              <Sidebar/>
            </div>
            <CoverArticleList :coverData="coverArticles"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/modules/Carousel1.vue'
import Category from '@/components/modules/Category1.vue'
import SharedBtn from '@/components/partials/SharedBtn.vue'
import Sidebar from '@/common-layouts/sidebar.vue'
import CoverArticleList from '@/components/modules/CoverArticleList.vue'
import AnimatedNumber from 'animated-number-vue'
import { APIService } from '@/helpers/services/api.service'
var api = new APIService()

export default {
  name: 'Home',
  data () {
    return {
      statistic: {
        classes: 0,
        costumes: 0,
        members: 0,
        experience: 0
      },
      hotArticles: [],
      images: [
        require('../assets/images/banner/pic1.jpg'),
        require('../assets/images/banner/pic2.jpg'),
        require('../assets/images/banner/pic3.jpg')
      ],
      coverArticles: [
        {
          image: require('../assets/images/category/pic5.jpg'),
          title: 'Kỉ yếu Đà Nẵng',
          nameRoute: 'a',
          paramsRoute: {}
        },
        {
          image: require('../assets/images/category/pic5.jpg'),
          title: 'Kỉ yếu Huế',
          nameRoute: 'a',
          paramsRoute: {}
        },
        {
          image: require('../assets/images/category/pic5.jpg'),
          title: 'Kỉ yếu Sài Gòn',
          nameRoute: 'a',
          paramsRoute: {}
        },
        {
          image: require('../assets/images/category/pic5.jpg'),
          title: 'Kỉ yếu Hà Nội',
          nameRoute: 'a',
          paramsRoute: {}
        }
      ],
      categories: [
        {
          image: require('../assets/images/banner/pic1.jpg'),
          title: 'KHO TRANG PHỤC KHỦNG',
          subTitle: 'BEAUTY',
          path: '/price/clothes'
        },
        {
          image: require('../assets/images/banner/pic1.jpg'),
          title: 'COMBO CHỤP SIÊU CHẤT',
          subTitle: 'PHOTOGRAPHY',
          path: 'price?title=Combo&type=2'
        },
        {
          image: require('../assets/images/banner/pic1.jpg'),
          title: 'QUÀ TẶNG SIÊU NHIỀU',
          subTitle: 'BONUS'
        }
      ]
    }
  },
  created () {
   this.random1()
    api.forkJoin([
      api.get(['api', 'index_article'], { kind: 0 }), // Costumes
      api.get(['api', 'index_article'], { kind: 1 }), // Posing
      api.get(['api', 'index_article'], { kind: 2 }) // Ideas
    ]).then(res => {
      const idea = Math.floor(Math.random() * res[2].length)
      this.hotArticles.push(res[2][idea])
      res[2].splice(idea, idea + 1)
      this.hotArticles.push(res[2][Math.floor(Math.random() * (res[2].length - 1))])
      this.hotArticles.push(res[0][Math.floor(Math.random() * res[0].length)])
      this.hotArticles.push(res[1][Math.floor(Math.random() * res[1].length)])
    })
  },
  mounted () {
    this.statistic = {
      classes: 1000,
      costumes: 30,
      members: 20,
      experience: 5
    }
  },
  methods: {
    formatToPrice (value) {
      return `<span>${value.toFixed(0)}</span>`
    },
    async random1() {
      const ref = this.$fireStore.collection('users')
      console.log(ref)
    }
  },
  components: {
    Carousel,
    AnimatedNumber,
    Category,
    SharedBtn,
    Sidebar,
    CoverArticleList
  }
}
</script>
<style lang="scss" scoped>
.triangle {
  .blog-card  {
    height: 100%;
    .blog-card-media {
      height: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
.small-triangle {
  .blog-card-media {
    padding-bottom: 100%;
    background-size: cover;
    background-position: center;
  }
}
.static-number {
  h2 {
    margin-bottom: 0;
  }
}
.blog-card-custom {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}
.max-img {
  width: 100%;
}
</style>
