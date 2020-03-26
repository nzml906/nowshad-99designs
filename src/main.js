import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import '@/assets/vendor/nucleo/css/nucleo.css';
import '@/assets/vendor/font-awesome/css/font-awesome.css';
import '@/assets/scss/argon.scss';

import globalComponents from './plugins/globalComponents';
import globalDirectives from './plugins/globalDirectives';

import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;

Vue.use(globalComponents);
Vue.use(globalDirectives);
Vue.use(VueLazyload);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
