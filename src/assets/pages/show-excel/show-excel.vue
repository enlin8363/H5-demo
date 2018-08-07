<template>
  <div class="hello">
    <iframe :src="url" frameborder="1" width="100%" height="500px"></iframe>
  </div>
</template>

<script>
export default {
  name: 'showExcel',
  data () {
    return {
      url: 'https://view.officeapps.live.com/op/view.aspx?src=d:/工作表1.xlsx'
    }
  }
}
</script>

<style scoped>

</style>
