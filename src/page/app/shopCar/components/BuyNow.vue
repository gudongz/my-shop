<template>
    <div class="car-buy" v-if="shopCarInfo.length > 0">
        <div class="money">
            <div>共{{num}}件</div>
            <div><span class="money-num">{{money}}</span>元</div>
        </div>
        <div class="go-on">
            继续购物
        </div>
        <div class="buy" @click="submit">
            去结算
        </div>
    </div>
</template>

<script>
export default {
    name: 'BuyNow',
    props: {
        shopCarInfo: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        userInfo() {
            return this.$store.getters['userInfo/getAppUserInfo']
        },
        num() {
            let sum = 0
            this.shopCarInfo.forEach(item => {
                if (item.checked) {
                    sum += item.num
                }
            })
            return sum
        },
        money() {
            let sum = 0
            this.shopCarInfo.forEach(item => {
                if (item.checked) {
                    sum += item.num * item.shopInfo.price
                }
            })
            return sum
        }
    },
    methods: {
        submit() {
            // 判断用户是否登陆，没登陆，跳转到登陆页
            let locaAppUserInfo = JSON.parse(localStorage.getItem('locaAppUserInfo'))
            if (this.userInfo.id && locaAppUserInfo.id) {
                this.$router.push({ path: '/app/orderConfirm' })
            } else {
                this.$router.push({ path: '/app/login' })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.car-buy {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 53px;
    background-color: #ffffff;
    z-index: 600;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    .money, .go-on, .buy {
        flex: 1;
        font-size: 14px;
        text-align: center;
    }
    .money {
        color: #999;
        .money-num {
            font-weight: 600;
            font-size: 18px;
            color: #ff6700;
        }
    }
    .go-on, .buy {
        height: 53px;
        line-height: 53px;
    }
    .go-on {
        background: #f4f4f4;
    }
    .buy {
        color: #fff;
        background: #ff6700;
    }

}
</style>
