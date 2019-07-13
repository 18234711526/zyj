import Vue from 'vue'
import App from './App'
import router from './router'
import myHeader from './components/myheader'
import myFooter from './components/myfooter'
import store from "./store/store"
Vue.config.productionTip = false
Vue.component('myHeader',myHeader)
Vue.component('myFooter',myFooter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
