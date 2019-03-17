<template>
    <div>
        <common-header></common-header>
        <div class="main">
            <div class="address">
                <group class="address-group">
                    <x-address title="添加收货地址" v-model="addressOne" :list="addressData"></x-address>
                    <x-input v-model='addressTwo' placeholder="填写详细地址"></x-input>
                </group>
            </div>
            <div class="line"></div>
            <div class="user">
                <group title="收件人信息">
                    <x-input title="姓名：" v-model='name'></x-input>
                    <x-input title="手机号：" v-model='phone'></x-input>
                </group>
            </div>
            <div class="line"></div>
            <div class="shop-list" v-for="item in shopCarInfo" :key="item.id">
                <template v-if="item.checked">
                    <div class="img-box">
                        <img class="image" :src="item.shopInfo.view_picture[0].url" alt="图片">
                    </div>
                    <div class="shop-msg">{{item.shopInfo.name}} {{item.shopInfo.size}} {{item.shopInfo.color}}</div>
                    <div class="shop-money"><span>{{item.shopInfo.price}}</span> x {{item.num}}</div>
                </template>
            </div>
            <div class="footer">
                <div class="order-msg">共{{shopCarNum}}件 合计：<span>{{sumMoney}}</span></div>
                <div class="pay" @click="goPay">去付款</div>
            </div>
        </div>
    </div>
</template>

<script>
import CommonHeader from '../components/common_header'
import { XInput, Group, XAddress, ChinaAddressV4Data } from 'vux'
import { getDate } from '@/utils/util'
import { apiAddOrder } from '@/api/index'
export default {
    name: 'OrderConfirm',
    components: {
        CommonHeader,
        XInput,
        XAddress,
        Group
    },
    data() {
        return {
            addressOne: [],
            addressTwo: '',
            addressData: ChinaAddressV4Data,
            name: '',
            phone: ''
        }
    },
    computed: {
        userInfo() {
            return this.$store.getters['userInfo/getAppUserInfo']
        },
        shopCarInfo() {
            return this.$store.getters['shopCar/getShopCar']
        },
        shopCarNum() {
            let shopCarInfo = this.$store.getters['shopCar/getShopCar']
            let sum = 0
            shopCarInfo.forEach(item => {
                if (item.checked) {
                    sum += item.num
                }
            })
            return sum
        },
        sumMoney() {
            let shopCarInfo = this.$store.getters['shopCar/getShopCar']
            let sum = 0
            shopCarInfo.forEach(item => {
                if (item.checked) {
                    sum += item.num * item.shopInfo.price
                }
            })
            return sum
        }
    },
    mounted() {
        this.name = this.userInfo.name
        this.phone = this.userInfo.phone
    },
    methods: {
        goPay() {
            if (this.addressOne.length === 0 || this.addressTwo === '') {
                this.$vux.toast.text('请填写收货地址', 'top')
                return
            }
            if (this.name === '') {
                this.$vux.toast.text('请填写收货人姓名', 'top')
                return
            }
            if (this.phone === '') {
                this.$vux.toast.text('请填写收货人手机号', 'top')
                return
            }
            this.$vux.loading.show({
                text: '加载中...'
            })
            let goodsInfo = []
            let shop = this.shopCarInfo.map(item => {
                if (item.checked) {
                    return item
                }
            })
            goodsInfo = shop.map(item => {
                return {
                    id: item.id,
                    num: item.num
                }
            })
            let date = getDate()
            let strDate = date.replace(/-/g, '')

            let obj = {
                userId: this.userInfo.id, // 用户id
                orderNumber: `${this.userInfo.id}${strDate}`, // 订单编号
                goodsInfo: JSON.stringify(goodsInfo), // 商品信息
                // goodsInfo,
                status: 1, // 订单状态，1 = 已支付
                money: this.sumMoney, // 总订单
                num: this.shopCarNum, // 总数量
                address: `${this.addressOne},${this.addressTwo}`, // 收货地址
                name: this.name, // 收件人
                phone: this.phone, // 收件人手机号
                createTime: date, // 订单创建日期
                changeTime: date // 订单变更日期
            }
            // console.log(obj)
            apiAddOrder({
                ...obj
            }).then(res => {
                if (res.code === '00000') {
                    this.$vux.loading.hide()
                    this.$router.push({ path: '/app/myOrder' })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    margin-top: 46px;
    // background-color:
    .address {
        background: #fff url('../../../assets/bd1.png') 0 0 repeat-x;
        background-size: 40px 10px;
        padding-top: 5px;
        .address-group {
            margin-top: -20px;
        }
    }
    .line {
        height: 10px;
        background: #f5f5f5;
        overflow: hidden;
        clear: both;
    }
    .shop-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        border-bottom: 1px solid #eee;
        .img-box {
            padding: 5px;
            .image {
                height: 50px;
                width: 50px;
            }
        }
        .shop-msg {
            flex: 1;
            margin-right: 6px;
            color: #3c3c3c;
            height: 30px;
            overflow: hidden;
            font-size: 15px;
        }
        .shop-money {
            font-size: 13px;
            span {
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
    .footer {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        height: 50px;
        border-top: 1px solid #ddd;
        display: flex;
        .order-msg {
            flex: 1;
            text-align: center;
            height: 50px;
            line-height: 50px;
            font-size: 14px;
            color: #ff4d14;
            span {
                font-weight: 600;
                font-size: 16px;
            }
        }
        .pay {
            flex: 1;
            text-align: center;
            height: 50px;
            line-height: 50px;
            background-color:#ff4d14;
            color: #fff;
        }
    }
}
</style>
