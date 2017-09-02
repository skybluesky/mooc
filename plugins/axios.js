import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
Vue.prototype.$urls = 'http://192.168.10.10:3111';
Vue.prototype.$ajax = axios
