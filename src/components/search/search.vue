<template>
  <div class="search">
    <input type="text" placeholder="请输入关键字">
  </div>
</template>

<script>
export default {
  name: 'prdCard',
  data () {
    return {
    }
  },
  props: ['msg'],
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
    line-height: .37rem;
    border-bottom: .01rem solid #ddd;
    text-align: center;
    background-color: #fff;
  }
  .search input{
    width: 85%;
    height: .3rem;
    border: none;
    border-radius: .1rem;
    background-color: #f2f2f2;
    /* -webkit-appearance: none; */
    /* vertical-align: middle; */
    padding-left: .4rem;
  }
</style>
