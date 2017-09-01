import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
Vue.prototype.$urls = 'http://127.0.0.1:3111';
Vue.prototype.$ajax = axios
