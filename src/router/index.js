import Vue from 'vue';
import VueRouter from 'vue-router';
import AppHeader from '../layout/AppHeader';
import Components from '../views/Components.vue';
import Landing from '../views/Landing.vue';
import Profile from '../views/Profile';
import Portfolio from '../views/Portfolio';
import OneToOne from '../views/OneToOne';

import AppFooter from '../layout/AppFooter';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'components',
    components: {
      header: AppHeader,
      default: Components,
      footer: AppFooter
    }
  },
  {
    path: '/landing',
    name: 'landing',
    components: {
      header: AppHeader,
      default: Landing,
      footer: AppFooter
    }
  },
  {
    path: '/profile',
    name: 'profile',
    components: {
      header: AppHeader,
      default: Profile,
      footer: AppFooter
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    components: {
      header: AppHeader,
      default: Portfolio,
      footer: AppFooter
    }
  },
  {
    path: '/one-to-one',
    name: 'one-to-one',
    components: {
      header: AppHeader,
      default: OneToOne,
      footer: AppFooter
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
