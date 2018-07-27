/*
  * 全局路由配置文件
  * @Author Lin
  */
import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/assets/pages/home/home')), 'home')
const PrdDetail = r => require.ensure([], () => r(require('@/assets/pages/prd-detail/prd-detail')), 'prdDetail')
const error = null

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        // 为true时返回不刷新页面
        isBack: false,
        keepAlive: true,
        title: 'HomePage'
      }
    },
    {
      path: '/prdDetail',
      name: 'prdDetail',
      component: PrdDetail,
      meta: {
        title: '产品详情页'
      }
    }, {// 测试
      path: '/404',
      name: '404',
      component: error,
      meta: {
        title: '404'
      }
    },
    // 协议
    {
      path: '*',
      redirect: '/404'
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
