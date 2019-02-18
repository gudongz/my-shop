<template>
    <el-aside class="sider">
        <el-menu
            class="menu"
            :router="true"
            :default-active="$route.path"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item index=""><i class="el-icon-setting"></i>选项1</el-menu-item>
            </el-submenu>
            <el-menu-item index="/admin/index">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="/admin/shop">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="/admin/user">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="/admin/power">
                <i class="el-icon-setting"></i>
                <span slot="title">导航五</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
export default {
    name: 'AdminSider'
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
