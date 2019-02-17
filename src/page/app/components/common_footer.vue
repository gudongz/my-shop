<template>
    <tabbar class="footer" v-model="activeIndex" @on-index-change="indexChange">
        <tabbar-item class="label" index="0" link="/app/index">
            <i slot="icon" class="iconfont icon-shouye"></i>
            <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item class="label" index="1" link="/app/classify">
            <i slot="icon" class="iconfont icon-sousuofenlei"></i>
            <span slot="label">分类</span>
        </tabbar-item>
        <tabbar-item  class="label" index="2" link="/app/shopCar">
            <i slot="icon" class="iconfont icon-03f"></i>
            <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item class="label" index="3" link="/app/myCenter">
            <i slot="icon" class="iconfont icon-gerenzhongxin"></i>
            <span  slot="label">我的</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
    name: 'commonFooter',
    components: { Tabbar, TabbarItem },
    data() {
        return {
            activeIndex: 0
        }
    },
    methods: {
        indexChange(index) {
            // console.log(index)
            // this.activeIndex = index
        }
    }
}
</script>

<style lang="less" scoped>
.footer {
    position: fixed;
}
.label {
    text-decoration: none;
}
</style>
