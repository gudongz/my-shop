<template>
    <div class="buy">
        <div class="car">
            <div><i class="iconfont icon-gouwuche"></i><span v-if="shopCarNum !== 0" class="car-num">{{shopCarNum}}</span></div>
            <div>购物车</div>
        </div>
        <div class="add-car" @click="buy">加入购物车</div>
    </div>
</template>

<script>
export default {
    name: 'buy',
    computed: {
        shopCarNum() {
            let shopCarInfo = this.$store.getters['shopCar/getShopCar']
            let sum = 0
            shopCarInfo.forEach(item => {
                sum += item.num
            })
            return sum
        }
    },
    methods: {
        buy() {
            this.$emit('buy')
        }
    }
}
</script>

<style lang="less" scoped>
.buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    left: 10px;
    height: 54px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
    background-color: #fff;
    font-size: 15px;
    .add-car {
        border-radius: 17px;
        text-align: center;
        line-height: 34px;
        background-color: #ff6700;
        color: #fff;
        height: 34px;
        width: 100px;
    }
    .car {
        position: relative;
        text-align: center;
        color: rgba(0,0,0,.54);
        font-size: 13px;
        i {
            font-size: 20px;
        }
        .car-num {
            display: inline-block;
            position: absolute;
            top: -8px;
            // bottom: 10px;
            right: -2px;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background-color: #ff6700;
            color: #fff;
        }
    }
}
</style>
