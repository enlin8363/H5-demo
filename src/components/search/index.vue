<template>
  <div class="search">{{ msg }}</div>
</template>

<script>
export default {
  name: 'prdCard',
  data () {
    return {
      msg: 'Vue.js search'
    }
  },
  // props: {
  //   msg：{
  //     type:
  //   }
  // },
  methods: {
    inctrest () {
      this.$store.commit('increstCount')
    }
  }
}
</script>
<style scoped>
  .search{
    height: .4rem;
    line-height: .4rem;
    border: .01rem solid #ddd;
  }
</style>
