import Vue from 'vue'
import Router from 'vue-router'

// 管理
import Login from '@/page/admin/Login'
import Home from '@/page/admin/Home'
import AdminIndex from '@/page/admin/index/index'
import GoodsManage from '@/page/admin/manage/goods/goods'
import UserManage from '@/page/admin/manage/appUser/app-user'
import PowerManage from '@/page/admin/manage/power/power'
import AdminUserManage from '@/page/admin/manage/power/admin-user'
import RoleManage from '@/page/admin/manage/power/role'
import OrdersManage from '@/page/admin/manage/orders/orders'

// 客户端
import ClientHome from '@/page/app/home'
import ClientIndex from '@/page/app/index/index'
import Classify from '@/page/app/classify/classify'
import ShopCar from '@/page/app/shopCar/shopCar'
import MyCenter from '@/page/app/myCenter/myCenter'
import ClientLogin from '@/page/app/login/ClientLogin'
import Search from '@/page/app/search/search'
import SearchResult from '@/page/app/searchResult/searchResult'
import ShopDetail from '@/page/app/shopDetail/detail'
import OrderConfirm from '@/page/app/orderConfirm/orderConfirm'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
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
        { path: '/app/login', name: '客户端登陆', component: ClientLogin },
        { path: '/app/shopDetail', name: '商品详情', component: ShopDetail },
        { path: '/app/orderConfirm', name: '用户结算', component: OrderConfirm },

        // 管理
        { path: '/admin/login', name: '管理登陆界面', component: Login },
        {
            path: '',
            component: Home,
            name: '管理',
            children: [
                { path: '/admin/index', name: '首页', component: AdminIndex },
                { path: '/admin/goods', name: '商品管理', component: GoodsManage },
                { path: '/admin/user', name: '用户管理', component: UserManage },
                { path: '/admin/power', name: '权限管理', component: PowerManage },
                { path: '/admin/adminUser', name: '管理员用户管理', component: AdminUserManage },
                { path: '/admin/role', name: '角色管理', component: RoleManage },
                { path: '/admin/orders', name: '订单管理', component: OrdersManage }

            ]
        }
    ]
})
