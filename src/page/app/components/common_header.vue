<template>
    <div class="header" v-if="headerShow">
        <x-header  :left-options="{backText: ''}">{{title}}
            <i slot="right" class="iconfont icon-sousuo search"></i>
        </x-header>
    </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
    name: 'CommonHeader',
    components: { XHeader },
    data() {
        return {
            title: '',
            headerShow: false
        }
    },
    watch: {
        '$route': {
            handler(params) {
                if (params.path === '/index' || params.path === '/myCenter') {
                    this.headerShow = false
                } else {
                    this.headerShow = true
                    this.title = params.name
                }
            },
            immediate: true
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1;
}
.search {
    font-size: 1.3rem;
    color: #828282;
}
</style>
