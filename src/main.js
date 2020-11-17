import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入样式文件
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import './assets/styles/mixnin.less'
import './assets/styles/border.css'
// import 'swiper/swiper-bundle.css'
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
