<template>
    <div>
        <el-dialog title="订单详情" :visible.sync="detailData.isShow" width="550px">
            <div class="container">
                <div class="cont-item"><span>收件人：</span><span>{{name}}</span></div>
                <div class="cont-item"><span>电话：</span><span>{{phone}}</span></div>
                <div class="cont-item"><span>收件地址：</span><span>{{address}}</span></div>
                <div class="shop-info" v-for="i in goodsInfo" :key="i.id">
                    <div class="shop-img">
                        <img :src="i.shop.view_picture[0].url" alt="图片">
                    </div>
                    <div class="shop-msg">
                        {{i.shop.name}} {{i.shop.size}} {{i.shop.color}}
                    </div>
                    <div class="shop-num">{{i.shop.price}} x {{i.num}}</div>
                </div>
            </div>
            <div slot="footer">
                <el-button size="mini" type="primary" @click="detailData.isShow = false">关闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'OrderDetail',
    props: {
        detailData: Object
    },
    data() {
        return {
            name: '',
            phone: '',
            address: '',
            goodsInfo: []
        }
    },
    watch: {
        detailData: {
            handler(val) {
                this.name = val.data.name
                this.phone = val.data.phone
                this.address = val.data.address
                this.goodsInfo = [...val.data.goods_info]
            },
            deep: true
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    max-height: 400px;
    overflow: auto;
    .cont-item {
        padding: 3px 15px;
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
}
</style>
