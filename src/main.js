import Vue from 'vue'
import App from './App.vue'
import Vue2Filters from 'vue2-filters'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

Vue.use(axios)

Vue.use(Vue2Filters)
Vue.use(BootstrapVue);


Vue.config.productionTip = false
window.axios = require('axios');
new Vue({
  render: h => h(App),
}).$mount('#app')
