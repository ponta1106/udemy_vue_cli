import Vue from 'vue'
// ↓コンポーネントを使用する為に記述
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
import LikeFooter from './components/LikeFooter.vue'

Vue.config.productionTip = false;
// ↓コンポーネントをグローバル登録
Vue.component('LikeNumber', LikeNumber);
Vue.component('LikeFooter', LikeFooter);
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
