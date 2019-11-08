// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/_reset.scss'
import { Button, Row, Col, Swipe, SwipeItem, Lazyload } from 'vant'
import '@/styles/_base.scss'

Vue.config.productionTip = false
Vue.use(Button)
.use(Row)
.use(Col)
.use(Swipe)
.use(SwipeItem)
.use(Lazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
