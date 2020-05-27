/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 马璇玲
 * @Date: 2020-03-26 11:25:58
 * @LastEditors: 马璇玲
 * @LastEditTime: 2020-05-21 16:24:13
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import Tool from "common/tool.js"

Vue.config.productionTip = false

import api from './api/mergeApi'

Vue.prototype.$api = api
Vue.prototype.$tool = Tool

window.Vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
