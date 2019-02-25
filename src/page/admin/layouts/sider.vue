<template>
    <el-aside class="sider">
        <el-menu
            class="menu"
            :router="true"
            :default-active="$route.path"
        >
            <template v-for="item in menu[0].children">
                <template v-if="item.children">
                    <el-submenu :index="item.url" v-if="item.checked" :key="item.id">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <template v-for="i in item.children">
                            <el-menu-item :index="i.url" v-if="i.checked" :key="i.id">
                                <i class="el-icon-menu"></i>
                                <span slot="title">{{i.name}}</span>
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.url" v-if="item.checked" :key="item.id">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </el-aside>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { changeTree } from '@/utils/util'

export default {
    name: 'AdminSider',
    computed: mapState({
        menu: function(state) {
            if (state.siderMenu.menu.length === 0) {
                let userInfo = JSON.parse(sessionStorage.getItem('adminUserInfo'))
                this.setMenu(changeTree(userInfo.power || []))
            }
            return state.siderMenu.menu
        }
    }),
    methods: {
        ...mapActions('siderMenu', [
            'setMenu'
        ])
    }
}
</script>

<style lang="less" scoped>
.el-menu-item, .el-submenu {
    span {
        color: #666;
    }
}
.el-submenu .el-menu .el-menu-item {
    color: #666;
}
.sider {
    width: 201px !important;
    background-color: #ffffff;
    .menu {
        height: 100%;
        .icon {
            font-size: 16px;
        }
    }
}

// 修改侧边导航的默认样式
.menu:not(.el-menu--collapse) {
    width: 200px;
}
.menu /deep/ .el-submenu__title {
    background-color: #ffffff;
    height: 42px;
    line-height: 42px;
}
.menu /deep/ .el-menu-item {
    height: 39px;
    line-height: 39px;
}
.menu  /deep/ .el-submenu .is-active {
    i {
        color: #409EFF;
    }
    background-color: #f2f6f9;
}
.menu  /deep/ .is-active {
    background-color: #f2f6f9;
}
</style>
