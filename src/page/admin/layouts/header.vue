<template>
    <div>
        <el-dropdown class="loginOut" trigger="click">
            <span class="username">
                <i class="iconfont icon-gerenzhongxin"></i><span>admin</span><i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><span class="out" @click="loginOut"><i class="iconfont icon-shezhi"></i>退出</span></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: 'AdminHeader',
    methods: {
        loginOut() {
            sessionStorage.clear('adminUserInfo')
            this.$router.push({ path: '/admin/login' })
        }
    }
}
</script>

<style lang="less" scoped>
.loginOut {
    float: right;
    height: 58px;
    line-height: 58px;
    color: #fff;
    cursor: pointer;
    i {
        font-size: 14px;
        margin: 0 5px;
    }
}
.out {
    i {
        font-size: 14px;
        margin-right:5px;
    }
}
</style>
