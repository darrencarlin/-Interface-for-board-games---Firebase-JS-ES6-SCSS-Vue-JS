import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Login from '@/components/Login';
import AdminHome from '@/components/component-pages/AdminHome';
import AdminLibrary from '@/components/component-pages/AdminLibrary';
import AdminAdd from '@/components/component-pages/AdminAdd';
import AdminUser from '@/components/component-pages/AdminAddUser';
import firebase from 'firebase';

Vue.use(Router);

const router = new Router({

  mode: 'history',

  routes: [{
    path: '*',
    redirect: '/home',
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/dashboard',
    name: 'dashboard-home',
    component: AdminHome,
    meta: {
      requiresAuth: true,
    },
  }, {
    path: '/dashboard/library',
    name: 'dashboard-library',
    component: AdminLibrary,
    meta: {
      requiresAuth: true,
    },
  }, {
    path: '/dashboard/add',
    name: 'dashboard-add',
    component: AdminAdd,
    meta: {
      requiresAuth: true,
    },
  }, {
    path: '/dashboard/user',
    name: 'dashboard-user',
    component: AdminUser,
    meta: {
      requiresAuth: true,
    },
  },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('/');
  else if (!requiresAuth && currentUser) next('dashboard/add');
  else next();
});

export default router;
