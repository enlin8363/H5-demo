import $ from 'zepto-webpack'

let common = {
  post: function (url, data, successCB, failCB, type) {
    $.ajax({
      type: type || 'POST',
      url: url,
      data: data,
      timeout: 10000,
      success: function (res, status, xhr) {
        // console.log(res)
        successCB && successCB(res)
      },
      complete: function (res) {
        // callBack && callBack(res)
      },
      beforeSend: function (xhr, settings) {

      },
      error: function (xhr, errorType, error) {
        console.log('error: ' + error.msg)
        failCB && failCB(error)
      }
    })
  }
}
export default common
