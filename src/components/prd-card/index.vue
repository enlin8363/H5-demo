<template>
  <dl>
    <dd>
      <img src="@/assets/image/logo.png" alt="">
    </dd>
    <dt>PrdCard Components</dt>
  </dl>
</template>

<script>
export default {
  name: 'prdCard',
  data () {
    return {
      msg: 'Vue.js App'
    }
  },
  methods: {
    inctrest () {
      this.$store.commit('increstCount')
    }
  }
}
</script>
<style scoped>

</style>
