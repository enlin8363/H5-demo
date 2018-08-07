<template>
  <div class="container">
    <!-- <div id="testCode" class=""></div> -->
    <img src="@/assets/image/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'showExcel',
  data () {
    return {
      url: 'https://view.officeapps.live.com/op/view.aspx?src=d:/工作表1.xlsx'
    }
  },
  methods: {
    testFn () {
      let self = this
      let phoneNom = '13677896988'
      if (!phoneNom) {
        // self.$message({
        //   type: 'error',
        //   message: '请输入用户名!'
        // })
      } else {
        let data = {
          token: '8e39c536c34f4a3db234e253e204de06'
        }
        this.common.post(`http://api.amez999.com/web/user/geet/code/${phoneNom}`, data, (res) => {
          // res = JSON.parse(res)
          if (res.code === '0') {
            // self.$refs.capt.innerHTML = ''
            let data = JSON.parse(res.data)
            let handler = function (captcha) {
              captcha.appendTo('#testCode')
              window.gt = captcha
              captcha.onSuccess(() => {
                self.result = captcha.getValidate()
              })
              captcha.onError((error) => {
                self.$message.error({
                  message: error
                })
                captcha.reset()
              })
            }
            window.initGeetest({
              gt: data.gt,
              https: true,
              challenge: data.challenge,
              new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
              offline: !data.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
              product: 'popup', // 产品形式，包括：float(点击汉字)，popup(滑动)
              width: '100%'
            }, handler)
          }
        })
      }
    }
  },
  mounted () {
    this.testFn()
  }
}
</script>

<style scoped>
  .container {
    width: 300px;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
  }
  #testCode{
    vertical-align: middle;
  }
</style>
