/*
  * 全局公用数据配置文件
  * @Author Lin
*/

import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const state = {
  count: 0
}
const store = new Vuex.Store({
  state,
  getters: { // 相当于对 state 数据的过滤
    filCount (state) {
      return state.count + 2
    }
  },
  mutations: {
    increstCount (state) {
      state.count++
    }
  },
  actions: {
    increstCount (context) {
      context.commit('increstCount')
    }
  }
})
export default store
