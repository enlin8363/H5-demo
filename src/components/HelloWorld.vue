<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="inctrest">Essential Links</h2>
    <div>{{count}}</div>
    <div>{{count1}}</div>
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
