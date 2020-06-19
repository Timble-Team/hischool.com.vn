import { format } from 'date-fns'

import Vue from 'vue'

const filterPlugin = {
  install() {
    Vue.filter('convertVie', (alias, id) => {
      var str = alias;
      str = str.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a")
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e")
      str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i")
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")
      str = str.replace(/đ/g,"d")
      str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")
      str = str.replace(/ + /g," ")
      str = str.trim().replace(/ /g, '-')
      return `${str}-${id}`;
    })
    Vue.filter('moneyConvert', value => {
      return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    })
    Vue.filter('takeImage', function (value) {
      return process.env.VUE_APP_API + value
    })
    Vue.filter('vnd', function (value) {
      return `${value},000 VND`
    })
    Vue.filter('dateFormat', function (value, formatType = 'dd MMMM yyyy') {
      return format(new Date(value), formatType)
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
