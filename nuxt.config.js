require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  srcDir: 'src',
  mode: 'universal',
  buildDir: 'functions/.nuxt',
  /*
  ** Headers of the page
  */
  polyfill: {
    features: [
      {
        require: 'url-polyfill' // NPM package or require path of file
      },
      /*
          Feature with detect:
          Detection is better because the polyfill will not be
          loaded, parsed and executed if it's not necessary.
      */
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window,
      },
      /*
          Feature with detect & install:
          Some polyfills require a installation step
          Hence you could supply a install function which accepts the require result
      */
      {
        require: 'smoothscroll-polyfill',
        // Detection found in source: https://github.com/iamdustan/smoothscroll/blob/master/src/smoothscroll.js
        detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,
        // Optional install function called client side after the package is required:
        install: (smoothscroll) => smoothscroll.polyfill()
      }
    ]
  },
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    vendor: ['wowjs']
  },
  env: {
    // apiKey: process.env.apiKey,
    // authDomain: process.env.authDomain,
    // databaseURL: process.env.databaseURL,
    // projectId: process.env.projectId,
    // storageBucket: process.env.storageBucket,
    // messagingSenderId: process.env.messagingSenderId,
    // appId: process.env.appId,
    // measurementId: process.env.measurementId
  },
  head: {
    titleTemplate: '%s Kỉ yếu Hischool Đà Nẵng',
    description: 'Hischool là đơn vị bao trọn gói combo chụp ảnh tại Đà Nẵng - Quảng Nam - Huế - các tỉnh miền Trung. Đầy đủ các dịch vụ từ chụp, quay, cho thuê trang phục, phụ kiện, decor thiết kế.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'Kỷ yếu trọn gói Hischool' },
      { hid: 'description', name: 'description', content: 'Chuyên chụp - quay - trang phục kỷ yếu tại Đà Nẵng - Huế - Quảng Nam - Hội An - Quảng Trị - Quảng Ngãi' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Kỷ yếu trọn gói Hischool' },
      { hid: 'og:description', name: 'og:description', content: 'Hischool là đơn vị bao trọn gói combo chụp ảnh tại Đà Nẵng - Quảng Nam - Huế - các tỉnh miền Trung. Đầy đủ các dịch vụ từ chụp, quay, cho thuê trang phục, phụ kiện, decor thiết kế.' },
      { hid: 'og:image', name: 'og:image', content: '/main.jpg' },
      { hid: 'og:image:alt', name: 'og:image:alt', content: 'Kỷ yếu trọn gói Hischool' },
      { hid: 'og:type', name: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icnon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inconsolata:400,700|Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i|Maven+Pro:400,500,700,900|Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/ce16520130.js', defer: true  },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      // { src: 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v7.0&appId=884618848377974&autoLogAppEvents=1', crossorigin: 'anonymous', defer: true, async: true  },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/common-layouts/loading.vue',
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/middleware/filter',
    '@/plugins/vue-plyr',
    '@/plugins/vue-inject.js',
    '@/plugins/cool-light-box',
    { src: '@/plugins/slick-slide', ssr: false },
    { src: '@/plugins/owl-carousel.js', ssr: false },
    { src: '@/plugins/fb-sdk.js', ssr: false },
    // { src: '@/plugins/isotope.js', ssr: false},
  ],
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'slick-carousel/slick/slick.css',
    'plyr/dist/plyr.css',
    'animate.css/animate.min.css',
    '@/assets/css/plugins.css',
    '@/assets/css/style.css',
    '@/assets/css/templete.css',
    '@/assets/css/skin/skin-1.css',
    '@/assets/css/style.scss'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-polyfill',
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId
    },
    services: {
      firestore: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000, // Default
          minimumFetchIntervalMillis: 43200000 // Default
        },
        defaultConfig: {
          welcome_message: "Welcome"
        }
      },
      messaging: {
        createServiceWorker: true
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    transpile: [],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}


// import 'bootstrap'
