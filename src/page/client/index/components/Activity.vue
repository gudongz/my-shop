<template>
    <div>
        <!-- 这个里面 的点击后直接跳到商品详细页面  需要传个id的 -->
        <flexbox>
            <flexbox-item>
                <div class="item-left">
                    <img :src="imgList[0].url" alt="">
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="item-right">
                    <img :src="imgList[1].url" alt="">
                </div>
                <div class="item-right">
                    <img :src="imgList[2].url" alt="">
                </div>
            </flexbox-item>
        </flexbox>
        <div class="bottom">
            <img :src="imgList[3].url" alt="">
        </div>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
    name: 'Activity',
    components: { Flexbox, FlexboxItem },
    data() {
        return {
            imgList: [
                { id: 0, url: '//i8.mifile.cn/v1/a1/5164e9a8-59d0-a748-e71b-7b70d57a4685!358x508.webp' },
                { id: 1, url: '//i8.mifile.cn/v1/a1/2aed5408-5aa2-2444-5b1e-8b37b39dbf0b!358x252.webp' },
                { id: 2, url: '//i8.mifile.cn/v1/a1/86954d3c-692f-55a1-2f6f-91fc5b2fd4e5!358x252.webp' },
                { id: 3, url: '//i8.mifile.cn/v1/a1/d56ad54e-1841-6fe9-cde4-d6104a616bfc!720x280.webp' }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.item-left, .item-right, .bottom {
    img {
        height: 100%;
        width: 100%;
    }
}
.item-left {
    height: 16rem;
    background: #eeeeee;
}
.bottom {
    margin-top: .2rem;
    height: 9rem;
    background: #eeeeee;
}

</style>
