import Vue from 'vue'
// ↓コンポーネントを使用する為に記述
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
import LikeFooter from './components/LikeFooter.vue'

Vue.config.productionTip = false;
// ↓コンポーネントをグローバル登録
Vue.component('LikeNumber', LikeNumber);
Vue.component('LikeFooter', LikeFooter);
Vue.directive("border", function(el, binding) {
  el.style.border = "solid black 2px";
  // v-borderで指定した値を使用する
  el.style.borderWidth = binding.value.width;
  el.style.color = binding.value.color;
});


new Vue({
  render: h => h(App),
}).$mount('#app')
