<template>
    <div>
        <ul class="item">
            <li class="item-li" v-for="(item, index) in itemData" :key="index" @click="goDetail(item.id)">
                <div class="img-box" >
                    <img :src="item.view_picture[0].url" alt="图片">
                </div>
                <p class="name">{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ConItem',
    props: {
        itemData: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        goDetail(params) {
            console.log(111)
            this.$router.push({ path: '/app/shopDetail', query: { id: params } })
        }
    }
}
</script>

<style lang="less" scoped>
.item {
    height: 100%;
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
