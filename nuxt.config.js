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
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  },
  head: {
    title: ' Avatar Studio - Event Photography & TVC Films',
    description: 'Avatar Media has proudly been a leading name of prestige and renown for conscientious media services provided for events in Vietnam.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'Avatar' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Open+Sans:wght@400;700&display=swap' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/ce16520130.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' }
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
    { src: '@/plugins/slick-slide', ssr: false },
    '@/helpers/services/firebase.js',
  ],
  /*
  ** Global CSS
  */
  css: [
    'slick-carousel/slick/slick.css',
    'plyr/dist/plyr.css',
    'animate.css/animate.min.css',
    '@/assets/styling/styles.scss'
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
    'nuxt-polyfill'
  ],
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
