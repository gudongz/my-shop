<template>
    <div class="mian">
        <div class="noLoginMsg" v-if="userInfo">
            <span>登陆后享受更多优惠</span>
            <span class="noLogin-arrow">去登陆
                <i class="iconfont icon-gerenzhongxin"></i>
            </span>
        </div>
        <in-car :shop-car-info="shopCarInfo"></in-car>
        <div class="guess">
            <img src="../../../assets/carbg.jpg" alt="">
        </div>
        <shop-list :shop-list="hotShop"></shop-list>
        <buy-now :shop-car-info="shopCarInfo"></buy-now>
    </div>
</template>

<script>
import InCar from './components/InCar'
import ShopList from '../components/ShopList'
import BuyNow from './components/BuyNow'
import { apiGetHotGoods } from '@/api/index'
export default {
    name: 'ShopCar',
    data() {
        return {
            hotShop: []
        }
    },
    components: {
        InCar,
        ShopList,
        BuyNow
    },
    computed: {
        shopCarInfo() {
            return this.$store.getters['shopCar/getShopCar']
        },
        userInfo() {
            return this.$store.getters['userInfo/appUserInfo']
        }
    },
    mounted() {
        console.log(this.shopCarInfo)
        this.getHotGoods({ hot: 1 })
    },
    methods: {
        getHotGoods(params) {
            apiGetHotGoods({
                ...params
            }).then(res => {
                this.hotShop = res.result || []
            })
        }
    }
}
</script>

<style lang="less" scoped>
.mian {
    // padding: 0 1rem;
    padding-top: 46px;
    padding-bottom: 53px;
    .guess {
        width: 100%;
        img {
            height: 100%;
            width: 100%;
        }
    }
}
.noLoginMsg {
    margin-top: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .noLogin-arrow, i {
        font-size: .8rem;
        color:rgba(0,0,0,.54);
    }
}
</style>
