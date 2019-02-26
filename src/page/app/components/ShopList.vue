<template>
    <div class="item-box">
        <flexbox class="item" :gutter="0"  wrap="wrap" justify="space-between">
            <flexbox-item :span="6" v-for="(item, index) in shopList" :key="item.id">
                <div :class="{'item': true, 'item-padding-right': index % 2 === 0, 'item-padding-left': index % 2 !== 0}"
                    @click="goToGoodsDetail(item.id)"
                >
                    <div class="img-box">
                        <img :src="item.view_picture[0].url" alt="">
                    </div>
                    <div class="conent">
                        <p class="title">{{item.name}}</p>
                        <p class="msg">{{item.message}}</p>
                        <p class="price">￥{{item.price}}</p>
                    </div>
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
    name: 'ShopList',
    components: { Flexbox, FlexboxItem },
    props: {
        shopList: Array
    },
    data() {
        return {
        }
    },
    methods: {
        goToGoodsDetail(params) {
            console.log(11)
            this.$router.push({ path: '/app/shopDetail', query: { id: params } })
        }
    }
}
</script>

<style lang="less" scoped>
.item-box /deep/ .vux-flexbox {
    align-items: flex-start;
}
.item {
    box-sizing: border-box;
    width: 100%;
    .img-box {
        height: 11.5rem;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .conent {
        padding: .4rem .8rem;
        .title {
            font-size: .9rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .msg {
            height: 1.9rem;
            margin-top: .2rem;
            font-size: .7rem;
            line-height: .9rem;
            color: rgba(0,0,0,.54);
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
        }
        .price {
            margin-top: .2rem;
            font-size: .9rem;
            color: #ea625b;
        }
    }
}
.item-padding-right {
    padding-right: .1rem;
}
.item-padding-left {
    padding-left: .1rem;
}
</style>
