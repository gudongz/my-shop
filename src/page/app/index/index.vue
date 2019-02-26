<template>
    <div class="page-main">
        <Header></Header>
        <swiper class="swiper" :list="imgList"></swiper>
        <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
            <grid-item
                class="menu-item"
                v-for="(item, index) in menuItem"
                :key="index"
                :link="item.link"
            >
                <i slot="icon" :class="['iconfont', item.icon]"></i>
                <span class="item-label">{{item.label}}</span>
            </grid-item>
        </grid>
        <div class="container">
            <activity></activity>
            <item :shop-list="shopList"></item>
        </div>
    </div>
</template>

<script>
import Header from './components/Header'
import Activity from './components/Activity'
import Item from './components/Item'
import { Swiper, Grid, GridItem } from 'vux'

import { apiGetHotGoods } from '@/api/index'

export default {
    name: 'ClientIndex',
    components: { Header, Swiper, Grid, GridItem, Activity, Item },
    data() {
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
            ],
            menuItem: [
                { label: '新品发布', icon: 'icon-huangguan', link: '' },
                { label: '超值特卖', icon: 'icon-shangcheng1', link: '' },
                { label: '每日精选', icon: 'icon-flyme_icon-', link: '' },
                { label: '活动频道', icon: 'icon-shijianlishijilujishizhongbiaomianxing', link: '' },
                { label: '以旧换新', icon: 'icon-duoren1', link: '' },
                { label: '电视热卖', icon: 'icon-diannao', link: '' },
                { label: '闪购', icon: 'icon-shangcheng', link: '' },
                { label: '全部', icon: 'icon-hpncircle', link: '' }
            ],
            shopList: []
        }
    },
    mounted() {
        this.getHotGoods({ hot: 1 })
        // this.getAllGoods()
    },
    methods: {
        getHotGoods(params) {
            apiGetHotGoods({
                ...params
            }).then(res => {
                console.log(res)
                this.shopList = res.result || []
            })
        }
        // getAllGoods() {
        //     apiGetAllGoods().then(res => {
        //         console.log(res)
        //     })
        // }
    }
}
</script>

<style lang="less" scoped>
.swiper {
    margin-top: 46px;
}
.container {
    margin-top: .5rem;
    margin-bottom: 3.5rem;
}
.menu-item {
    text-decoration: none;
    text-align: center;
    color: #696969;
    i{
        font-size: 1.5rem;
    }
    .item-label {
        font-size: .5rem;
    }
}

</style>
