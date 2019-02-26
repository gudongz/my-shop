<template>
    <div class="section">
        <h3 class="shop-name">{{shopTitle.name}}</h3>
        <p class="shop-message">{{shopTitle.message}}</p>
        <div class="price">￥{{shopTitle.price}}</div>
    </div>
</template>

<script>
export default {
    name: 'ShopTitle',
    props: {
        shopTitle: Object
    }
}
</script>

<style lang="less" scoped>
.section {
    padding: 20px 15px 0 15px;
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
