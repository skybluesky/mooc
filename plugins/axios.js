import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
Vue.prototype.$urls = 'http://47.94.16.170:3000';
Vue.prototype.$ajax = axios
