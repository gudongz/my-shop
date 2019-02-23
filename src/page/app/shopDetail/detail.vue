<template>
    <div>
        <detail-header></detail-header>
        <swiper class="swiper" :list="imgList" height="400px"></swiper>
        <shop-tilte></shop-tilte>
        <div class="choose">
            <span>已选</span>
            <p>红米Note7 全网通 6+64 亮黑色 x 1</p>
            <i class="iconfont icon-houtui"></i>
        </div>
        <detail-image :img-list="imgList"></detail-image>
        <buy></buy>
    </div>
</template>

<script>
import DetailHeader from './components/DetailHeader'
import DetailImage from './components/DetailImage'
import ShopTilte from './components/ShopTitle'
import Buy from './components/Buy'
import { Swiper } from 'vux'

export default {
    name: 'ShopDetail',
    components: {
        DetailHeader,
        Swiper,
        ShopTilte,
        DetailImage,
        Buy
    },
    data () {
        return {
            imgList: [
                {
                    url: 'javascript:',
                    img: '//i8.mifile.cn/v1/a1/f1dae8da-2d69-af58-42f4-d92c21b39f9a!720x360.webp',
                    title: '送你一朵fua'
                }, {
                    url: 'javascript:',
                    img: '//i8.mifile.cn/v1/a1/a94721ff-66f8-0bba-0190-f17ff896b26c!720x360.webp',
                    title: '送你一次旅行',
                    fallbackImg: 'https://static.vux.li/demo/3.jpg'
                }
            ]
        }
    },
    methods: {
    },
    activated() { // 每次页面展示

    },
    mounted() {
        // this.getDetailInfo()
    }

}
</script>

<style lang="less" scoped>
.choose {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 15px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background-color: #fafafa;
    span, i {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.54);
    }
    p {
        font-size: 14px;
        color: rgba(0,0,0,.87);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
