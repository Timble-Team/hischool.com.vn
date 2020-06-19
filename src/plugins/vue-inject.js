import Vue from 'vue'
import * as common from '@/helpers/services/common.js'
import { APIService } from '@/helpers/services/api.service'

var api = new APIService()


Vue.prototype.$common = common
Vue.prototype.$api = api

export default ({app}) => {
  app.$common = common
  app.$api = api
}
