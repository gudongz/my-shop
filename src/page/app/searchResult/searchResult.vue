<template>
    <div>
        <div class="header">
            <i class="iconfont icon-shezhi left-icon"></i>
            <input class="search" type="text" placeholder="搜索商品名称">
            <i class="iconfont icon-sousuo right-icon"></i>
        </div>
        <div class="container" ref="container">
            <div>
                <shop-item></shop-item>
                <shop-item></shop-item>
                <shop-item></shop-item>
                <shop-item></shop-item>
                <shop-item></shop-item>
                <shop-item></shop-item>
            </div>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import ShopItem from './components/shopItem'
export default {
    name: 'SearchResult',
    components: { ShopItem },
    data() {
        return {
        }
    },
    mounted() {
        this.scroll = new BetterScroll(this.$refs.container, {})
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
    position: fixed;
    top: 46px;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
}
</style>
