import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    api: 'vue-bootstrap',
    loading: false,
    themeClass: 'default-template',
    themeName: 'vue-bootstrap',
    address:'/',
    authMenuList:[],
  }
})
export default store
