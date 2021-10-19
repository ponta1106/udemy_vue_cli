import Vue from 'vue';
// ↓コンポーネントを使用する為に記述
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';
import LikeFooter from './components/LikeFooter.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// ↓コンポーネントをグローバル登録
Vue.component('LikeNumber', LikeNumber);
Vue.component('LikeFooter', LikeFooter);
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

router.beforeEach((to, from, next) => {
  next();
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
