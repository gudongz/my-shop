<template>
    <div class="center-main">
        <center-header :user-info="userInfo"></center-header>
        <center-list></center-list>
        <div class="line"></div>
        <center-item></center-item>
    </div>
</template>

<script>
import CenterHeader from './components/Header'
import CenterList from './components/CenterList'
import CenterItem from './components/CenterItem'
export default {
    name: 'MyCenter',
    components: {
        CenterHeader,
        CenterList,
        CenterItem
    },
    computed: {
        userInfo() {
            return this.$store.getters['userInfo/getAppUserInfo']
        }
    }
}
</script>

<style lang="less" scoped>
.center-main {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 3rem;
    background: #f5f5f5;
}
.line {
    height: .5rem;
    background: #f5f5f5;
    overflow: hidden;
    clear: both;
}
</style>
