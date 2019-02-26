<template>
    <div class="img-box">
        <div class="title">图片介绍</div>
        <img v-for="item of imgList" :key="item.id" :src="item.url" alt="img">
    </div>
</template>

<script>
export default {
    name: 'DetailImage',
    props: {
        imgList: Array
    }
}
</script>

<style lang="less" scoped>
.title {
    margin-top: 40px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 18px;
}
.img-box {
    width: 100%;
    img {
        width: 100%;
    }
}
</style>
