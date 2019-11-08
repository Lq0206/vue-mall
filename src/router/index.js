import Vue from 'vue'
import Router from 'vue-router'
import appMain from '@/components/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appMain',
      component: appMain,
      children: [
        {
          path: 'header',
          component: () => import('@/components/layout/header'),
          name: 'appHeader'
        },
        {
          path: 'footer',
          component: () => import('@/components/layout/footer'),
          name: 'appFooter'
        }
      ]
    }
  ]
})
