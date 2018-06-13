import Vue from 'vue';
import Router from 'vue-router';
import {routers} from './router';
import Store from '@/store/index';

Vue.use(Router)

const RouterConfig = {
  routes: routers
};

export const router = new Router(RouterConfig);
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  console.log(Store.userAuth.get());
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else if (!Store.userAuth.get() && to.name !== 'login') {
    next({
      path: '/login'
    });
  }else{
    next()
  }
});
