import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import UserSearchPage from '@/views/UserSearchPage.vue';
import UserDetailPage from '@/views/UserDetailPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'search',
    component: UserSearchPage,
  },
  {
    path: '/user/:id',
    name: 'detail',
    component: UserDetailPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
