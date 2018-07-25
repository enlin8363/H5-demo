/*
  * 全局路由配置文件
  * @Author Lin
  */
import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = r => require.ensure([], () => r(require('@/assets/pages/home/HelloWorld')), 'helloWorld')
const PrdDetail = r => require.ensure([], () => r(require('@/assets/pages/prd-detail/prd-detail')), 'prdDetail')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        isBack: false,
        keepAlive: true,
        title: 'HelloWorld Home'
      }
    },
    {
      path: '/prdDetail',
      name: 'prdDetail',
      component: PrdDetail,
      meta: {
        title: '产品详情页'
      }
    }
  ],
  // 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach(function (to, from, next) {
  next()
})
router.afterEach(function (to, from, next) {
  // 动态设置页面Title
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
