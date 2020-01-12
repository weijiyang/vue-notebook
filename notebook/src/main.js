import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import { router } from '@/router'
import store from '@/store'

import '@/assets/css/index.scss'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false

store.dispatch('getNoteList').then(() => {
  new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount('#app')
})

// window.addEventListener('beforeunload',store.commit('SET_LOCALSTORAGE'))

window.onbeforeunload = function (t) {     
  const e = window.event||t;  
  store.commit('SET_LOCALSTORAGE');
  e.returnValue=("确定离开当前页面吗？");
} 