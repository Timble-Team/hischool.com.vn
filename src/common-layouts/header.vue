<template>
  <header class="site-header mo-left header style-1">
    <div class="sticky-header main-bar-wraper navbar-expand-lg">
      <div class="main-bar clearfix">
        <div class="container">
          <div class="header-content-bx no-bdr">
            <div class="logo-header">
              <a href="/">
                <img src="../assets/images/logo.png" alt />
              </a>
            </div>
            <button
              class="navbar-toggler justify-content-end"
              type="button"
              @click="openSidebar()">
              <div class="navicon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <transition name="fade">
              <div v-show="sidebarParams" class="header-nav navbar-collapse justify-content-center">
                <div class="logo-header">
                  <a href="/">
                    <img src="../assets/images/logo-white.png" alt style="width: 200px" />
                  </a>
                </div>
                <ul class="nav navbar-nav">
                  <li @click="closeSidebar(item.path)" :class="{'has-mega-menu post-slider life-style': item.type === 1}" v-for="item of headerData" :key="item.name">
                    <router-link tag="a" :to="item.path || ''">
                      {{item.name}}<i class="fa fa-chevron-down"></i>
                    </router-link>
                    <ul v-if="item.children && item.type === 0" class="sub-menu">
                      <li @click="closeSidebar(child.path)" v-for="child of item.children" :key="child.name">
                        <router-link :to="child.path">
                          {{child.name}}
                        </router-link>
                      </li>
                    </ul>
                    <div v-else-if="item.children && item.type === 1" class="mega-menu">
                      <div class="life-style-bx">
                        <div class="life-style-tabs">
                          <ul>
                            <li @click="closeSidebar(child.path)" v-for="child of item.children" :key="child.name">
                              <router-link :to="child.path">
                                {{child.name}}
                              </router-link>
                            </li>
                          </ul>
                        </div>
                        <div class="life-style-post text-center">
                          <div v-for="(child, index) of item.children" :key="`a${child.name}${index}`" :class="{'show': index === 0}" class="life-style-post-bx">
                            <div class="header-blog-carousel owl-carousel owl-btn-center-lr">
                              <div class="item" v-for="(article, index) of child.items" :key="`b${index}`">
                                <div class="blog-post blog-sm">
                                  <div class="dlab-post-media">
                                    <a href="post-standart.html">
                                      <img src="../assets/images/category/pic8.jpg" alt />
                                    </a>
                                  </div>
                                  <div class="dlab-post-info">
                                    <div class="dlab-post-title">
                                      <h5 class="post-title">
                                        <a href="post-standart.html">Cobalt Leather</a>
                                      </h5>
                                    </div>
                                    <div class="date">25 January, 2019</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="social-menu">
                  <ul>
                    <li>
                      <a href="https://fb.com/classic.yearbook">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
            <div class="extra-nav">
              <div class="extra-cell">
                <ul>
                  <li>
                    <a href="https://fb.com/classic.yearbook" class="site-button-link">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="site-button-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { HeaderData } from './header.data'

export default {
  name: 'Header',
  props: ['news'],
  data () {
    return {
      headerData: null,
      sidebarParams: false
    }
  },
  created () {
    const data = new HeaderData(this.news)
    this.headerData = data.config()
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  },
  methods: {
    myEventHandler (event) {
      if (event.target.innerWidth <= 991) {
        this.changeHeader()
      }
    },
    closeSidebar (val) {
      if (val) {
        this.sidebarParams = false
      }
    },
    changeHeader () {
      $('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function (e) {
        if ($(this).parent().hasClass('open')) {
          $(this).parent().removeClass('open')
        } else {
          $(this).parent().parent().find('li').removeClass('open')
          $(this).parent().addClass('open')
        }
      })
    },
    openSidebar () {
      this.sidebarParams = !this.sidebarParams
    }
  },
  mounted () {
    $('.header-blog-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1,
          margin: 10,
          center: true,
          stagePadding: 30
        },
        480: {
          items: 1,
          margin: 10,
          center: true,
          stagePadding: 30
        },
        1024: {
          items: 3
        },
        1200: {
          items: 4
        },
        1400: {
          items: 4
        }
      }
    })
    if ($(window).width() <= 991) {
      this.changeHeader()
    }
    window.addEventListener('resize', this.myEventHandler)
    $('body').click((e) => {
      if (this.sidebarParams) {
        e.preventDefault()
        this.sidebarParams = false
      }
    })
    $('.navbar-toggler, .header-nav').click(function (event) {
      event.stopPropagation()
    })
  }
}
</script>
<style lang="scss" scoped>
.logo-header {
  height: 100%;
  a {
    height: 100%;
  }
}
.header-nav {
  left: 0 !important;
}
.fade-enter-active, .fade-leave-active {
  transition: transform .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-500px);
}
.navbar-toggler {
  padding: 10px;
  .navicon {
    width: 25px;
    height: 20px;
  }
}
</style>
