import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: "Home" */'./views/Home.vue');
const Users = () => import(/* webpackChunkName: "Users" */'./views/Users.vue');
const UsersPosts = () => import(/* webpackChunkName: "UsersPosts" */'./views/UsersPosts.vue');
const UsersProfile = () => import(/* webpackChunkName: "UsersProfile" */'./views/UsersProfile.vue');
const HeaderHome = () => import(/* webpackChunkName: "HeaderHome" */'./views/HeaderHome.vue');
const HeaderUsers = () => import(/* webpackChunkName: "HeaderUsers" */'./views/HeaderUsers.vue');

// use(プラグインを適用する)
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
      default: Home,
      header: HeaderHome
      },
      beforeEnter(to, from, next) {
        next();
      },
    },
    {
      path: '/users/:id',
      components: {
      default: Users,
      header: HeaderUsers
      },
      props: {
        default: true,
        header: false,
      },
      // ネストされたルーティングを作成
      children: [
        { path: 'posts', component: UsersPosts },
        { path: 'profile', component: UsersProfile, name: "users-id-profile" },
      ]
    },
    {
      // 当てはまるパスがないときは、このパスが適用される
      path: '*',
      redirect: '/',
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return { x: 0, y: 0 };
  }
});