import Vue from 'vue'
import Router from 'vue-router'

// 管理
import Login from '@/page/admin/Login'
import Home from '@/page/admin/Home'
import AdminIndex from '@/page/admin/index/index'

// 客户端
import ClientIndex from '@/page/client/index/index'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        // 管理
        { path: '/admin', name: '管理登陆界面', component: Login },
        {
            path: '',
            component: Home,
            name: '管理',
            children: [
                { path: '/admin/index', name: '首页', component: AdminIndex }, 

            ]
        },
        {
            path: '',
            component: Home,
            name: '管理中心',
            children: [
                // { path: '/power', name: '权限管理', component: Power },
            ]
        },

        // 客户端
        { path: '/index', name: '客户端首页', component: ClientIndex }
        
    ]
})
