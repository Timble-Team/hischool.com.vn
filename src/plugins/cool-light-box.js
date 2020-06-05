import Vue from 'vue'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

const LightBox = {
  install(Vue, options) {
    Vue.component('LightBox', CoolLightBox)
  }
}

Vue.use(LightBox)

export default LightBox
