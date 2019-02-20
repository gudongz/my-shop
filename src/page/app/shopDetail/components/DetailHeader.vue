<template>
    <div class="header">
        <div class="back">
            <i class="iconfont icon-houtui"></i>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DetailHeader'
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    height: 50px;
    .back {
        margin-left: 10px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
        color: #ddd;
        background: rgba(0,0,0,.6);
        text-align: center;
    }
}
</style>
