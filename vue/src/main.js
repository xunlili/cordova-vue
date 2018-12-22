// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from '@/LangPack'
import Cookies from 'js-cookie'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import 'lib-flexible/flexible'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.cookie = Cookies
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
