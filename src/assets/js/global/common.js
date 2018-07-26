import $ from 'zepto-webpack'

let common = {
  post: function (url, data, callBack, type) {
    $.ajax({
      type: type || 'POST',
      url: url,
      data: data,
      timeout: 10000,
      success: function (res, status, xhr) {
        // console.log(res)
        callBack && callBack(res)
      },
      complete: function (res) {
        // callBack && callBack(res)
      },
      beforeSend: function (xhr, settings) {

      },
      error: function (xhr, errorType, error) {
        console.log('error: ' + error.msg)
      }
    })
  }
}
export default common
