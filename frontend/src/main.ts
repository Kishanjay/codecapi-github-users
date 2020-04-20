import Vue from 'vue';
import router from '@/router';
import App from './App.vue';
import './registerServiceWorker';

import 'bulma/css/bulma.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
