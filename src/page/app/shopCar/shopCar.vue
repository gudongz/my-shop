<template>
    <div class="mian">
        <div class="noLoginMsg">
            <span>登陆后享受更多优惠</span>
            <span class="noLogin-arrow">去登陆
                <i class="iconfont icon-gerenzhongxin"></i>
            </span>
        </div>
        <in-car></in-car>
        <div class="guess">
            <img src="../../../assets/carbg.jpg" alt="">
        </div>
        <shop-list></shop-list>
    </div>
</template>

<script>
import InCar from './components/InCar'
import ShopList from '../components/ShopList'
export default {
    name: 'ShopCar',
    components: {
        InCar,
        ShopList
    }
}
</script>

<style lang="less" scoped>
.mian {
    // padding: 0 1rem;
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
