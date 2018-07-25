/*
  * 全局路由配置文件
  * @Author Lin
  */
import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = r => require.ensure([], () => r(require('@/assets/pages/home/HelloWorld')), 'helloWorld')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

router.beforeEach(function (to, from, next) {

})
router.afterEach(function (to, from, next) {

})

export default router
