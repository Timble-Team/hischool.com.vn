import { format } from 'date-fns'

import Vue from 'vue'

const filterPlugin = {
  install() {
    Vue.filter('moneyConvert', value => {
      return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    })
    Vue.filter('takeImage', function (value) {
      return process.env.VUE_APP_API + value
    })
    Vue.filter('vnd', function (value) {
      return `${value},000 VND`
    })
    Vue.filter('dateFormat', function (value) {
      return format(new Date(value), 'dd MMMM yyyy')
    })
    Vue.filter('smallGoogleImage', function (value) {
      if (screen.width < 415) {
        return `https://drive.google.com/thumbnail?id=${value}&sz=w128-h192`
      } else {
        return `https://drive.google.com/thumbnail?id=${value}&sz=w314-h472`
      }
    })
    Vue.filter('mediumGoogleImage', function (value) {
      return `https://drive.google.com/thumbnail?id=${value}&sz=w950-h630`
    })
    Vue.filter('facebookImage', function (value) {
      return `https://drive.google.com/thumbnail?id=${value}&sz=w2048-h1365`
    })
    Vue.filter('hdImage', function (value) {
      return `https://drive.google.com/thumbnail?id=${value}&sz=w4096-h2730`
    })
    Vue.filter('fullGoogleImage', function (value) {
      return `https://drive.google.com/uc?export=download&id=${value}`
    })
  },
};

Vue.use(filterPlugin)

export default filterPlugin
