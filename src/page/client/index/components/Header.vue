<template>
    <div class="page-mian">
        <div class="header-classify">
            <i class="iconfont icon-wuxupailie"></i>
        </div>
        <div class="header-search">
            <i>搜索</i>
        </div>
        <div class="header-login">
            <i class="iconfont icon-gerenzhongxin"></i>
        </div>
    </div>
</template>

<script>
// import { XHeader } from 'vux'

export default {
    name: 'clientHeader'
    // components: { XHeader }
}
</script>

<style lang="less" scoped>

.page-mian {
    z-index: 3;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.9rem;
    background: #f2f2f2;
    .header-search {
        flex: 0 0 65%;
        background-color: #fff;
        height: 1.8rem;
        line-height: 1.8rem;
        text-indent: 1rem;
        border-radius: .9rem;
        color: #696969;
    }
}

.header-classify {
    i{
        margin-left: 1rem;
        font-size: 1.4rem;
        color: #696969;
    }
}

.header-login {
   i{
        margin-right: 1rem;
        font-size: 1.4rem;
        color: #696969;

    }
}

</style>
