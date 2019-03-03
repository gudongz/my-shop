<template>
    <div>
        <ul class="main">
            <router-link
                class="item"
                v-for="(item, index) in list"
                :key="index"
                tag="li"
                :to="item.link"
            >
                <div>
                    <i :class="['iconfont', item.icon]"></i>
                    <span class="item-title">{{item.title}}</span>
                </div>
                <i class="iconfont icon-hpncircle"></i>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CenterItem',
    data() {
        return {
            list: [
                { title: '我的订单', icon: 'icon-wuxupailie', link: '/app/myOrder' }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    background: #ffffff;
    .item {
        display: flex;
        justify-content: space-between;
        padding: .9rem .8rem;
        border-bottom: 1px solid rgba(0,0,0,.15);
        .item-title {
            margin-left: .5rem;
        }
    }
}
</style>
