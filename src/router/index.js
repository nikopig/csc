import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../pages/login'], resolve)
    },
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../pages/index'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/pick',
      name: 'pick',
      component: resolve => require(['../pages/pick'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/changeBox',
      name: 'changeBox',
      component: resolve => require(['../pages/change-box'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/mergeBox',
      name: 'mergeBox',
      component: resolve => require(['../pages/merge-box'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/checkerBox',
      name: 'checkerBox',
      component: resolve => require(['../pages/checker-box'], resolve),
      meta: {
        auth: true
      }
    }
  ]
})
