<template>
  <div class="hello">
    <web-search :msg="msg"></web-search>
    <div class="main-container">
      something
      <ul class="clear">
        <li>
          <webPrdCard></webPrdCard>
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
      msg: 'Vue.js App'
    }
  },
  methods: {
    inctrest () {
      this.$store.commit('increstCount')
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    count1 () {
      return this.$store.getters.filCount
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
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
  padding: 0 .05rem
}
.main-container ul li img{
  /* float: left; */
  width: 100%;
  /* padding: 0 .05rem */
}
</style>
