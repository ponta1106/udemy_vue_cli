import Vue from 'vue'
// ↓コンポーネントを使用する為に記述
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
// ↓コンポーネントをグローバル登録
Vue.component('LikeNumber', LikeNumber);

new Vue({
  render: h => h(App),
}).$mount('#app')
