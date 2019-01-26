<template>
    <div>
        <ul class="item">
            <li class="item-li" v-for="(item, index) in itemData" :key="index">
                <div class="img-box">
                    <img :src="item.img" alt="">
                </div>
                <p class="name">{{item.name}}</p>
            </li>
        </ul>
        <div class="more">查看更多 >></div>
    </div>
</template>

<script>
export default {
    name: 'ConItem',
    props: {
        itemData: Array
    }
}
</script>

<style lang="less" scoped>
.item {
    .item-li {
        width: 33.3%;
        float: left;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 13px;
        .img-box {
            width: 58%;
            margin: 0 auto;
            height: 50px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .name {
            font-size: 11px;
            padding-top: 10px;
        }
    }
    &:after {
        clear: both;
        display: block;
        content: " ";
    }
}
.more {
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    color: #696969;
    background: #FAEBD7;
    font-size: 14px;
}
</style>
