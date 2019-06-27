import Vue from 'vue'
import App from './App.vue'
import OpsUI from '@kevinljxljx/opsui'
import '@kevinljxljx/opsui/lib/opsui.css'

Vue.use(OpsUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
