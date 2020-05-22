import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'
import Login from '@/components/login'
import User from '@/components/system/user'
Vue.use(Router)
const spinRoute = {
  show() {//加载中显示loading组件
    store.state.loading = true;//开启loading组件，这里我用的mint-ui
  },
  resolve(resolve) {//加载完成隐藏loading组件
    return component => {
      setTimeout(() => {
        store.state.loading = false;//关闭loading组件
        resolve(component);
      }, 10)
    }
  }
}
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: resolve => {
        spinRoute.show();//加载时开启loading
        require(['@/components/main'], spinRoute.resolve(resolve))//路由懒加载
      },
      meta: {
        title: '首页'
      },
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        spinRoute.show();//加载时开启loading
        require(['@/components/login'], spinRoute.resolve(resolve))//路由懒加载
      },
      meta: {
        title: '登陆'
      },
    },
    {
      path: '/user',
      name: 'user',
      component: resolve => {
        spinRoute.show();//加载时开启loading
        require(['@/components/system/user'], spinRoute.resolve(resolve))//路由懒加载
      },
      meta: {
        title: '用户管理'
      },
    }
  ]
})
