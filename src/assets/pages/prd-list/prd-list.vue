<template>
  <div class="hello">
    <div class="head-bar">
      <web-search :msg="msg"></web-search>
    </div>
    <div class="main-container">
      <ul class="clear">
        <li v-for="(item, index) in dataList" :key="index">
          <router-link :to="{path: 'prdDetail'}"><webPrdCard :datas="item"></webPrdCard></router-link>
        </li>
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
    let url = 'http://api.amez999.com/mobile/user/news/plat/list?page=1&pageSize=10'
    // let url = 'https://www.baidu.com/s?wd=webpack'
    let data = {
      'token': '8e39c536c34f4a3db234e253e204de06',
      'page': 1,
      'pageSize': 10
    }
    this.common.post(url, data, (res) => {
      if (res.code === '0') {
        if (res.data) {
          this.dataList = res.data.content
        }
      }
    }, 'GET')
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
  display: inline-block;
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
  width: 3.75rem;
  position: absolute;
  top: 0;
  left: 0;
  padding: .4rem 0 0 .05rem;
  /* overflow-y : auto; */
}
.main-container ul li{
  float: left;
  width: 48.5%;
  margin: 0 .05rem .05rem 0;
  border: 1px solid #ddd;
  height: 2.2rem;
  background: #fff;
}
.main-container ul li:active{
  background-color: #ddd;
}
</style>
