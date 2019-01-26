import Vue from 'vue'
import Router from 'vue-router'

// 管理
import Login from '@/page/admin/Login'
import Home from '@/page/admin/Home'
import AdminIndex from '@/page/admin/index/index'

// 客户端
import ClientHome from '@/page/client/home'
import ClientIndex from '@/page/client/index/index'
import Classify from '@/page/client/classify/classify'
import ShopCar from '@/page/client/shopCar/shopCar'
import MyCenter from '@/page/client/myCenter/myCenter'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // 管理
        { path: '/admin', name: '管理登陆界面', component: Login },
        {
            path: '',
            component: Home,
            name: '管理',
            children: [
                { path: '/admin/index', name: '首页', component: AdminIndex }

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
        {
            path: '/client',
            name: '客户端',
            component: ClientHome,
            children: [
                { path: '/index', name: '客户端首页', component: ClientIndex },
                { path: '/classify', name: '分类', component: Classify },
                { path: '/shopCar', name: '购物车', component: ShopCar },
                { path: '/myCenter', name: '个人中心', component: MyCenter }
            ]
        }
    ]
})
