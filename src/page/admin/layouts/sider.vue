<template>
    <el-aside width="200px">
        <el-menu
            class="menu"
            default-active="2"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>   
    </el-aside>
</template>

<script>
export default {
    name : "AdminSider"
}
</script>


<style lang="less" scoped>

.menu {
    height: 100%;
}
.el-menu-item {
    height: 48px;
    line-height: 48px;

}
.menu /deep/ .el-submenu__title{
    height: 48px;
    line-height: 48px;
}


</style>
