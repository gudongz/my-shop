import Vue from 'vue'
import Router from 'vue-router'

// 管理
import Login from '@/page/admin/Login'
import Home from '@/page/admin/Home'
import AdminIndex from '@/page/admin/index/index'

// 客户端
import ClientHome from '@/page/app/home'
import ClientIndex from '@/page/app/index/index'
import Classify from '@/page/app/classify/classify'
import ShopCar from '@/page/app/shopCar/shopCar'
import MyCenter from '@/page/app/myCenter/myCenter'
import ClientLogin from '@/page/app/login/ClientLogin'
import Search from '@/page/app/search/search'
import SearchResult from '@/page/app/searchResult/searchResult'

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
            path: '/app',
            name: '客户端',
            component: ClientHome,
            children: [
                { path: '/app/index', name: '客户端首页', component: ClientIndex },
                { path: '/app/classify', name: '分类', component: Classify },
                { path: '/app/shopCar', name: '购物车', component: ShopCar },
                { path: '/app/myCenter', name: '个人中心', component: MyCenter }
            ]
        },
        { path: '/app/search', name: '搜索', component: Search },
        { path: '/app/searchResult', name: '搜索结果', component: SearchResult },
        { path: '/app/login', name: '客户端登陆', component: ClientLogin }
    ]
})
