<template>
    <div class="choose-shop">
        <div class="top-bg" @click="closeShopChoose"></div>
        <div class="container">
            <div class="back">
                <i class="iconfont icon-houtui" @click="closeShopChoose"></i>
            </div>
            <div class="shop">
                <div class="img-box">
                    <img :src="shopInfo.view_picture[0].url" alt="图片">
                </div>
                <div class="shop-msg">
                    <p class="price">￥{{shopInfo.price}}</p>
                    <p class="name">{{shopInfo.name}}</p>
                </div>
            </div>
            <div class="item">
                <h2>颜色</h2>
                <span>{{shopInfo.color}}</span>
            </div>
            <div class="item">
                <h2>规格</h2>
                <span>{{shopInfo.size}}</span>
            </div>
            <div class="buy-num">
                <div>购买数量</div>
                <inline-x-number style="display:block;" v-model="buyNum" :min="1" width="50px"></inline-x-number>
            </div>
            <div class="add-car" @click="addShopCar">加入购物车</div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { InlineXNumber } from 'vux'
export default {
    name: 'Choose',
    components: { InlineXNumber },
    props: {
        shopInfo: Object
    },
    data() {
        return {
            buyNum: 1
        }
    },
    mounted() {
        console.log(this.shopInfo)
    },
    methods: {
        ...mapActions('shopCar', [
            'addShopCarAction'
        ]),
        addShopCar() {
            this.addShopCarAction({
                id: this.shopInfo.id,
                num: this.buyNum,
                checked: true,
                shopInfo: this.shopInfo
            })
            this.$vux.loading.show({
                text: 'Loading'
            })
            setTimeout(() => {
                this.$vux.loading.hide()
                this.closeShopChoose()
                this.$vux.toast.text('成功加入购物车！', 'middle')
            }, 1000)
        },
        closeShopChoose() {
            this.$emit('closeChoose')
        }
    }
}
</script>

<style lang="less" scoped>
.choose-shop {
    .top-bg {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
        background: rgba(0,0,0,.6);
    }
    .container {
        position: fixed;
        bottom: -10px;
        right: 0;
        left: 0;
        height: 500px;
        background-color: #fff;
        border-radius: 10px;
    }
}
.back {
    height: 40px;
    line-height: 40px;
    text-align: right;
    padding: 0 15px;
}
.shop {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .img-box {
        height: 100px;
        width: 100px;
        img {
            height: 100%;
            width: 100%;
        }
    }
    .shop-msg {
        flex: 0 0 200px;
        margin-right: 10px;
        .price {
            color: #ff6700;
            font-size: 24px;
        }
        .name {
            line-height: 20px;
        }
    }
}
.item {
    padding: 22px 22px 0 22px;
    font-size: 14px;
    span {
        font-size: 13px;
        display: inline-block;
        padding: 8px 10px;
        margin: 10px 10px 0 10px;
        border: 1px solid #ff6700;
    }
}
.buy-num {
    padding: 22px 22px 0 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

}
.add-car {
    position: fixed;
    bottom: 10px;
    right: 10px;
    left: 10px;
    height: 40px;
    border-radius: 20px;
    background-color: #ff6700;
    color: #fff;
    text-align: center;
    line-height: 40px;
}
</style>
