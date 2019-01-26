<template>
    <div class="main">
        <router-link
            class="item"
            tag="div"
            v-for="(item, index) in list"
            :key="index"
            :to="item.link"
        >
            <span class="icon">
                <i :class="['iconfont', item.icon]"></i>
            </span>
            <p class="name">{{item.name}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CenterList',
    data() {
        return {
            list: [
                { icon: 'icon-daifukuan', name: '待付款', link: '' },
                { icon: 'icon-daishouhuo', name: '待收货', link: '' },
                { icon: 'icon-zhihangfankui', name: '已完成', link: '' }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    display: flex;
    // border-bottom: 1px solid rgba(0,0,0,.15);
    .item {
        flex: 1;
        text-align: center;
        padding: 1.2rem 0;
        background: #ffffff;
        .icon {
            i{
                color: #696969;
                font-size: 1.3rem;
            }
        }
        .name {
            margin-top: .4rem;
            font-size: .6rem;
            color: rgba(0,0,0,.87);
        }
    }
}
</style>
