<template>
    <div>
        <!-- 点击每一项都要跳转到详细页面  需要id -->
        <h2 class="header-title">{{obj.title}}</h2>
        <div class="header-item">
            <img :src="obj.headerItem.url" alt="">
        </div>
        <shop-list :shop-list="shopList"></shop-list>
    </div>
</template>

<script>
import ShopList from '../../components/ShopList'
export default {
    name: 'Item',
    components: {
        ShopList
    },
    props: {
        shopList: Array
    },
    data() {
        return {
            obj: {
                id: 111,
                title: '每日精选',
                headerItem: { id: 22, url: '//i8.mifile.cn/v1/a1/9c787c02-4ebc-020b-7c9b-2dc681471981!720x280.webp' }
            }
        }
    }
}
</script>

<style lang="less" scoped>

.header-title {
    height: 2.5rem;
    line-height: 2.5rem;
    padding-left: .8rem;
}

.header-item {
    height: 9rem;
    img {
        height: 100%;
        width: 100%;
    }
}

</style>
