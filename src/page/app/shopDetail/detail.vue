<template>
    <div>
        <detail-header></detail-header>
        <swiper class="swiper" :list="imgList" height="400px"></swiper>
        <shop-tilte :shop-title="shopInfo"></shop-tilte>
        <div class="choose" @click="chooseShop">
            <span>已选</span>
            <p>红米Note7 全网通 6+64 亮黑色 x 1</p>
            <i class="iconfont icon-houtui"></i>
        </div>
        <detail-image :img-list="shopInfo.message_picture"></detail-image>
        <buy @buy="chooseShop"></buy>
        <choose v-if="shopIsShow" :shop-info="shopInfo" @closeChoose="closeChoose"></choose>
    </div>
</template>

<script>
import DetailHeader from './components/DetailHeader'
import DetailImage from './components/DetailImage'
import ShopTilte from './components/ShopTitle'
import Buy from './components/Buy'
import Choose from './components/Choose'
import { Swiper } from 'vux'

import { apiGetGoodsById } from '@/api/index'

export default {
    name: 'ShopDetail',
    components: {
        DetailHeader,
        Swiper,
        ShopTilte,
        DetailImage,
        Buy,
        Choose
    },
    data () {
        return {
            shopId: '',
            shopInfo: {},
            imgList: [],
            shopIsShow: false
        }
    },
    mounted() {
        console.log(this.shopId)
        this.shopId = this.$route.query.id
        this.getGoodsById({ id: this.shopId })
    },
    methods: {
        getGoodsById(params) {
            apiGetGoodsById({ ...params }).then(res => {
                console.log(res)
                this.dealData(res.result[0].view_picture)
                this.shopInfo = res.result[0] || []
            })
        },
        dealData(data) {
            this.imgList = data.map(item => {
                return {
                    url: 'javascript:',
                    img: item.url
                }
            })
        },
        chooseShop() {
            this.shopIsShow = true
        },
        closeChoose() {
            this.shopIsShow = false
        }
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
