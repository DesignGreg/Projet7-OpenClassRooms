import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    
  },
  mutations: {
  
}
});



new Vue({
  render: h => h(App),
}).$mount('#app');
