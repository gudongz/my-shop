<template>
    <div>
        <div class="header">
            <i class="iconfont icon-shezhi left-icon"></i>
            <input class="search" type="text" placeholder="搜索商品名称">
            <i class="iconfont icon-sousuo right-icon"></i>
        </div>
        <div class="container">
            <h4 class="title">常用分类</h4>
            <span class="item">手机</span>
            <span class="item">手机</span>
            <span class="item">手机</span>
            <span class="item">手机</span>
            <span class="item">手机</span>
            <span class="item">手机</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    components: {
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 46px;
    background-color: #f2f2f2;
    color: #666;
    .left-icon, .right-icon {
        font-size: 19px;
        margin: 0 15px
    }
    .search {
        width: 100%;
        height: 28px;
        padding: 0 5px;
        outline: 0;
        // border: none;
        border: 1px solid #e5e5e5;
        border-radius: 3px;
    }
}
.container {
    padding: 10px;
    color: #3c3c3c;
    .title {
        padding-top: 5px;
        padding-bottom: 15px;
        font-size: 15px;
    }
    .item {
        padding: 4px 5px;
        background: #f5f5f5;
        font-size: 14px;
        margin-right: 5px;
        margin-bottom: 5px;
    }
}
</style>
