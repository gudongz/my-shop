<template>
    <div class="section">
        <h3 class="shop-name">红米Note7</h3>
        <p class="shop-message">4800万拍照千元机 / 品质“小金刚”，18个月超长质保 / “满血版”骁龙660处理器 / 4000mAh 大电量 / 6.3" 水滴全面屏 / USB-C 接口，方便耐用 / 支持快充 4 协议</p>
        <div class="price">￥999</div>
    </div>
</template>

<script>
export default {
    name: 'ShopTitle'
}
</script>

<style lang="less" scoped>
.section {
    padding: 20px 15px;
    .shop-name {
        font-size: 22px;
    }
    .shop-message {
        margin-top: 5px;
        font-size: 13px;
        line-height: 17px;
        color: rgba(0,0,0,.54);
    }
    .price {
        margin: 10px 0;
        font-size: 25px;
        font-weight: 600;
        color: #ff6700;
    }
}
</style>
