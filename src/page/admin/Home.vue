<template>
    <el-container>
        <el-header class="header">
            <Header />
        </el-header>
        <el-container>
            <Sider class="sider" />
                <el-main>
                    <router-view></router-view>
                </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from './layouts/header'
import Sider from './layouts/sider'

export default {
    name: 'Home',
    components: { Header, Sider },
    data() {
        return {
        }
    }

}

</script>

<style scoped lang="less">
.header {
    color: #fff;
    background-color: #363636;
    border-bottom: 1px solid #eee;
}

.el-main {
    padding-top: 10px;
    background-color: #eee;
}
</style>
