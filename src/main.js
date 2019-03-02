// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import './assets/iconfont/iconfont.css'
import './assets/style/reset.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import store from './store/store.js'
import { LoadingPlugin, ToastPlugin, ConfirmPlugin } from 'vux'

Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.$echarts = echarts

router.beforeEach((to, from, next) => {
    if (to.path === '/admin/login') {
        sessionStorage.removeItem('adminUserInfo')
    }
    let user = JSON.parse(sessionStorage.getItem('adminUserInfo'))
    if (to.path.indexOf('app') > -1) {
        next()
    } else {
        if (!user && to.path !== '/admin/login') {
            next({
                path: '/admin/login'
            })
        } else {
            next()
        }
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
