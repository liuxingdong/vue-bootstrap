// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueCookies from 'vue-cookies'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VeeValidate from 'vee-validate'
import store from './vuex/store'
import VJstree from 'vue-jstree'
import CKEditor from 'ckeditor4-vue';
import axios from 'axios'
import "./mock/index";
Vue.use(VeeValidate, {
  // This is the default
  inject: true,
  // Important to name this something other than 'fields'
  fieldsBagName: 'veeFields',
  locale: 'zh_CN',
  // This is not required but avoids possible naming conflicts
  errorBagName: 'veeErrors'
})
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VJstree)
Vue.use(CKEditor);
Vue.use(VueCookies)
Vue.prototype.$axios = axios

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
