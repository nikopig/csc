// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/css/common.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'
import './util/util'
Vue.use(VueAwesomeSwiper)
Vue.use(MintUi)
Vue.config.productionTip = false
// 判断
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    let Login = Vue.prototype.getCookie('LoginCookie')
    if (Login) { // 校验登录
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})