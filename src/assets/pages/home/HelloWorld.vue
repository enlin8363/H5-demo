<template>
  <div class="hello">
    <web-search :msg="msg"></web-search>
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
      console.log(res)
      this.dataList = res.data.content
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
.main-container{
  width: 3.75rem;
}
.main-container ul li{
  float: left;
  width: 48%;
  margin: 0 .05rem;
  border: 1px solid #ddd;
}
.main-container ul li:active{
  background-color: #ddd;
}
.main-container ul li img{
  /* float: left; */
  width: 100%;
  /* padding: 0 .05rem */
}
</style>
