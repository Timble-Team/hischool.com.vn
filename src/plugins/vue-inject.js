import Vue from 'vue'
import * as common from '@/helpers/services/common.js'

Vue.prototype.$common = common

export default ({app}) => {
  app.$common = common
}
