import Vue from 'vue'
import App from './App.vue'

import 'nova-vue/dist/nova.css';
import { NovaDatePicker, NovaAlert } from 'nova-vue';

Vue.component('NovaAlert', NovaAlert);
Vue.component('NovaDatePicker', NovaDatePicker);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
