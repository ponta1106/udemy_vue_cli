import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import Test from './views/Test.vue';

// use(プラグインを適用する)
Vue.use(Router);

export default new Router({
  routes: [{path: '/', component: Home},{path: '/users', component: Users},
  {path: '/test', component: Test}]
});