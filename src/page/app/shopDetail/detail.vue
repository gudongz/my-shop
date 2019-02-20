<template>
    <div>
        <detail-header></detail-header>
        <swiper class="swiper" :list="imgList"></swiper>
    </div>
</template>

<script>
import DetailHeader from './components/DetailHeader'
import { Swiper } from 'vux'

export default {
    name: 'ShopDetail',
    components: {
        DetailHeader,
        Swiper
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

</style>
