import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { store } from './store/store';
import { routes } from './routes';

import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

Vue.component('VueSlider', VueSlider);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
