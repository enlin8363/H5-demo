import Vue from 'vue'
import prdCard from './prd-card/' // 产品卡片
import search from './search/' // 产品卡片

let components = [
  {
    name: 'PrdCard',
    value: prdCard
  },
  {
    name: 'Search',
    value: search
  }
]

let installFun = () => {
  components.forEach((v, k) => {
    Vue.component('web' + v.name, v.value)
  })
}
export default {
  install: installFun,
  verson: '1.0'
}
