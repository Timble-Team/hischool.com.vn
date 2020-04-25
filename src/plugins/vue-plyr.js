import Vue from 'vue'
import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js'

// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
  plyr: {
    vimeo: {quality: '1080p'},
    fullscreen: { enabled: true, fallback: true, iosNative: true },
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']
    // quality: { default: 1080, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] },
  },
  emit: ['ended']
})
