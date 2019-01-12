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

<style>
@import './assets/style/reset.less';

.el-container {
     height: 100%;
}
#app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

/* 解决表头对不齐的问题 */
body .el-table th.gutter{
    display: table-cell !important;
}
</style>
