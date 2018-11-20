import Vue from 'vue'
// 设置cookie
Vue.prototype.setCookie = function (cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 60 * 1000))
  var expires = 'expires=' + d.toUTCString()
  if (window.top) {
    window.top.document.cookie = cname + '=' + cvalue + ';' + expires
  } else {
    document.cookie = cname + '=' + cvalue + ';' + expires
  }
}
// 获取cookie
Vue.prototype.getCookie = function (cname) {
  var name = cname + '='
  var doc = window.top ? window.top.document.cookie : document.cookie
  var ca = doc.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
  }
  return ''
}
// 清除cookie
Vue.prototype.clearCookie = function () {
  if (arguments.length <= 0) return false
  Array.from(arguments).forEach((item) => {
    this.setCookie(item, '', -1)
  })
}
