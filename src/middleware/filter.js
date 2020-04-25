import { format } from 'date-fns'

import Vue from 'vue'

const filterPlugin = {
  install() {
    Vue.filter('dateTime', (value, format = 'dd MMMM yyyy') => {
      return format(value, format)
    })
  },
};

Vue.use(filterPlugin)

export default filterPlugin
