<template>
    <div class="shop-item">
        <div class="img-box">
            <img src="//i8.mifile.cn/b2c-mimall-media/02875f66623b959e99769a140cf07c5e.jpg" alt="">
        </div>
        <div class="right-container">
            <div class="title">红米6A</div>
            <p class="msg">4800万拍照千元机万拍照千元机万拍照千元机万拍照千元机万拍照千元万拍照千</p>
            <div class="tag">
                <span>大屏</span>
                <span>双摄</span>
                <span>超长待机</span>
            </div>
            <div class="price">￥<span>999</span></div>
            <div class="evaluate">
                <span>53334条评价</span>
                <span>99%满意</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopItem'
}
</script>

<style lang="less" scoped>
.shop-item {
    height: 148px;
    display: flex;
    align-items: center;
    padding-right: 15px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    .img-box {
        width: 40%;
        img {
            height: 100%;
            width: 100%;
        }
    }
    .right-container {
        width: 60%;
        .title {
            color: rgba(0,0,0,.87);
        }
        .msg {
            margin-top: 3px;
            height: 32px;
            line-height: 15px;
            color: rgba(0,0,0,.54);
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .tag {
            padding: 5px 0;
            span {
                padding: 0 5px;
                border-radius: 1px;
                font-size: 10px;
                height: 15px;
                line-height: 15px;
                color: #999;
                background-color: #f2f2f7;
            }
        }
        .price {
            padding: 5px 0;
            color: #ff6700;
            span {
                font-size: 19px;
            }
        }
        .evaluate {
            color: rgba(0,0,0,.54);
            font-size: 12px;
        }
    }
}
</style>
