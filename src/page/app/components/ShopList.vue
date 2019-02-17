<template>
    <div>
        <flexbox class="item" :gutter="0"  wrap="wrap" justify="space-between">
            <flexbox-item :span="6" v-for="(item, index) in obj.listData" :key="item.id">
                <div :class="{'item': true, 'item-padding-right': index % 2 === 0, 'item-padding-left': index % 2 !== 0}">
                    <div class="img-box">
                        <img :src="item.url" alt="">
                    </div>
                    <div class="conent">
                        <p class="title">{{item.title}}</p>
                        <p class="msg">{{item.msg}}</p>
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
    data() {
        return {
            obj: {
                id: 111,
                title: '每日精选',
                headerItem: { id: 22, url: '//i8.mifile.cn/v1/a1/9c787c02-4ebc-020b-7c9b-2dc681471981!720x280.webp' },
                listData: [
                    { id: 0, title: '小米青春版', msg: '潮流镜面渐变色，自拍旗舰', price: '1456', url: '//i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp' },
                    { id: 1, title: '小米青春版', msg: '潮流镜面渐变色，自拍旗舰', price: '1456', url: '//i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp' },
                    { id: 2, title: '小米青春版', msg: '潮流镜面渐变色，自拍旗舰', price: '1456', url: '//i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp' },
                    { id: 3, title: '小米青春版', msg: '潮流镜面渐变色，自拍旗舰', price: '1456', url: '//i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp' },
                    { id: 4, title: '小米青春版', msg: '潮流镜面渐变色，自拍旗舰', price: '1456', url: '//i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp' },
                    { id: 5, title: '小米青春版', msg: '潮流镜面渐变色，自拍旗舰', price: '1456', url: '//i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp' },
                    { id: 6, title: '小米青春版', msg: '潮流镜面渐变色，自拍旗舰', price: '1456', url: '//i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp' },
                    { id: 7, title: '小米青春版', msg: '潮流镜面渐变色，自拍旗舰', price: '1456', url: '//i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp' }
                ]
            }
        }
    }
}
</script>

<style lang="less" scoped>
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
        }
        .msg {
            margin-top: .2rem;
            font-size: .7rem;
            color: rgba(0,0,0,.54);
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
