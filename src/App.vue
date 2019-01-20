<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
.el-container {
     height: 100%;
}
#app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}

/* 解决表头对不齐的问题 */
body .el-table th.gutter{
    display: table-cell !important;
}
</style>
