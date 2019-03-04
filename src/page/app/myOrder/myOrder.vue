<template>
    <div class="main">
        <common-header></common-header>
        <div class="item-list">
            <div :class="{ item: true, active: status === 0 }" @click="handle(0)">全部</div>
            <div :class="{ item: true, active: status === 1 }" @click="handle(1)">待支付</div>
            <div :class="{ item: true, active: status === 2 }" @click="handle(2)">待收货</div>
            <div :class="{ item: true, active: status === 3 }" @click="handle(3)">已完成</div>
        </div>
        <div class="wall" v-for="item in orderList" :key="item.id">
            <card :header="{title: `订单编号：${item.order_number}`}">
                <div slot="content">
                    <div class="cont-item"><span>收件人：</span><span>{{item.name}}</span></div>
                    <div class="cont-item"><span>电话：</span><span>{{item.phone}}</span></div>
                    <div class="cont-item"><span>收件地址：</span><span>{{item.address}}</span></div>
                    <div class="cont-item"><span>下单日期：</span><span>{{item.create_time}}</span></div>
                    <div class="cont-item"><span>最近更新日期：</span><span>{{item.change_time}}</span></div>
                    <div class="shop-info" v-for="i in item.goods_info" :key="i.id">
                        <div class="shop-img">
                            <img :src="i.shop.view_picture[0].url" alt="图片">
                        </div>
                        <div class="shop-msg">
                            {{i.shop.name}} {{i.shop.size}} {{i.shop.color}}
                        </div>
                        <div class="shop-num">{{i.shop.price}} x {{i.num}}</div>
                    </div>
                </div>
                <div slot="footer" class="footer">
                    <div class="sum">共{{item.num}}件 {{item.money}}元</div>
                    <div class="status" v-if='item.status == 0'>全部</div>
                    <div class="status" v-if='item.status == 1'>待付款</div>
                    <div class="status" v-if='item.status == 2'>待收货</div>
                    <div class="status" v-if='item.status == 3'>已完成</div>
                </div>
            </card>
        </div>
    </div>
</template>

<script>
import CommonHeader from '../components/common_header'
import { Card } from 'vux'
import { apiGetUserOrder } from '@/api/index'
export default {
    name: 'MyOrder',
    components: { CommonHeader, Card },
    data() {
        return {
            status: 0,
            test: 'hasdfasd',
            orderList: []
        }
    },
    computed: {
        userInfo() {
            return this.$store.getters['userInfo/getAppUserInfo']
        }
    },
    mounted() {
        if (this.userInfo.id) {
            this.handle(0)
        }
    },
    methods: {
        handle(index) {
            this.status = index
            apiGetUserOrder({
                userId: this.userInfo.id,
                type: this.status // 0 全部， 1 待支付， 2 待收货， 3 已完成
            }).then(res => {
                if (res.code === '00000') {
                    this.orderList = res.result || []
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    margin-top: 81px;
    .item-list {
        position: fixed;
        top: 46px;
        right: 0;
        left: 0;
        display: flex;
        z-index: 100;
        background-color: #fff;
        .item {
            position: relative;
            flex: 1;
            text-align: center;
            height: 35px;
            line-height: 35px;
            font-size: 15px;
            border-bottom: 1px solid #eee;
        }
        .active {
            &::after {
                position: absolute;
                bottom: 0;
                right: 0;
                left: 0;
                content: "";
                background-color: #ff4d14;
                width: 100%;
                height: 2px;
            }
        }
    }
    .wall {
        padding: 5px 0;
        background-color: #eee;
        .cont-item {
            display: flex;
            justify-content: space-between;
            height: 25px;
            line-height: 25px;
            font-size: 14px;
            // color: #999;
            padding: 0 15px;
        }
        .shop-info {
            padding: 10px 15px;
            display: flex;
            align-items: center;
            .shop-img {
                height: 50px;
                width: 50px;
                img {
                    height: 100%;
                    width: 100%;
                }
            }
            .shop-msg {
                flex: 1;
                margin: 0 10px;
                font-size: 14px;
            }
        }
        .footer {
            padding: 0 15px;
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 20px;
            text-align: right;
        }
    }
}
</style>
