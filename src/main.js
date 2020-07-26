import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import store from './plugins/vuex.js';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuex);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
