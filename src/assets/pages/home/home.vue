<template>
  <div class="hello">
    <div class="head-bar">
      <web-search :msg="msg"></web-search>
    </div>
    <div class="main-container">
      <ul class="clear">
        <!-- <li v-for="(item, index) in dataList" :key="index">
          <router-link :to="{path: item.path}">{{item.name}}</router-link>
        </li> -->
        <router-link tag="li" :to="{path: item.path}" v-for="(item, index) in dataList" :key="index">{{item.name}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      dataList: [],
      msg: 'Vue.js App'
    }
  },
  mounted () {
    this.dataList = [
      {
        path: '/prdList',
        name: '产品列表页'
      },
      {
        path: '/prdDetail',
        name: '产品详情页'
      },
      {
        path: '/gtTest',
        name: '极客测试页'
      },
      {
        path: '/showExcel',
        name: '展示Excel页'
      },
      {
        path: '/camera',
        name: '调用手机摄像头'
      }
    ]
  },
  methods: {
    inctrest () {
      this.$store.commit('increstCount')
    }
  },
  beforeRouteEnter: (to, from, next) => {
    if (from.name && from.name === 'prdDetail') { // 返回的
      // 返回详情页返回不刷新页面
      to.meta.isBack = true
    } else {
      to.meta.isBack = false
    }
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  /* margin: 0 10px; */
}
a {
  color: #42b983;
  text-decoration: none;
}
.clear{
  clear: both;
}
.head-bar{
  width: 100%;
  /* position: sticky; */
  position: fixed;
  /* position: absolute; */
  top: 0;
  left: 0;
  z-index: 10;
  -webkit-overflow-scrolling : touch;
}
.main-container{
  /* width: 3.75rem; */
  /* position: absolute;
  top: 0;
  left: 0; */
  padding: .4rem 0 0 .05rem;
  /* overflow-y : auto; */
}
.main-container ul li{
  border-bottom: 1px solid #ddd;
  height: .45rem;
  background: #fff;
}
.main-container ul li:active{
  background-color: #ddd;
}
</style>
