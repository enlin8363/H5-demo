import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/assets/pages/home/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
