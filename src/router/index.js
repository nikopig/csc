import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pick',
      name: 'pick',
      component: resolve => require(['../pages/pick'], resolve)
    },
    {
      path: '/changeBox',
      name: 'changeBox',
      component: resolve => require(['../pages/change-box'], resolve)
    },
    {
      path: '/mergeBox',
      name: 'mergeBox',
      component: resolve => require(['../pages/merge-box'], resolve)
    },
    {
      path: '/checkerBox',
      name: 'checkerBox',
      component: resolve => require(['../pages/checker-box'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../pages/login'], resolve)
    }
  ]
})
