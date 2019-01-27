<template>
    <div>
        <ul>
            <li class="item">
                <check-icon></check-icon>
                <div class="img-box">
                    <img src="//i1.mifile.cn/a1/pms_1521442676.48017520!180x1800.jpg" alt="">
                </div>
                <div class="item-content">
                    <p class="item-title">小米Micro数据线 编织线版  （100cm） 黑色</p>
                    <em class="item-price">售价：19.9元</em>
                    <div class="number-group">
                        <x-number align="left" :min="0"></x-number>
                        <i class="iconfont icon-shezhi"></i>
                    </div>
                </div>
            </li>
        </ul>
        <div class="noShop">
            <i class="iconfont icon-gouwuche icon"></i>
            <span class="msg">购物车还是空的</span>
            <router-link
                tag="span"
                to=""
                class="goShop"
            >去逛逛</router-link>
        </div>
        <div class="tips">温馨提示：为了保证您能购买到商品，请尽快结算</div>
    </div>
</template>

<script>
import { CheckIcon, XNumber } from 'vux'
export default {
    name: 'InCar',
    components: {
        CheckIcon,
        XNumber
    }
}
</script>

<style lang="less" scoped>
.item {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border: 1px solid #eeeeee;
}
.img-box {
    flex: 0 0 5.6rem;
    height: 5.6rem;
    margin-right: .5rem;
    border: 1px solid #eeeeee;
    img {
        height: 100%;
        width: 100%;
    }
}
.item-content {
    width: 100%;
    color: #666;
    .item-title {
        font-size: .8rem;
        width: 10rem;
        line-height: 1.1rem;
    }
    .item-price {
        display: inline-block;
        margin-top: .5rem;
        font-size: .5rem;
    }
    .number-group {
        box-sizing: border-box;
        width: 100%;
        margin-top: .5rem;
        padding-right: .8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.weui-cell {
    padding: 0;
}
.noShop {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8rem 0;
    background: #ebebeb;
    .icon {
        color: #666;
        font-size: 2rem;
    }
    .msg {
        margin: 0 .4rem;
        color: #666;
        font-size: .8rem;
    }
    .goShop {
        font-size: .9rem;
        border: 1px solid #666;
        padding: .2rem .3rem;
    }
}
.tips {
    padding: .5rem .7rem;
    font-size: .5rem;
    color: #666;
}
</style>
